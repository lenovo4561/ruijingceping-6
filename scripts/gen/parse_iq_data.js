const fs = require('fs')
const path = require('path')

const content = fs.readFileSync(
  path.join(__dirname, '../../scripts/iq_content.txt'),
  'utf8'
)
const lines = content
  .split('\n')
  .map(l => l.trim())
  .filter(l => l)

const questions = []
const results = []
let currentResult = null
let correctAnswers = {}

// Parse Answer Key first
lines.forEach(line => {
  if (line.startsWith('正确答案：')) {
    // Format: 1.B 2.B 3.A ...
    const parts = line
      .replace('正确答案：', '')
      .trim()
      .split(/\s+/)
    parts.forEach(part => {
      const [id, ans] = part.split('.')
      if (id && ans) {
        correctAnswers[id] = ans
      }
    })
  }
})

lines.forEach(line => {
  // Parse Questions
  // Matches: Question text followed by A. ... B. ... C. ... D. ...
  // Similar regex to EQ test but handling variations if any
  if (
    line.includes('A.') &&
    line.includes('B.') &&
    line.includes('C.') &&
    line.includes('D.')
  ) {
    const parts = line.match(/(.+?)(A\..+?)(B\..+?)(C\..+?)(D\..+?)$/)
    if (parts) {
      const id = questions.length + 1
      questions.push({
        id: id,
        title: parts[1].trim(),
        options: [
          { label: 'A', content: parts[2].replace('A.', '').trim() },
          { label: 'B', content: parts[3].replace('B.', '').trim() },
          { label: 'C', content: parts[4].replace('C.', '').trim() },
          { label: 'D', content: parts[5].replace('D.', '').trim() }
        ],
        correctAnswer: (correctAnswers[id] || 'A')
          .replace(/评分规则.*$/, '')
          .trim()
      })
    }
    return
  }

  // Parse Results
  const resultMatch = line.match(/^(\d+)\.\s+总分(\d+)-(\d+)分：(.+)$/)
  if (resultMatch) {
    if (currentResult) {
      results.push(currentResult)
    }
    currentResult = {
      level: resultMatch[4].trim(),
      minScore: parseInt(resultMatch[2]),
      maxScore: parseInt(resultMatch[3]),
      title: resultMatch[4].trim(),
      desc: []
    }
    return
  }

  if (
    currentResult &&
    !line.includes('每题对应分值') &&
    !line.includes('三、评估结论') &&
    !line.startsWith('二、评分标准') &&
    !line.startsWith('正确答案')
  ) {
    if (line.length > 10) {
      currentResult.desc.push(line)
    }
  }
})

if (currentResult) {
  results.push(currentResult)
}

results.forEach(r => {
  r.description = r.desc.join('\n\n')
  delete r.desc
})

const data = {
  title: '高难度智商（IQ）测试',
  questions,
  results,
  scorePerQuestion: 5
}

const outputPath = path.join(__dirname, '../../src/data/iq_test.json')
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
console.log(`Generated ${outputPath}`)

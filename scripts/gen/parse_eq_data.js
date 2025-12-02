const fs = require('fs')
const path = require('path')

const content = fs.readFileSync(
  path.join(__dirname, '../../scripts/eq_content.txt'),
  'utf8'
)
const lines = content
  .split('\n')
  .map(l => l.trim())
  .filter(l => l)

const questions = []
const results = []
let currentResult = null

// Scoring map
const scores = { A: 1, B: 4, C: 2, D: 3 }

lines.forEach(line => {
  // Parse Questions
  // Matches: Question text followed by A. ... B. ... C. ... D. ...
  // Regex to capture question and options
  // Note: Some questions end with ？, others might not.
  // Options start with A. B. C. D.

  if (
    line.includes('A.') &&
    line.includes('B.') &&
    line.includes('C.') &&
    line.includes('D.')
  ) {
    // This is likely a question line
    // Split by options
    const parts = line.match(/(.+?)(A\..+?)(B\..+?)(C\..+?)(D\..+?)$/)
    if (parts) {
      questions.push({
        id: questions.length + 1,
        title: parts[1].trim(),
        options: [
          {
            label: 'A',
            content: parts[2].replace('A.', '').trim(),
            score: scores['A']
          },
          {
            label: 'B',
            content: parts[3].replace('B.', '').trim(),
            score: scores['B']
          },
          {
            label: 'C',
            content: parts[4].replace('C.', '').trim(),
            score: scores['C']
          },
          {
            label: 'D',
            content: parts[5].replace('D.', '').trim(),
            score: scores['D']
          }
        ]
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
    !line.startsWith('二、评分标准')
  ) {
    // Clean up description text
    if (line.length > 10) {
      // Filter out short noise lines
      currentResult.desc.push(line)
    }
  }
})

if (currentResult) {
  results.push(currentResult)
}

// Format results description to be a single string or paragraphs
results.forEach(r => {
  r.description = r.desc.join('\n\n')
  delete r.desc
})

const data = {
  title: '情商（EQ）测试',
  questions,
  results
}

const outputPath = path.join(__dirname, '../../src/data/eq_test.json')
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
console.log(`Generated ${outputPath}`)

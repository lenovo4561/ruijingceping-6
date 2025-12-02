const fs = require('fs')
const path = require('path')

const files = {
  qinggan: '情感.txt',
  quwei: '趣味.txt',
  shiye: '事业.txt',
  xingge: '性格.txt'
}

const outputData = {}

function parseText(text, categoryId) {
  const tests = []
  const testChunks = text.split(/第[一二三四五六七八九十]+套[：:.]?/g)

  for (let i = 1; i < testChunks.length; i++) {
    let chunk = testChunks[i].trim()
    if (!chunk) continue

    let lines = chunk
      .split('\n')
      .map(l => l.trim())
      .filter(l => l)
    let title = lines[0]

    const questions = []
    const results = []
    let currentQuestion = null
    let isParsingResults = false
    let currentResult = null

    for (let j = 1; j < lines.length; j++) {
      const line = lines[j]

      // Detect start of results section
      if (
        line.includes('得分解析') ||
        line.includes('评分解析') ||
        line.includes('评估结论') ||
        (line.includes('评分') && line.includes('解析'))
      ) {
        isParsingResults = true
        // Save last question if exists
        if (currentQuestion) {
          questions.push(currentQuestion)
          currentQuestion = null
        }
        continue
      }

      if (isParsingResults) {
        // Parse results: e.g., "16-20分：Title"
        const scoreMatch = line.match(/(\d+)-(\d+)分/)

        if (scoreMatch) {
          if (currentResult) {
            results.push(currentResult)
          }

          const min = parseInt(scoreMatch[1])
          const max = parseInt(scoreMatch[2])
          // Remove score part to get title
          let resTitle = line.replace(/.*?分[：:.]?/, '').trim()
          // Remove leading numbering if any (e.g., "1. ")
          resTitle = resTitle.replace(/^\d+[.、]\s*/, '')

          currentResult = {
            min,
            max,
            title: resTitle,
            desc: ''
          }
        } else if (currentResult) {
          // Append to description
          currentResult.desc += line + '\n'
        }
      } else {
        // Parse questions
        if (line.includes('A.') || line.includes('A、')) {
          let qText = ''
          let optionsText = line

          const splitIndex = line.search(/[AＡ][.、]/)
          if (splitIndex > 0) {
            qText = line.substring(0, splitIndex).trim()
            optionsText = line.substring(splitIndex).trim()
          }

          if (qText) {
            if (currentQuestion) questions.push(currentQuestion)
            currentQuestion = { question: qText, options: [] }
          }

          // Add options to current question (even if question text was in prev line)
          const optionRegex = /([A-DＡ-Ｄ])[.、\s](.*?)(?=(?:[A-DＡ-Ｄ][.、\s])|$)/g
          let match
          while ((match = optionRegex.exec(optionsText)) !== null) {
            let label = match[1].normalize('NFKC')
            let text = match[2].trim()
            let score = 0
            if (label === 'A') score = 4
            else if (label === 'B') score = 3
            else if (label === 'C') score = 2
            else if (label === 'D') score = 1

            if (currentQuestion) {
              currentQuestion.options.push({ label, text, score })
            }
          }
        } else {
          if (line.endsWith('？') || line.endsWith('?')) {
            if (currentQuestion) questions.push(currentQuestion)
            currentQuestion = { question: line, options: [] }
          }
        }
      }
    }

    if (currentQuestion) questions.push(currentQuestion)
    if (currentResult) results.push(currentResult)

    const validQuestions = questions.filter(q => q.options.length >= 2)

    if (validQuestions.length > 0) {
      tests.push({
        id: `${categoryId}_${i}`,
        title: title,
        questions: validQuestions,
        results: results
      })
    }
  }
  return tests
}

for (const [key, filename] of Object.entries(files)) {
  const filePath = path.join(__dirname, '../src/assets', filename)
  if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf-8')
    outputData[key] = parseText(text, key)
    console.log(`Parsed ${key}: ${outputData[key].length} tests`)
  }
}

const jsContent = `export default ${JSON.stringify(outputData, null, 2)}`
fs.writeFileSync(
  path.join(__dirname, '../src/data/testQuestions.js'),
  jsContent
)
console.log('Done writing src/data/testQuestions.js')

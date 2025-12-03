/**
 * 解析"个人核心特质四套测试题及评估结论.docx"内容
 * 生成 hotTests.js 数据文件
 */
const fs = require('fs')
const path = require('path')

const inputPath = path.join(__dirname, 'core_traits_content.txt')
const outputPath = path.join(__dirname, '../src/data/hotTests.js')

const text = fs.readFileSync(inputPath, 'utf-8')

// 定义四套测试的元数据
const testMeta = [
  {
    id: 1,
    title: '自我认知清晰度测试',
    count: 9876,
    rating: 5,
    desc: '聚焦自我认知'
  },
  {
    id: 2,
    title: '情绪管理成熟度测试',
    count: 8543,
    rating: 5,
    desc: '聚焦情绪管理'
  },
  {
    id: 3,
    title: '抗压能力韧性测试',
    count: 7621,
    rating: 5,
    desc: '聚焦抗压能力'
  },
  {
    id: 4,
    title: '人际边界感测试',
    count: 6932,
    rating: 5,
    desc: '聚焦人际边界'
  }
]

// 分割四套测试
const testSections = text.split(/第[一二三四]套[：:]/)

function parseQuestions(section) {
  const questions = []
  const lines = section
    .split('\n')
    .map(l => l.trim())
    .filter(l => l)

  for (const line of lines) {
    // 匹配问题行：以"？"结尾且包含选项 A. B. C. D.
    if (line.includes('？') && line.includes('A.')) {
      const qMatch = line.match(/^(.+？)/)
      if (qMatch) {
        const questionText = qMatch[1]
        const optionsText = line.substring(questionText.length)

        // 解析选项
        const options = []
        const optionRegex = /([A-D])\.\s*([^A-D]+?)(?=(?:[A-D]\.)|$)/g
        let match
        while ((match = optionRegex.exec(optionsText)) !== null) {
          const label = match[1]
          const text = match[2].trim()
          // 评分标准：A=1分，B=4分，C=2分，D=3分
          let score = 0
          if (label === 'A') score = 1
          else if (label === 'B') score = 4
          else if (label === 'C') score = 2
          else if (label === 'D') score = 3

          options.push({ label, text, score })
        }

        if (options.length === 4) {
          questions.push({ question: questionText, options })
        }
      }
    }
  }

  return questions
}

function parseResults(section) {
  const results = []
  const lines = section
    .split('\n')
    .map(l => l.trim())
    .filter(l => l)

  let inResults = false
  let currentResult = null

  for (const line of lines) {
    if (line.includes('评估结论')) {
      inResults = true
      continue
    }

    if (inResults) {
      // 匹配结论行：1. 5-10分（xxx）：
      const resultMatch = line.match(
        /^\d+\.\s*(\d+)-(\d+)分（([^）]+)）[：:](.*)/
      )
      if (resultMatch) {
        if (currentResult) {
          results.push(currentResult)
        }
        currentResult = {
          min: parseInt(resultMatch[1]),
          max: parseInt(resultMatch[2]),
          title: resultMatch[3],
          desc: resultMatch[4].trim()
        }
      } else if (
        currentResult &&
        line &&
        !line.includes('第') &&
        !line.includes('评分标准')
      ) {
        // 追加描述
        currentResult.desc += line
      }
    }
  }

  if (currentResult) {
    results.push(currentResult)
  }

  return results
}

// 解析每套测试
const hotTests = []

for (let i = 1; i < testSections.length; i++) {
  const section = testSections[i]
  const meta = testMeta[i - 1]

  const questions = parseQuestions(section)
  const results = parseResults(section)

  hotTests.push({
    id: meta.id,
    title: meta.title,
    count: meta.count,
    rating: meta.rating,
    desc: meta.desc,
    questions,
    results
  })

  console.log(
    `解析 ${meta.title}: ${questions.length} 题, ${results.length} 个结论`
  )
}

// 生成 JS 文件
const jsContent = `export default ${JSON.stringify(hotTests, null, 2)}
`

fs.writeFileSync(outputPath, jsContent)
console.log(`\n已生成: ${outputPath}`)

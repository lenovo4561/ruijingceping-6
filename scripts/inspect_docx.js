const mammoth = require('mammoth')
const fs = require('fs')
const path = require('path')

const file = '高难度智商（IQ）测试题及评估结论（20题版）.docx'
const filePath = path.join(__dirname, '../src/assets', file)

async function extractText() {
  try {
    const result = await mammoth.extractRawText({ path: filePath })
    fs.writeFileSync(path.join(__dirname, 'iq_content.txt'), result.value)
    console.log('Done')
  } catch (error) {
    console.error(error)
  }
}

extractText()

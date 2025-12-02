const mammoth = require('mammoth')
const fs = require('fs')
const path = require('path')

const files = ['10个必知生活常识详解.docx']

async function processFiles() {
  for (const file of files) {
    const filePath = path.join(__dirname, '../src/assets', file)
    try {
      const result = await mammoth.extractRawText({ path: filePath })
      const text = result.value
      const outputName = file.replace('.docx', '.txt')
      const outputPath = path.join(__dirname, '../src/assets', outputName)
      fs.writeFileSync(outputPath, text)
      console.log(`Processed ${file} -> ${outputName}`)
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }
}

processFiles()

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src/assets/10个必知生活常识详解.txt')
const text = fs.readFileSync(filePath, 'utf-8')

const items = []
// Split by "一、" "二、" etc.
const chunks = text.split(/[一二三四五六七八九十]、/g)

// First chunk is intro
for (let i = 1; i < chunks.length; i++) {
  const chunk = chunks[i].trim()
  const lines = chunk
    .split('\n')
    .map(l => l.trim())
    .filter(l => l)

  if (lines.length > 0) {
    const title = lines[0]
    const content = lines.slice(1).join('\n\n')

    items.push({
      id: i,
      title: title,
      img: `/assets/imgss/${i}.png`,
      content: content
    })
  }
}

const jsContent = `export default ${JSON.stringify(items, null, 2)}`
fs.writeFileSync(
  path.join(__dirname, '../src/data/commonKnowledge.js'),
  jsContent
)
console.log('Done writing src/data/commonKnowledge.js')

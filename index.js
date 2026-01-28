const fs = require('fs');
const path = require('path');

function generateFile() {
  const baseName = '累死我了';
  let fileName = `${baseName}.md`;
  let counter = 1;

  // 自动识别目录里文件名冲突并以新名称创建文件
  while (fs.existsSync(fileName)) {
    fileName = `${baseName}_${counter}.md`;
    counter++;
  }

  // 生成 32767 行的大标题加粗加斜体内容
  const content = Array(32767).fill('# ***累死我了***').join('\n');
  
  try {
    fs.writeFileSync(fileName, content);
    console.log(`成功创建文件: ${fileName}`);
    console.log(`文件行数: 32767`);
  } catch (err) {
    console.error('写入文件失败:', err);
  }
}

generateFile();

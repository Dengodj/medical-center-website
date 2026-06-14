const fs = require('fs-extra');
const path = require('path');

const srcDir = path.join(__dirname, 'docs', 'browser');
const destDir = path.join(__dirname, 'docs');

async function moveFiles() {
  try {
    if (await fs.pathExists(srcDir)) {
      await fs.copy(srcDir, destDir);
      await fs.remove(srcDir);
      console.log('🚀 Структура папки docs успешно выпрямлена для GitHub Pages!');
    } else {
      console.log('Папка docs/browser не найдена, выпрямление не требуется.');
    }
  } catch (err) {
    console.error('Ошибка при перемещении файлов:', err);
  }
}

moveFiles();

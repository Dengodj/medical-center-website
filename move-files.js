const fs = require('fs-extra');
const path = require('path');

const srcDir = path.join(__dirname, 'docs', 'browser');
const destDir = path.join(__dirname, 'docs');

async function moveFiles() {
  try {
    if (await fs.pathExists(srcDir)) {
      console.log('Выпрямляем структуру папок для GitHub Pages...');

      await fs.copy(srcDir, destDir);

      await fs.remove(srcDir);
      console.log('🚀 Структура папки docs успешно выпрямлена!');
      const indexPath = path.join(destDir, 'index.html');
      const errorPath = path.join(destDir, '404.html');

      if (await fs.pathExists(indexPath)) {
        await fs.copy(indexPath, errorPath);
        console.log('✨ Файл 404.html успешно создан для поддержки роутинга!');
      }
    } else {
      console.log('Папка docs/browser не найдена. Проверь, запущен ли билд.');
    }
  } catch (err) {
    console.error('❌ Ошибка при обработке файлов сборки:', err);
  }
}

moveFiles();

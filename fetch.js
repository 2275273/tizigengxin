import fs from 'fs';
import fetch from 'node-fetch';

async function fetchContent() {
  const res = await fetch('https://tizi.239000.xyz/download/sub');
  const text = await res.text();

  const html = `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8"><title>订阅内容</title></head>
  <body><pre>${text}</pre></body>
  </html>`;

  fs.writeFileSync('index.html', html, 'utf-8');
}

fetchContent();

import fs from 'fs';
import fetch from 'node-fetch';

async function fetchContent() {
  const res = await fetch('https://tizi.239000.xyz/download/sub');
  const text = await res.text();

  // 注意：这里写到 index.html，但内容是纯文本，没有 HTML 标签
  fs.writeFileSync('index.html', text, 'utf-8');
}

fetchContent();

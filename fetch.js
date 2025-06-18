import fs from 'fs';
import fetch from 'node-fetch';

async function fetchContent() {
  const res = await fetch('https://tizi.239000.xyz/download/sub');
  const text = await res.text();

  // 注意文件名就是 "index"，没有后缀
  fs.writeFileSync('index', text, 'utf-8');
}

fetchContent();

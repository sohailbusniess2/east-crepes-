import fs from 'fs';

async function download() {
  const res = await fetch('https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3568451201815506115');
  const buffer = await res.arrayBuffer();
  fs.writeFileSync('./public/logo.jpg', Buffer.from(buffer));
  console.log('Size:', buffer.byteLength);
}

download();

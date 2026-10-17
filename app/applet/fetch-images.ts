import https from 'https';

const url = 'https://www.ubereats.com/au/store/sth-east-crepes/Tcu3U2oJTLuYDD6xcv7itg?srsltid=AfmBOoqbFUc_MZWrUX4qTnxq28RRyXd3YnedOVVPEH_cRvQx8IaDPaRA';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/[^"'\s>]+(?:jpg|jpeg|png|webp)[^"'\s>]*/gi;
    const matches = data.match(regex);
    if (matches) {
      const unique = [...new Set(matches)].filter(url => url.includes('image-proc') || url.includes('cloudfront') || url.includes('tb-static'));
      console.log(JSON.stringify(unique.slice(0, 10), null, 2));
    } else {
      console.log('No image URLs found.');
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});

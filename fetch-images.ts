import https from 'https';

const url = 'https://www.ubereats.com/au/store/sth-east-crepes/QQOks1EQVLmeyJnvoOJeuw';

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
      // Filter out duplicates and common tracking/icon images
      const unique = [...new Set(matches)].filter(url => url.includes('image-proc') || url.includes('cloudfront'));
      console.log(JSON.stringify(unique.slice(0, 5), null, 2));
    } else {
      console.log('No image URLs found.');
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});

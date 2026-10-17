const https = require('https');
https.get('https://www.ubereats.com/au/store/sth-east-crepes/Tcu3U2oJTLuYDD6xcv7itg', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/tb-static\.uber\.com\/prod\/image-proc\/[^"'\\]+\.jpeg/g);
    if (matches) {
      console.log(Array.from(new Set(matches)).slice(0, 10).join('\n'));
    } else {
      console.log('No images found');
    }
  });
});

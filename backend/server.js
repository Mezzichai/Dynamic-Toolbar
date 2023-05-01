const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const url = req.url;
if (req.method === 'POST' && url === "/new") {
  let requestBody = '';
  req.on('data', (chunk) => {
    requestBody += chunk.toString();
  });

  // The request has ended, so we can parse the request body
  req.on('end', async () => {
    const name = decodeURIComponent(requestBody.split('=')[1]);

    try { 
     
      // const jsonData = JSON.stringify(name, null, 2)
      // console.log(jsonData)
      const dataDir = 'ReactCalc\Dynamic-Toolbar\backend\CalcData';
      await fs.writeFile(dataDir, name, { flag: 'w+' }, (err)=> err && console.error(err));
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('calc created')
    } catch (err) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Error: ${err.message}`);
    }
  });
} else if (url === '/calculator/:id') {
  try { 
    res.end()
  } catch (err) {
    console.log(err);
  }
}
});

const createCalculator = async(req, res) => {
  try {
      const chunks = [];
      request.on('data', (chunk) => {
          chunks.push(chunk)
          
      });
      request.on('end', () => {
          console.log("all parts/chunks have arrived");
          const data = Buffer.concat(chunks);
          console.log("Data: ", data);
      })
      const content = 'Some content!';
      const dataDir = 'ReactCalc\Dynamic-Toolbar\backend\CalcData';

      await fs.writeFile(dataDir+d, content, { flag: 'w+' });
    } catch (err) {
      console.log(err);
    }
  }


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
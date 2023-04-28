const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const url = req.url;
if (req.method === 'POST' && url === "/new") {

  const chunks = [];
  req.on('data', (chunk) => {
    chunks.push(chunk)
});
req.on('end', () => {
  console.log("all parts/chunks have arrived");
  const data = Buffer.concat(chunks);
  console.log("Data: ", data);
})
  try { 

  console.log(name)
  const jsonData = JSON.stringify(JSON.parse(body), null, 2)
  const name = jsonData
  const dataDir = 'programming-projects/ToolBarBackend/CalcData/';
  await fs.writeFile(dataDir+name+".json", jsonData, { flag: 'w+' });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('calc created')
  } catch (err) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Error: ${err.message}`);
  }

} else if (url === '/calculator/:id')
  try { 

    res.end
  } catch {

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
      const dataDir = 'programming-projects/ToolBarBackend/CalcData/';

      await fs.writeFile(dataDir+d, content, { flag: 'w+' });
    } catch (err) {
      console.log(err);
    }
  }


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
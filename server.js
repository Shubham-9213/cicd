import express from "express";
import sum from "./func.js"
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/sum/:a/:b',(req, res) => {
  const { a, b } = req.params;
  const result = sum(parseInt(a), parseInt(b));
  res.send(`The sum of ${a} and ${b} is ${result}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import express from "express";
import path from "path";
const app = express();
const port = 4444;

app.use(express.json());

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  
  console.log('headers: ', req.headers);
  
  res.sendFile(path.join(path.resolve(path.dirname("")), "/index.html"));
});

app.get("/get", (req, res) => {
  console.log('headers: ', req.headers);
  
  res.set("Content-Type", "text/html");
  res.sendFile(path.join(path.resolve(path.dirname("")), "/index.html"));
});

app.post("/post", (req, res) => {
  
  console.log('headers: ', req.headers);
  
  res.set("Content-Type", "text/html");
  res.sendFile(path.join(path.resolve(path.dirname("")), "/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

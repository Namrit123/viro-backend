const express = require("express");
const app = express();

app.get("/", (req,res)=>{
  res.send("🚀 VIRO Backend Running");
});

app.listen(3000,()=>{
  console.log("VIRO Server Started");
});

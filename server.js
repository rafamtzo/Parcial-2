const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("You are on the homepage")
})

app.post("/post", (req, res) => {
    res.send(`Welcome ${req.body.user}`);
})

app.delete("/delete", (req,res) => {
    res.send("{delete: true}");
})

app.put("/put:userID", (req,res) => {
    res.send(`Task ${req.params.userID} has been updated`);
})

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({message: "Hello world"});
});

app.listen(8080, () => {
    console.log("running on port 8080")
});

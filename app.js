const express = require('express')
const app = express();
const serverPort = process.env.PORT || 3000

// const BUILD_PATH = path.join(__dirname, "");
app.use(express.static("public"));

app.listen(serverPort, (request, response) => {
    console.log(`mount file location==>[${serverPort}]`)
});
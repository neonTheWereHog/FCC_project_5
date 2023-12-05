var express = require('express');
var cors = require('cors');
const multer = require("multer");
const mongoose = require("mongoose");
const contr = require("./funcsAndControllers/controllers.js")
require('dotenv').config()

var app = express();
const upload = multer({dest: "./uploads"})

mongoose.connect(
  "mongodb+srv://free_code_camp_camper:3CODE_CAMP_PR0JECT@freecodecampproj.ns253mh.mongodb.net/?retryWrites=true&w=majority"
)


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single("upfile"), contr.uploadFile)


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

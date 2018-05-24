const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(port, () => console.log('App listening on port ' + port));


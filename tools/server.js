import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import request from 'request';
import bodyParser from 'body-parser';

/*eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/shorten', function(req, res) {
  request({
    uri: "https://api.rebrandly.com/v1/links",
    method: "POST",
    body: JSON.stringify({
      destination: req.body.url,
      domain: { fullName: "rebrand.ly" }
    }),
    headers: {
      "Content-Type": "application/json",
      "apikey": "cca7aa67adde4d2db4af12ee52c460f5"
    }
  }).pipe(res);
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) console.log(err);
});

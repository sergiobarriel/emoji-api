var express = require('express');
var axios = require('axios');

var application = express();

var port = process.env.PORT || 80;

function timestamp() { console.log(`✉️ request received at: ${new Date().toLocaleString()}`); }

function getEmoji() {

  let emojis = ['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎳','🏓','🏸','🥍','🏒','🏑','🏏','🥅','⛳','🪁','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','⛸️','🥌','🪂','🏋️','🤼','🤸','⛹️','🤺','🤾','🏌️','🏇','🧘','🏄','🏊','🤽','🚣','🧗','🚵','🚴','🏆','🥇','🥈','🥉','🎯','🎮','🎲'];

  return emojis[Math.floor(Math.random() * emojis.length)];
}

application.listen(port, function () {
  console.log(`${getEmoji()} running on port ${port}`);
});

application.get(['/jump'], async function(request, response) {

  timestamp();

  if (!request.query.url) { return response.send("❌ you must provide a 'url' parameter in the query. in example: ?url=https://example.com"); }

  try {
    let res = await axios.get(request.query.url);
    response.send(`${getEmoji()} ${res.data}`);
  } 
  catch (error) { response.send(`❌ an error occurred while processing the request`); }
});

application.use(function (request, response) {

  timestamp();

  response.type('text/plain');
  response.send(`${getEmoji()}`);

});
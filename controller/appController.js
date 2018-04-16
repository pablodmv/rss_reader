
var Feed = require('rss-to-json');
var urlMVD ='http://www.montevideo.com.uy/anxml.aspx?58';
var urlElPais = 'https://www.elpais.com.uy/rss/';
var urlObserva = 'https://www.elobservador.com.uy/rss/home.xml';

exports.home = function(req, res) {
 res.send("Hello World my friend!");
};

exports.rss = function(req, res) {
  var urlRss = "";
  var parametro = req.params.param1;
  if ( parametro == "mvd") {
    urlRss = urlMVD;
  } else if (parametro == "elpais" ){
    urlRss = urlElPais;
  } else if (parametro == "observa" ){
    urlRss = urlObserva;
  } else {
    res.status(404).send("URL Not found, my friend " + req.originalUrl);
  }

  //Get the feed
  Feed.load(urlRss, function(err, rss){
    res.send(rss);
  });

};

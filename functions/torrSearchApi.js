const TorrentSearchApi = require('torrent-search-api');
 

 
TorrentSearchApi.enableProvider('ThePirateBay');
TorrentSearchApi.enableProvider('Torrent9');
TorrentSearchApi.enableProvider('Torrentz2');
TorrentSearchApi.enableProvider('1337x');
TorrentSearchApi.enableProvider('Rarbg');
TorrentSearchApi.enableProvider('TorrentProject');



TorrentSearchApi.getActiveProviders();
var torrV;
// Search '1080' in 'Movies' category and limit to 20 results

TorrentSearchApi.search(['ThePirateBay','Torrent9','Torrentz2','1337x','Rarbg','TorrentProject'], '720', 'Movies', 5) 
.then(torrents => {
    
    console.log(torrents);
   
})
.catch(err => {
    console.log(err);
});
    

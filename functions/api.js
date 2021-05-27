const express = require('express');
const serverless = require("serverless-http");
const app = express();
const router = express.Router();


let  getFile = async () => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.getVideos();
    //await seedr.deleteFile("file_id");
    
};
let  downlad = async (id) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.getFile(id);
    //
    
};
let  deleteFolder = async (fid) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.deleteFolder(fid);
    //
    
};

let  addMagnet = async (link) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.addMagnet(link);
    //
    
};


router.get('/', async function(req, res){
    var value = await getFile(); 
    res.send(value);
})
router.get('/download', async function(req, res){
    const id = req.query.id
    var value = await downlad(id); 
    res.send(value);
})

router.get('/delete', async function(req, res){
    const fid = req.query.fid
    var value = await deleteFolder(fid); 
    res.send(value);
})
router.get('/magnetLink', async function(req, res){
    const link = req.query.link
    var value = await addMagnet(link); 
    res.send(value);
})


//--------------------torrent-search-section-------------------------------
const TorrentSearchApi = require('torrent-search-api');
 

 
TorrentSearchApi.enableProvider('ThePirateBay');
TorrentSearchApi.enableProvider('Torrent9');
TorrentSearchApi.enableProvider('Torrentz2');
TorrentSearchApi.enableProvider('1337x');
TorrentSearchApi.enableProvider('Rarbg');
TorrentSearchApi.enableProvider('TorrentProject');



TorrentSearchApi.getActiveProviders();

// Search '1080' in 'Movies' category and limit to 20 results

TorrentSearchApi.search(['ThePirateBay','Torrent9','Torrentz2','1337x','Rarbg','TorrentProject'], '720', 'Movies', 5) 
.then(torrents => {
    
    console.log(torrents);
    router.get('/torrent', async function(req, res){      
        res.send(torrents);
    })
   
})
.catch(err => {
    console.log(err);
});
    




app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app);
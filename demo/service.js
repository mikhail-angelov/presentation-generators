

function search(text, cb){
    var query = (text||'').split(' ').join('+');
    var url = 'https://api.spotify.com/v1/search?q='+query+'&type=track'
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            // console.log(response)
            var data = JSON.parse(xmlHttp.responseText);
            var items = data.tracks.items.map(item=>{
                return {
                    name: item.name,
                    album: item.album.name,
                    img: item.album.images[2].url,
                    link: item.preview_url
                }
            });
            cb(items);
        }
    }
    xmlHttp.open("GET", url, true); 
    xmlHttp.send(null);
}
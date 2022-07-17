var playerdata;

function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            StartUp(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send();
}

function StartUp(data)
{
    playerdata = JSON.parse(data);
    setPlayerInfo(playerdata);
    setPlayerStats(playerdata);
    //createImageHolder(playerdata);
}


setInterval(function() { httpGetAsync("https://twitch.anderseben.de/battlefield2042/dataset/dataset.php"); }, 180000);

//var response = httpGetAsync("https://api.tracker.gg/api/v2/bf2042/standard/profile/psn/justinontop02?");

httpGetAsync("https://twitch.anderseben.de/battlefield2042/dataset/dataset.php");

//console.log(response);
//var data = JSON.parse(response);
//console.log(data);
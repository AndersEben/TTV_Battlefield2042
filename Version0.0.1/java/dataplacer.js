var item_placeholder = document.getElementById('top-items');


function setPlayerInfo(data)
{
    var name = document.getElementById('username');
    name.innerText = data.data.platformInfo.platformUserHandle;

    var level = document.getElementById('level');
    level.innerText = 'Level ' + data.data.segments[0].stats.level.displayValue.replace(/,/g, '.');

    var xp = document.getElementById('xp');
    xp.innerText = data.data.segments[0].stats.xpAll.displayValue + ' XP';

}


function setPlayerStats(data)
{
    var kd = document.getElementById('kd');
    kd.innerText = data.data.segments[0].stats.kdRatio.displayValue;

    var kills = document.getElementById('kills');
    kills.innerText = data.data.segments[0].stats.kills.displayValue;

    var deaths = document.getElementById('deaths');
    deaths.innerText = data.data.segments[0].stats.deaths.displayValue;

    var assist = document.getElementById('assists');
    assist.innerText = data.data.segments[0].stats.assists.displayValue ;

    var humkills = document.getElementById('humanKills');
    humkills.innerText = data.data.segments[0].stats.humanKills.displayValue ;

    var aikills = document.getElementById('aiKills');
    aikills.innerText = data.data.segments[0].stats.aiKills.displayValue ;    
    
    var ojTime = document.getElementById('objectiveTime');
    ojTime.innerText = data.data.segments[0].stats.objectiveTime.displayValue ;

    var hkills = document.getElementById('headkills');
    hkills.innerText = data.data.segments[0].stats.headshotKills.displayValue ;    
    
    var ddealt = document.getElementById('damageDealt');
    ddealt.innerText = data.data.segments[0].stats.damageDealt.displayValue ;

}

function createImageHolder(data){
	
	while (item_placeholder.firstChild) {
        item_placeholder.removeChild(item_placeholder.lastChild);
	}
	

	var item;
    
	item = document.createElement("DIV");
	item.setAttribute("class", "item");

    var item_stat, unname_stat, killstat, hsstat;

    item_stat = document.createElement("DIV");
	item_stat.setAttribute("class", "item_stat");


    var item_cat, item_name;
    unname_stat = document.createElement("DIV");

    item_cat = document.createElement("DIV");
    item_cat.setAttribute("class", "item__category");
    item_cat.innerHTML = "T";
    item_name = document.createElement("DIV");
    item_name.setAttribute("class", "item__name");
    item_name.innerHTML = "T";

    unname_stat.appendChild(item_cat);
    unname_stat.appendChild(item_name);


    var kill_name, kill_value;
    killstat = document.createElement("DIV");
	killstat.setAttribute("class", "stat");

    kill_name = document.createElement("DIV");
    kill_name.setAttribute("class", "stat__name");
    kill_name.innerHTML = "Kills";
    kill_value = document.createElement("DIV");
    kill_value.setAttribute("class", "stat__value");
    kill_value.innerHTML = "T";

    killstat.appendChild(kill_name);
    killstat.appendChild(kill_value);


    var hs_name, hs_value;
    hsstat = document.createElement("DIV");
	hsstat.setAttribute("class", "stat");
	
    hs_name = document.createElement("DIV");
    hs_name.setAttribute("class", "stat__name");
    hs_name.innerHTML = "HS%";
    hs_value = document.createElement("DIV");
    hs_value.setAttribute("class", "stat__value");
    hs_value.innerHTML = "T";
	
    hsstat.appendChild(hs_name);
    hsstat.appendChild(hs_value);


    item_stat.appendChild(unname_stat);
    item_stat.appendChild(killstat);
    item_stat.appendChild(hsstat);

	item.appendChild(item_stat);

    item_placeholder.appendChild(item);
	
}
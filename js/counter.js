/* INDEX.HTML -- PROJECT COUNTER */
//Master Key
let logos = {
	"favicon": "images/WMA_logos/iconSize/favicon-WMA-logo.jpeg",
	"header-logo": "images/WMA_logos/iconSize/WMA-medium-logo.png"
}

let projectNamesOrder = [
	{"projectSubtitle": "ML Sports Cards Plus", "projectNum": 1},
	{"projectSubtitle": "Sport Kids Couture", 'projectNum': 2},
	{"projectSubtitle": "Pexels Photo Search App", 'projectNum': 3},
	{"projectSubtitle": "Evergreen Brew", 'projectNum': 4},
	{"projectSubtitle": "Revel Wheel", 'projectNum': 5},
	{"projectSubtitle": "United Outdoor Store", 'projectNum': 6},
	{"projectSubtitle": "Max Strong", 'projectNum': 7},
	{"projectSubtitle": "Fast Food Delivery", 'projectNum': 8},
	{"projectSubtitle": "Freemote Blog", 'projectNum': 9},
	{"projectSubtitle": "iCalnex Landing Page", 'projectNum': 10},
	{"projectSubtitle": "Coming Soon", 'projectNum': 11},
	{"projectSubtitle": "Login Page", 'projectNum': 12}
];

let allProjectSubtitlesDOM = document.getElementsByClassName('project-subtitle');
let allProjectNumsDOM = document.getElementsByClassName('project-num');
let count = 0;

for(var i=0; i <= 12; i++){
	if(i < 9){
		console.log(allProjectNumsDOM[i].innerHTML = `0${projectNamesOrder[i].projectNum}`);
	} else {
		console.log(allProjectNumsDOM[i].innerHTML = projectNamesOrder[i].projectNum);
	}
}

for(projectSubtitle of allProjectSubtitlesDOM){
	projectSubtitle.innerHTML = projectNamesOrder[count].projectSubtitle;
	count++;
}
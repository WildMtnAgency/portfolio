const allProjectNums = document.getElementsByClassName('project-num');
let count = 0;
for(let projectNum of allProjectNums){
	count++;
	if(count < 10){
		projectNum.textContent = `0${count}`;
	} else if(count >= 10){
		projectNum.textContent = `${count}`;
	}
}
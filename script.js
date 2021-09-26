const modeShow = document.getElementById('modeShow');
const modeBtn = document.getElementById('modeButton');
const timeBtn = document.getElementById('timeButton');
const timeStartBtn = document.getElementById('timeStartButton');
const bestScoreBtn = document.getElementById('bestScoreButton');
const show = document.getElementById('show');
const result = document.getElementById('result');
const scoreShow = document.getElementById('scoreShow');
const colors = [ 'red', 'blue', 'yellow', 'limegreen', 'orange', 'black' ];
var mode = true; //default is Color mode
var timeOn = false; //default is off
var score = 0;//default is 0

const submit = ( enter ) => {
	if (enter) { judge(enter, text, color) }
	text = colors[ Math.floor( Math.random() * colors.length ) ];
	color = colors[ Math.floor( Math.random() * colors.length) ];
	showQuestion(text, color);
}

const judge = ( enter, text, color ) => {
	if ( mode ) {
		enter === color ? showIsRight('Correct!', 'limegreen', true) : showIsRight('Not', 'red', false);
	} else {
		enter === text ? showIsRight('Correct!', 'limegreen', true) : showIsRight('Not', 'red', false);
	}
}

const showIsRight = ( text, color, shouldAddScore ) => {
	result.innerText = text;
	result.style.color = color;
	scoreShow.innerText = scoreCalculate(shouldAddScore);
}

const scoreCalculate = ( shouldAddScore ) => shouldAddScore ? score+=1 : score-=1

const showQuestion = ( text, color ) => {
	show.innerText = text.toUpperCase();
	show.style.color = color;
}

const scoreReset = () => {
	score = 0;
	scoreShow.innerText = score;
}

const changeMode = () => {
	mode ? modeShow.innerText = "Choose the TEXT" : modeShow.innerText = "Choose the COLOR";
	mode ? modeBtn.innerText = "Change to Color mode" : modeBtn.innerText = "Change to Text mode";
	mode ? mode = false : mode = true;
}

const timeMode = () => {
	if (!timeOn) {
		timeBtn.innerText = "Time mode:ON";
		timeStartBtn.style.display = "inline";
		bestScoreBtn.style.display = "inline";
	}	else {
		timeBtn.innerText = "Time mode:OFF";
		timeStartBtn.style.display = "none";
		bestScoreBtn.style.display = "none";
	}
	!timeOn ? timeOn = true : timeOn = false;
}

const timeStart = () => {

}

//deflaut
submit(0);

// setTimeout(function() {
// 		document.getElementById('show').innerText = data.text;
// 	}, 1800);
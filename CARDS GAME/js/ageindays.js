//challenge1-age in days
function ageIndays() {
var birthyear = prompt("What year were you born.. Good Friend");
var age=(2020-birthyear)*365;
var h1=document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ age +' days old');
h1.setAttribute('id','ageIndays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
	document.getElementById('ageIndays').remove();
}
function generateCat()
{
	var image=document.createElement('img');
	var div=document.getElementById('flex-cat-gen');
	image.src="https://phoneky.co.uk/thumbs/screensavers/down/cartoon-anime/catdancing_w5kjxixi.gif";
	div.appendChild(image);
}
//challenge 3 rock paper scissor
function rpsgame(yourChoice) {
	var humanChoice, botChoice;
	humanChoice = yourChoice.id;
	botChoice = numbertochoice(Math.floor(Math.random()*3));
    result = decideWinner(humanChoice, botChoice);// won loss or tie
    message = finalMessage(result);//('message': 'you won' ,'color':green)
    rpsFrontEnd(humanChoice,botChoice,message);
}
function numbertochoice(number){
	return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,botChoice) {
	var rpsdatabase ={
		'rock':{'scissors':1, 'paper':0 ,'rock':0.5},
		'paper':{'scissors':0, 'paper':0.5 ,'rock':1},
		'scissors':{'scissors':0.5, 'paper':1 ,'rock':0}
	}
var yourScore = rpsdatabase[yourChoice][botChoice];
var botscore = rpsdatabase[botChoice][yourChoice];
return [yourScore,botscore];	
}
function finalMessage([yourScore, botscore]){
	if(yourScore === 0) {
       return {'message':'You lost!', color: 'red'};
	}
	else if(yourScore === 1) {
	   return {'message':'You Won!', color: 'green'};
	}
    else 
    	return {'message':'You tied!', color: 'yellow'};
}
function rpsFrontEnd(YourImageChoice,botImageChoice,finalMessage){
	var imageDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	}
	//let's remove all the elements
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
var humandiv = document.createElement('div');
var botdiv = document.createElement('div');
var messageDiv = document.createElement('div');
humandiv.innerHTML =" <img src='" + imageDatabase[YourImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1')>";
document.getElementById('flex-box-rps-div').appendChild(humandiv);
messageDiv.innerHTML =" <h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] +"</h1>";
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
botdiv.innerHTML =" <img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1')>";
document.getElementById('flex-box-rps-div').appendChild(botdiv);
}
//challenge-4: change color of all buttons
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons =[];
for (var i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
function buttonColorChange(buttonThings) {
	if(buttonThings.value === 'red') {
		buttonRed();
	}
	else if (buttonThings.value === 'green') {
		buttonGreen();
	}
	else if (buttonThings.value === 'reset') {
		buttonReset();
	}
	else if (buttonThings.value === 'random') {
		buttonRandom();
	}
}
function buttonRed() {
	for (var i = 0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-danger');
	}
}
function buttonGreen() {
	for (var i = 0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-success');
	}
}
function buttonReset() {
	for (var i = 0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(copyAllButtons[i]);
	}
}
function buttonRandom() {
	var choices =['btn-success','btn-danger','btn-primary','btn-warning'];
	for (var i = 0; i < all_buttons.length; i++) {
		var index= Math.floor(Math.random()*4);
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(choices[index]);
	}
}
//challenge -5 blackjack game
var blackjackgame = {
	'you': {'scoreSpan': '#your-blackjack-result', 'div': '#Your-box', 'score': 0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
	'cards' : ['2' ,'3' ,'4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2 ,'3':3, '4':4, '5':5 ,'6':6 ,'7':7, '8':8,'9':9, '10':10, 'K':10, 'Q':10, 'J':10 ,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
};
const YOU=blackjackgame['you'];
const DEALER=blackjackgame['dealer'];
const hitSound = new Audio('https://priyanshi527.github.io/javascript/CARDS GAME/sounds/swish.m4a');
const winSound = new Audio('https://priyanshi527.github.io/javascript/CARDS GAME/sounds/cash.mp3');
const lostSound = new Audio('https://priyanshi527.github.io/javascript/CARDS GAME/sounds/aww.mp3');


document.querySelector('#hit').addEventListener('click',blackjackhit);
document.querySelector('#stand').addEventListener('click',dealerLogic);
document.querySelector('#deal').addEventListener('click',blackjackDeal);
function blackjackhit(){
    if (blackjackgame['isStand'] === false) {
	   let card =randomCard();
	   showCard(card,YOU);	
	   updateScore(card,YOU);
	   showScore(YOU);
    }
}
function randomCard(){
	let randomIndex=Math.floor(Math.random()*13);
	return  blackjackgame['cards'][randomIndex];
}
function showCard(card,activePlayer){
    if(activePlayer['score']<=21){
    let cardImage=document.createElement('img');
	cardImage.src = `https://priyanshi527.github.io/javascript/CARDS GAME/images/${card}.png`;
	document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();	
}
}
function blackjackDeal()
{
	if(blackjackgame['turnsOver'] === true) {
		blackjackgame['isStand'] = false;
		let yourImages = document.querySelector('#Your-box').querySelectorAll('img');
		for (var i = 0; i < yourImages.length; i++) {
			yourImages[i].remove();
		}
		let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
		for (var i = 0; i < dealerImages.length; i++) {
			dealerImages[i].remove();
		}
		YOU['score']=0;
		DEALER['score']=0;

		document.querySelector('#your-blackjack-result').textContent=0;
	    document.querySelector('#your-blackjack-result').style.color='#ffffff';	
	    document.querySelector('#dealer-blackjack-result').textContent=0;
	    document.querySelector('#dealer-blackjack-result').style.color='#ffffff';
	    document.querySelector('#blackjack-result').textContent="Let's Play";
	    document.querySelector('#blackjack-result').style.color='black';
        blackjackgame['turnsOver'] = true;
    }
}
function updateScore(card,activePlayer) {
	if(card === 'A'){
	//if adding 11 keeps me below 21 add 11 , otherwise, add 1
	if(activePlayer['score']+blackjackgame['cardsMap'][card][1]<=21)  {
        activePlayer['score']+=blackjackgame['cardsMap'][card][1];
	}
	else {
		activePlayer['score']+=1;
	}
   }
   else {
	activePlayer['score']+=blackjackgame['cardsMap'][card];
}
}
function showScore(activePlayer){
	if(activePlayer['score']>21){
		document.querySelector(activePlayer['scoreSpan']).textContent=' BUST!';
	    document.querySelector(activePlayer['scoreSpan']).style.color='red';
	}
	else {
	document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
   }
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve,ms));
}
async function dealerLogic() {
	blackjackgame['isStand']=true;
	while(DEALER['score']<16 && blackjackgame['isStand'] === true) {
	    let card=randomCard();
		showCard(card,DEALER);
		updateScore(card,DEALER);
		showScore(DEALER);
		await sleep(1000);
    }  
    blackjackgame['turnsOver']=true;
	showResult(computeWinner());
}
//comput winner
//update the wins draws and losses 
function computeWinner() {
	let winner;
	if(YOU['score'] <=21){
		if((DEALER['score']>21) || (DEALER['score']<YOU['score'])){
         blackjackgame['wins']++;
         winner=YOU;
		}
	else if (YOU['score']<DEALER['score']) {
		winner=DEALER;
		blackjackgame['losses']++;
	}
	else if(YOU['score'] === DEALER['score']) {
		blackjackgame['draws']++;
	}	
	}
	//condition when you bust but dealer doesn't bust
	else if(YOU['score']>21 && DEALER['score']<=21) {
		winner=DEALER;
		blackjackgame['losses']++;
	}
	//when we both bust!!
	else if(YOU['score']>21 && DEALER['score']>21){
		blackjackgame['draws']++;
	}
	console.log(blackjackgame);
	return winner;
}
function showResult(winner){
	let message,messageColor ;
	if(blackjackgame['turnsOver'] === true) {
		if(winner === YOU) {
			document.querySelector('#wins').textContent=blackjackgame['wins'];
			message='You Won!';
			messageColor = 'green';
			winSound.play();
		}
		else if(winner === DEALER) {
			document.querySelector('#losses').textContent=blackjackgame['losses'];
			message='You Lost!';
			messageColor = 'red';
			lostSound.play();
		}
		else{
			document.querySelector('#draws').textContent=blackjackgame['draws'];
			message='You Drew!'
			messageColor = 'black';
		}
	document.querySelector('#blackjack-result').textContent=message;
	document.querySelector('#blackjack-result').style.color=messageColor;
    }
}


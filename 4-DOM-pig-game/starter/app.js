/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundscore, activePlayer;

scores = [0,0];
roundscore = 0;
activePlayer = 0;

/* console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;

console.log(x);

function btn(){
    //do something here
}
btn();
 */

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // random number
    var dice = Math.floor(Math.random()*6) +1;

    // display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Update round score if not 1
    if (dice !== 1){
        //add score
        roundscore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundscore;
    }
    else {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // add current score to global score
    scores[activePlayer] += roundscore;

    // update ui interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // 3. check if player won the game
    if (scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        
    }
    else {
        // next player
        nextPlayer();
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}
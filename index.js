// Create variables for the game state
let player1Score=0;
let player2Score=0;
let player1State=true;

// Create variables to store references to the necessary DOM nodes
const score1=document.getElementById('player1Scoreboard')
const score2=document.getElementById('player2Scoreboard')
const messageturn=document.getElementById('message')
const player1Dice=document.getElementById('player1Dice')
const player2Dice=document.getElementById('player2Dice')
const rollBtn=document.getElementById('rollBtn')
const resetBtn=document.getElementById('resetBtn')


/* Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */
 rollBtn.addEventListener('click',function(){
     let number=Math.floor(Math.random()*6)+1
     console.log(number)
     // 1. Find out which players turn it is
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player
    //  --------------------------------------------------------------

      // 1. Display the dice number instead of logging it out
    // 2. Use the 'active' class to show which player's turn it is 
    // Hint: use the .classList.remove() and classList.add() methods
    // 3. Update the "message" DOM node so that it states who's turn it is
     if(player1State){
        player1Score+=number
        score1.textContent=player1Score
         player1Dice.textContent=number
    
         player1Dice.classList.remove('active')
         player2Dice.classList.add('active')
         messageturn.textContent="player 2 Turn"
        
         
     }
     else{
        
        player2Score+=number
        score2.textContent=player2Score
        player2Dice.textContent=number
         
         
         
         player2Dice.classList.remove('active')
         player1Dice.classList.add('active')
         messageturn.textContent="player 1 Turn"
          
        
     }
     player1State = !player1State
      // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
    if(player1Score>= 20 || player2Score >= 20){
        if (player1Score > player2Score)
        {
            messageturn.textContent ="player 1 has won 🥳" 
        }else
        {
         messageturn.textContent ="player 2 has won 🥳"
        }
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
        
    }
 })

 resetBtn.addEventListener('click',function(){
    rollBtn.style.display='block'
    resetBtn.style.display='none'
    player1Score=0
    player2Score=0
    score1.textContent=0
    score2.textContent=0
    player1Dice.innerText='-'
    player2Dice.innerText='-'
    player1State=true
 })
# BE QUICK! ϟ

[Click here for a link to the game](https://knownopear.github.io/project-1/)

### Overview

BE QUICK! ϟ is a fun and fast game developed with the intent of pitting its players against each other with questions of typing dexterity, mathematical skill and logic questions. There is no room for error, and once a player makes a mistake their turn is forfeited and the baton is passed on to the next player.

---

### Number of Players
BE QUICK! ϟ currently supports 2 players

---

### Technologies Used
* **HTML5**
* **CSS3**
* **JQuery**

---

### Development Approach
At the beginning of development, I played around with the idea of a multiplayer follow-the-leader-type of game. However, I quickly realised that having multiple players simultaneously following a leader would require there to be multiple inputs of the same type. For example, if two players had to follow the same string of text, they would require two seperate keyboards for a simultaneous input. 

With that in mind, I decided to have it as a turn-based game instead, with turns starting with player 1. I started writing the pseudo-code of what I envisoned the game to be - 
* Player clicks a 'Start Game' button
* There is a short delay
* The game initialises
* Copycat(the thing you have to follow) will generate and show a problem (math, logic, string, etc)
* A timer will appear and count downwards
* The player will have to answer within the time limit
* If the timer reaches 0 or the player's answer is wrong, his turn ends
* If the player's answer is correct, the game will continue indefinitely until the timer runs out or the answer is wrong
* Timer resets with every correct answer
* When the current player loses, record their score on a sidebar to show the next player what score they have to beat and change the players
* There is a short delay
* Initialise game and repeat steps

---

### Plans Ahead
I plan to allow for more than 2 players, and to increase the type of questions that can be endlessly generated. I also plan to shorten the code.

---

### Things I have learnt
* console.log() & alert() are my best friends
* google is the most useful tool a developer can have
* if you are burnt out from hours of looking at code, take a break! It is okay to have some time off

---
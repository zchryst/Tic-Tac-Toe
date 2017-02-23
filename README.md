# PROJECT 1: TIC-TAC-TOE

This is a two player Tic Tac Toe game to be played on desktop.

This project was created with HTML, CSS, and Javascript. DOM manipulation was achieved using the JQUERY library.

## APPROACH

To complete this project my approach was to create a working Javascript file to get the bare minimum of a working game of Tic-Tac-Toe. After that was completed I worked on creating a better looking interface using CSS, I was focused on making a clean looking, minimalist, user interface.

To make the game adaptable for future development I created  the majority of HTML elements using JQUERY DOM manipulation. Game play is tracked by a matrix representing the board - thus storing the data in the Javascript-memory.

Separate functions were used to check for horizontal, vertical, and diagonal wins, however the diagonal win function is a little bit too hard coded for my taste, and will need a bit of work.

Getting into the CSS I wanted stick with a pretty minimal interface. CSS transitions were used to make the reset and win functions better looking and a bit more smooth, rather than the normally abrupt instant changes in state.


## FUTURE DEVELOPMENT

* I'd like to make the design responsive so that it can be played on any device.
* A button in the top left corner or next to the score counters should be added to reset the scores to zero
* I would like to change the functions to check for wins so that:
..* A win on board sizes greater than 3x3 can be checked for
..* The diagonal checker is less hard coded
* Towards the end of writing this script some of the functions began to get a little bit hairy - it would be good to break these up into smaller, more specific, functions.
* I had been initially thinking that on a tie event you could have the option to expand the board to 4x4 or even further to a connect-four board but ran out of time to get to that level of complexity. 

### [PLAY THE GAME HERE](https://zchryst.github.io/Tic-Tac-Toe/)

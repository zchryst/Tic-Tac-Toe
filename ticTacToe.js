console.log('tic a tac on my toe');

var createBoardArray = function() {
  var boardRow = ['','',''];
  var board = []
  for (var i = 0; i < 3; i++) {
    board.push(boardRow.slice())
  }
  return board;
}

var createBoardHtml = function() {
  var $board = $('.board');
  var size = 3;
  for (var i = 0; i < size; i++) {
    var $newBoardRow = $('<div>')
      .addClass('row')
      .data('row', '0');
    $board.append($newBoardRow);
  }
  var $boardRowsArray = $('.board .row');
  for (var i = 0; i < $boardRowsArray.length; i++) {
    for (var j = 0; j < size; j++) {
      var $newCell = $('<div>')
        .addClass('cell')
        .attr('data-row', i)
        .attr('data-column', j);
        if (i !== 0 && i !== (size-1)) {
          $newCell.addClass('internal-row')
        };
        if (j !== 0 && j !== (size-1)) {
          $newCell.addClass('internal-col')
        };
      $boardRowsArray.eq(i).append($newCell);
    }
  }
}



var checkIfWin = function(board, player) {
  if (checkRowWin(board, player) || checkColumnWin(board, player) || checkDiagonalWin(board, player)) {
    gameNotOver = false;
    return true;
  } else {
    return false;
  }
}

var checkRowWin = function(board, player) {
  for (var row = 0; row < board.length; row++) {
    if (checkThreeSame(board[row], player)) {
      $('.cell[data-row='+row+']').addClass('highlight-win');
      return true;
    }
  }
  return false;
}

var checkColumnWin = function(board, player) {
  for (var i = 0; i < board.length; i++) {
    var column = [board[0][i], board[1][i], board[2][i]];
    if (checkThreeSame(column, player)) {
      $('.cell[data-column='+i+']').addClass('highlight-win');
      return true;
    }
  }
  return false;
}

var checkDiagonalWin = function(board, player) {
  var diagonals = [[board[0][0], board[1][1], board[2][2]],[board[0][2], board[1][1], board[2][0]]];
  for (var i = 0; i < diagonals.length; i++) {
    if (checkThreeSame(diagonals[i], player)) {
      if (i === 0) {
        $('.cell[data-column=0][data-row=0]').addClass('highlight-win');
        $('.cell[data-column=1][data-row=1]').addClass('highlight-win');
        $('.cell[data-column=2][data-row=2]').addClass('highlight-win');
      } else {
        $('.cell[data-column=0][data-row=2]').addClass('highlight-win');
        $('.cell[data-column=1][data-row=1]').addClass('highlight-win');
        $('.cell[data-column=2][data-row=0]').addClass('highlight-win');
      }
      return true;
    }
  }
  return false;
}

var checkThreeSame = function(threeArray, player) {
  if (threeArray.indexOf('') === -1) {
    if (threeArray[0] === player && threeArray[1] === player && threeArray[2] === player) {
      return true;
    } else {
      return false;
    }
  }
}

var switchPlayerTurn = function() {
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else {
    currentPlayer = 'x';
  }
  return currentPlayer;
};

var updateBoard = function(event, currentPlayer) {
  // debugger
  board[+event.target.getAttribute('data-row')][+event.target.getAttribute('data-column')] = currentPlayer;
}

var checkForTie = function() {
  if ($('.taken').length === 9) {
    gameNotOver = false;
    return true;
  }
  return false;
}


var notAlreadyTaken = function(event) {
  return (event.target.className.split(' ').indexOf('taken') === -1);
}

var reset = function() {
  board = createBoardArray();
  gameNotOver = true;
  $('.board .cell')
    .text('')
    .removeClass('taken')
    .removeClass('highlight-win');
}

var gameNotOver = true;
var currentPlayer = 'x';
var winCountX = 0;
var winCountO = 0;
var tieCount = 0;
var board = createBoardArray();
createBoardHtml();

var mainRun = function(event) {
  if (notAlreadyTaken(event)) {
    updateBoard(event, currentPlayer);
    $(event.target)
      .text(currentPlayer)
      .addClass('taken');
    if (checkIfWin(board, currentPlayer)) {
      $('.board .cell').addClass('taken');
      console.log(currentPlayer + ' IS THE WINNER');
    } else if (checkForTie()) {
      console.log('ITS A TIE MOTHER FLIPPERS!')
    }
    currentPlayer = switchPlayerTurn();
  }
}


$('.board').on('click', '.cell', function(event) {
  if (gameNotOver) {
    mainRun(event);
  } else {
    reset();
  }
});

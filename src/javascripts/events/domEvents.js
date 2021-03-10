import showBoards from '../components/showBoards';
import { deletePins } from '../helpers/data/pinData';
import { showPins } from '../components/showPins';
import { deleteBoardPins, boardPinsAll } from '../helpers/data/boardPinData';
import boardTitle from '../components/boardTitle';
import { getBoards } from '../helpers/data/boardData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD AND ALL ASSOCIATED PINS
    if (e.target.id.includes('delete-board')) {
      const boardId = e.target.id.split('--')[1];
      deleteBoardPins(boardId).then((boardsArray) => showBoards(boardsArray));
    }
    // CLICK EVENT FOR DELETEING A PIN
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePins(firebaseKey)
        .then(() => getBoards()
          .then((boardsArray) => showBoards(boardsArray)));
    }

    // CLICK EVENT FOR DISPLAYING A SPECIFIC BOARD'S PINS
    if (e.target.id.includes('show-pins')) {
      const firebaseKey = e.target.id.split('--')[1];
      boardPinsAll(firebaseKey).then((boardInfoObject) => {
        boardTitle(boardInfoObject.board);
        showPins(boardInfoObject.boardPins);
      });
    }
  });
};

export default domEvents;

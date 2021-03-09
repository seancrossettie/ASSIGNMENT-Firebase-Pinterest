import showBoards from '../components/showBoards';
import { deletePins } from '../helpers/data/pinData';
import { showPins } from '../components/showPins';
import deleteBoardPins from '../helpers/data/boardPinData';

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
      deletePins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;

// import firebase from 'firebase/app';
// import 'firebase/auth';
import { deleteBoards } from '../helpers/data/boardData';
import showBoards from '../components/showBoards';
import { deletePins } from '../helpers/data/pinData';
import { showPins } from '../components/showPins';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoards(firebaseKey).then((boardsArray) => showBoards(boardsArray));
    }
    // CLICK EVENT FOR DELETEING A PIN
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;

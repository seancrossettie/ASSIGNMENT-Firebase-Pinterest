// import firebase from 'firebase/app';
// import 'firebase/auth';
import { deleteBoards } from '../helpers/data/boardData';
import showBoards from '../components/showBoards';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoards(firebaseKey).then((boardsArray) => showBoards(boardsArray));
    }
  });
};

export default domEvents;

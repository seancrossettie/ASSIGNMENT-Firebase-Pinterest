import signMeOut from '../components/buttons/logoutButton';
import showBoards from '../components/showBoards';
import { showPins } from '../components/showPins';
import { getBoards } from '../helpers/data/boardData';
import getPins from '../helpers/data/pinData';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signMeOut);

  document.querySelector('#boards-page').addEventListener('click', () => {
    getBoards().then((boardsArray) => showBoards(boardsArray));
  });

  document.querySelector('#pins-page').addEventListener('click', () => {
    getPins().then((boardsArray) => showPins(boardsArray));
  });
};

export default navigationEvents;

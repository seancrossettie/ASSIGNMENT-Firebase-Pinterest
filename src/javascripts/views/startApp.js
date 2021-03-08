import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import { getBoards } from '../helpers/data/boardData';
import showBoards from '../components/showBoards';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;

import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import getBoards from '../helpers/data/boardData';
import showBoards from '../components/showBoards';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;

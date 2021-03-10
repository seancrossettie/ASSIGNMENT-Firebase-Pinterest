import { getBoards } from '../../helpers/data/boardData';

const selectBoard = () => {
  let formString = `<label for="board">Pin to a Board...</label>
                      <select class="form-control" id="board" required>
                        <option value="">Select a Board</option>`;

  getBoards().then((boardsArray) => {
    boardsArray.forEach((board) => {
      formString += `<option value="${board.firebaseKey}">${board.title}</option>`;
    });

    formString += '</select>';
  });

  document.querySelector('#select-board').innerHTML = formString;
};

export default selectBoard;

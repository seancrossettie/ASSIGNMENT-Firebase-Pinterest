import { deleteBoards } from './boardData';
import { getBoardPins, deletePins } from './pinData';

const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deleteAllPins = boardPinsArray.map((pin) => deletePins(pin.firebaseKey));

    Promise.all(deleteAllPins).then(() => resolve(deleteBoards(boardId)));
  }).catch((error) => reject(error));
});

export default deleteBoardPins;

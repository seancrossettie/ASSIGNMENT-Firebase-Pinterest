import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// READ BOARDS
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => {
      if (response.data) {
        const boardArray = Object.values(response.data);
        resolve(boardArray);
        console.warn(boardArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// CREATE BOARD
const createNewBoard = (newBoardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, newBoardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards().then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

// READ SINGLE BOARD PINS
const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${boardId}/.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE BOARDS
const deleteBoards = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards().then((boardArray) => resolve(boardArray)))
    .catch((error) => reject(error));
});

export {
  deleteBoards,
  getBoards,
  getSingleBoard,
  createNewBoard,
};

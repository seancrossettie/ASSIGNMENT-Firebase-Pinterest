import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => {
      if (response.data) {
        const boardArray = Object.values(response.data);
        resolve(boardArray);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// GET SINGLE BOARD
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

export { deleteBoards, getBoards, getSingleBoard };

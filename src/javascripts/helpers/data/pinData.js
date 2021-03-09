import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => {
      if (response.data) {
        const pinsArray = Object.values(response.data);
        resolve(pinsArray);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deletePins = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins().then((pinArray) => resolve(pinArray)))
    .catch((error) => reject(error));
});

export { getPins, deletePins };

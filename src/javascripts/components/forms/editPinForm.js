import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `<h1>Pin to a board</h1>
                                                      <div class="form-group" id="select-board"></div>
                                                      <button type="submit" class="btn rounded-pill" id="update-this-pin--${pinObject.firebaseKey}">Delete Pin</button>
                                                      `;
  selectBoard(pinObject);
};

export default editPinForm;

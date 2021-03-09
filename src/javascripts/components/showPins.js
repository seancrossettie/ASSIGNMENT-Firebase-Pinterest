const showPins = (array) => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#create-button').innerHTML = '<button class="btn rounded-pill" href="#" id="create-new-pin">Create Pin</button>';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `<div class="card" style="width: 18rem;">
                                                      <div class="card-body">
                                                      <img src="${item.image}" class="card-img-top" alt="${item.image}">
                                                        <h8 class="card-title">"${item.title}"</h8>
                                                        <button type="button" class="btn rounded-pill" id="pins--${item.firebaseKey}">Pins</button>
                                                        <button type="button" class="btn rounded-pill" id="delete-board--${item.firebaseKey}">Delete Board</button>
                                                      </div>
                                                    </div>`;
  });
};

const emptyBoard = () => {
  document.querySelector('#cards').innerHTML = '<h1>There arent any Pins on this board yet</h1>';
};

export { showPins, emptyBoard };

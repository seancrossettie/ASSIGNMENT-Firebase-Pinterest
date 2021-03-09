const showBoards = (array) => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#create-button').innerHTML = '<button class="btn rounded-pill" href="#" id="create-new-board">Create Board</button>';

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

export default showBoards;

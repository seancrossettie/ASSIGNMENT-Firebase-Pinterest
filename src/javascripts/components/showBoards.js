const showBoards = (array) => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#create-button').innerHTML = '<button class="btn rounded-pill" href="#" id="create-new-board">Create Board</button>';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `<div class="card text-white m-2">
                                                    <div class="card-body" style="width: 18rem;">
                                                    <div class="card-body">
                                                    <img src="${item.image}" class="img-fluid" alt="${item.image}">
                                                    <div class="card-img-overlay img-fluid">
                                                      <h5 class="card-title">${item.title}</h5>
                                                      <button type="button" class="btn rounded-pill" id="show-pins--${item.firebaseKey}">Pins</button>
                                                      <button type="button" class="btn rounded-pill" id="delete-board--${item.firebaseKey}">Delete board</button>
                                                    </div>
                                                  </div>
                                                  </div>`;
  });
};

export default showBoards;

const showBoards = (array) => {
  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `<div class="card" style="width: 18rem;">
                                                      <div class="card-body">
                                                      <img src="${item.image}" class="card-img-top" alt="${item.image}">
                                                        <h8 class="card-title">"${item.title}"</h8>
                                                        <button type="button" class="btn" id="${item.firebaseKey}--pins">Pins</button>
                                                      </div>
                                                    </div>`;
  });
};

export default showBoards;

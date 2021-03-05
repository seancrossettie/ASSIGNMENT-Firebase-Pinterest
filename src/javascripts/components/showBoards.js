const showBoards = (array) => {
  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `<div class="card" style="width: 18rem;">
                                                    <img src="${item.Image}" class="card-img-top" alt="${item.Image}">
                                                    <div class="card-body">
                                                      <h5 class="card-title">"${item.Title}"</h5>
                                                      <a href="#" class="btn btn-primary" id="${item.firebaseKey}--pins>Go somewhere</a>
                                                    </div>
                                                  </div>`;
  });
};

export default showBoards;

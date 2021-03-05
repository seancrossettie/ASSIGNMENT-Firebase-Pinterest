const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar navbar-light bg-">
                                                      <div class="container-fluid">
                                                        <a class="navbar-brand" href="#">
                                                          <img src="https://pngimg.com/uploads/pinterest/pinterest_PNG66.png" alt="" width="50" height="30" class="d-inline-block align-top">
                                                          Pinterest
                                                        </a>
                                                        <div id="logout-button"></div>
                                                      </div>
                                                    </nav>
                                                    <h1>Boards</h1>`;
};

export default navBar;

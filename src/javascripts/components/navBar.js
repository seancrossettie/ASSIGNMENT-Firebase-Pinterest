const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light d-flex flex-nowrap mt-3">
                                                        <div class="collapse navbar-collapse me-2" id="navbar">
                                                          <a href="#">
                                                            <img class="mx-2 rounded-pill" src="./documentation/pinterest-logo-png-1982.png" alt="" id="corner-logo">
                                                          </a>
                                                        <ul class="navbar-nav mr-2">
                                                          <li class="nav-item active">
                                                            <button class="btn rounded-pill" href="#" id="boards-page">Boards</button>
                                                          </li>
                                                          <li class="nav-item active">
                                                            <button class="btn rounded-pill" href="#" id="pins-page">Pins</button>
                                                          </li>
                                                          <li class="nav-item active">
                                                            <button class="btn rounded-pill" href="#" id="favorites-page">Favorites</button>
                                                          </li>
                                                          <li class="nav-item active" id="create-button">
                                                          </li>
                                                        </ul>
                                                        <div class="wrapper mr-auto" id="search-bar">
                                                          <form>
                                                            <input
                                                              type="text"
                                                              id="search-bar-text"
                                                              class="form-control rounded-pill"
                                                              placeholder="Search"
                                                              aria-label="Search"
                                                            >
                                                          </form>
                                                        </div>
                                                        <div id="logout-button"></div>
                                                      </div>
                                                    </nav>`;
};

export default navBar;

const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
                                                        <button 
                                                          class="navbar-toggler" 
                                                          type="button" 
                                                          data-bs-toggle="collapse" 
                                                          data-bs-target="#navbarSupportedContent" 
                                                          aria-controls="navbarSupportedContent" 
                                                          aria-expanded="false" 
                                                          aria-label="Toggle navigation"
                                                        >
                                                          <span class="navbar-toggler-icon"></span>
                                                        </button>
                                                        <div class="collapse navbar-collapse me-2" id="navbar">
                                                        <button class="btn" <img src="./documentation/pinterest-logo-png-1982.png" alt=""></button>
                                                        <ul class="navbar-nav mr-auto">
                                                          <li class="nav-item active">
                                                            <button class="btn rounded-pill me-2" href="#" id="boards-page">Boards</button>
                                                          </li>
                                                          <li class="nav-item active">
                                                            <button class="btn rounded-pill me-2" href="#" id="pins-page">Pins</button>
                                                          </li>
                                                          <li class="nav-item active">
                                                            <button class="btn rounded-pill me-2" href="#" id="favorites-page">Favorites</button>
                                                          </li>
                                                        </ul>
                                                        <div class="wrapper mr-auto" id="search-bar">
                                                          <input
                                                            type="text"
                                                            class="form-control rounded-pill"
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                          >
                                                        </div>
                                                        <div id="logout-button"></div>
                                                      </div>
                                                    </nav>`;
};

export default navBar;

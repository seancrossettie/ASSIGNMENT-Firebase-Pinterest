const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
                                                        <a class="navbar-brand" href="#">Pretty Much Pinterest</a>
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
                                                        <div class="collapse navbar-collapse" id="navbarNav">
                                                        <ul class="navbar-nav mr-auto">
                                                          <li class="nav-item active">
                                                            <a class="nav-link" href="#" id="board-page">Boards</a>
                                                          </li>
                                                          <li class="nav-item active">
                                                            <a class="nav-link" href="#" id="pins-page">Pins</a>
                                                          </li>
                                                        </ul>
                                                        <div id="logout-button"></div>
                                                      </div>
                                                    </nav>
                                                    <h1>Boards</h1>`;
};

export default navBar;

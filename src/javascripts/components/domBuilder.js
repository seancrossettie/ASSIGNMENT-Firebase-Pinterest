const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
                                                <div id="main-container">
                                                  <div id="cards" class="container d-flex justify-content-center"></div>
                                                </div>`;
};

export default domBuilder;

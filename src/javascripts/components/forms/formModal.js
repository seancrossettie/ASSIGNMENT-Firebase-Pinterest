const formModal = (updateObject) => {
  document.querySelector('#board-title').innerHTML = `<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
                                                  <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title" id="formModalLabel">${updateObject.title}</h5>
                                                        <button type="button" id="close-modal" class="close" data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                        </button>
                                                      </div>
                                                      <div class="modal-body" id="modal-body">
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>`;
};

export default formModal;

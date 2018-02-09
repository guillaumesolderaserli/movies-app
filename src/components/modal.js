import React, { Component, Fragment } from 'react';

export class Modal extends Component {


  render() {
    return (
      <Fragment>
        <div className={`modal fade show`} tabIndex="-1" role="dialog" style={{display: 'block'}} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Oups !</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.close}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Please check your API Key or your internet connection, then retry
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.close}>Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal-backdrop fade show`}></div>
      </Fragment>
    );
  }

}

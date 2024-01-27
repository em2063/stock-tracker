import React from "react";

/**
 * Modal component represents a modal dialog box for adding new stocks to the portfolio.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Flag indicating whether the modal is open.
 * @param {function} props.onClose - Function to close the modal.
 * @param {function} props.onSubmit - Function to handle form submission within the modal.
 * @returns {JSX.Element} Modal component.
 */

function Modal({ isOpen, onClose, onSubmit }) {
  //Render nothing if modal is not open
  if (!isOpen) return null;

  //Render modal if it is being opened
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close btn-close" onClick={onClose}></span>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="col-form-label">
                What stock do you own? (e.g AAPL)
              </label>
              <input required className="form-control" id="stock-ticker" />
            </div>
            <div className="mb-3">
              <label className="col-form-label">
                How much of this stock do you own? (e.g 100)
              </label>
              <input required className="form-control" id="user-investment" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;

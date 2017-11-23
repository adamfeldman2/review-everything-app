import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { startEditReview, startRemoveReview } from '../actions/reviews';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { width } from 'window-size';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(96, 125, 139, 0.85)',
    zIndex: '9999'
  },

  content: {
    position: 'absolute',
    left: '50%',
    bottom: '50%',
    top: 'calc(50% - 90px)',
    right: '50%',
    transform: 'translate(-50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '60px',
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class EditReviewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.handleRemoveButton = this.handleRemoveButton.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState(() => {
      return {
        modalIsOpen: true
      };
    });
  }

  closeModal() {
    this.setState(() => {
      return {
        modalIsOpen: false
      };
    });
  }

  handleRemoveButton() {
    this.props.dispatch(startRemoveReview(this.props.review.id));
    this.props.history.push('/reviews');
    this.setState(() => {
      return { modalIsOpen: false };
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper wrapper-edit-review-page">
          <h1>Edit Review</h1>
          <Link to="/reviews">&#8592; All Reviews</Link>
          {this.props.review && (
            <ReviewForm
              {...this.props.review}
              onSubmit={review => {
                this.props.dispatch(startEditReview(review));
                this.props.history.push('/reviews');
              }}
            />
          )}

          <button onClick={this.openModal}>Remove</button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <div className="modal-content">
            <p>Are you sure you want to remove this review?</p>
            <button onClick={this.closeModal}>Cancel</button>
            <button onClick={this.handleRemoveButton}>YES</button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    review: state.reviews.find(review => {
      return review.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditReviewPage);

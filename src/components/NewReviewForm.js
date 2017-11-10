import React from 'react';
import ReactStars from 'react-stars';

class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      stars: 0,
      note: '',
      error: false
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onStarsChanged = this.onStarsChanged.bind(this);
  }

  onTitleChange(e) {
    const title = e.target.value;
    this.setState(() => {
      return {
        title
      };
    });
  }

  onStarsChanged(newRating) {
    const stars = newRating;
    this.setState(() => {
      return {
        stars
      };
    });
  }

  onNoteChanged(e) {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.title && this.state.stars) {
      this.setState(() => {
        return {
          error: false
        };
      });
    } else {
      this.setState(() => {
        return { error: true };
      });
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          {this.state.error ? <div>You must include a title and leave a rating</div> : ''}
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            autoFocus
            onChange={e => {
              this.onTitleChange(e);
            }}
          />
          <ReactStars
            value={this.state.stars}
            count={5}
            onChange={this.onStarsChanged}
            edit={true}
            size={20}
            color2={'#ffd700'}
            className={'stars-wrapper'}
          />
          <textarea
            value={this.state.note}
            placeholder="Note (Optional)"
            onChange={e => {
              this.onNoteChanged(e);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewReviewForm;

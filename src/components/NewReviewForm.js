import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      stars: this.props.stars || 0,
      note: this.props.note || '',
      date: moment(this.props.date) || moment(),
      calendarFocused: false,
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

  onDateChange(date) {
    this.setState(() => {
      return {
        date
      };
    });
  }

  onFocusChange({ focused }) {
    this.setState(() => {
      return {
        calendarFocused: focused
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
      this.props.onSubmit({
        title: this.state.title,
        date: this.state.date.valueOf(),
        stars: this.state.stars,
        note: this.state.note
      });
    } else {
      this.setState(() => {
        return { error: true };
      });
    }
    console.log(this.state);
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
          <SingleDatePicker
            date={this.state.date}
            onDateChange={date => {
              this.onDateChange(date);
            }}
            focused={this.state.calendarFocused}
            onFocusChange={({ focused }) => {
              this.onFocusChange({ focused });
            }}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={'MMM D, YYYY'}
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

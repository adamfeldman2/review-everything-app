import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id || '',
      title: this.props.title || '',
      category: this.props.category || '',
      stars: this.props.stars || 0,
      note: this.props.note || '',
      date: moment(this.props.date) || moment(),
      calendarFocused: false,
      error: false,
      uniqueReviewsArr: this.props.uniqueReviewsArr.map(review => review.category)
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

  onCategoryChange(e) {
    const category = e.target.value;
    this.setState(() => {
      return {
        category
      };
    });
  }

  onAutocompleteSelect(value) {
    const category = value.toUpperCase();
    this.setState(() => {
      return {
        category
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
    if (this.state.title && this.state.category && this.state.stars) {
      this.setState(() => {
        return {
          error: false
        };
      });
      this.props.onSubmit({
        id: this.state.id,
        title: this.state.title,
        category: this.state.category.toLowerCase(),
        date: this.state.date.valueOf(),
        stars: this.state.stars,
        note: this.state.note
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
          {this.state.error ? (
            <div>You must include a title, category and leave a rating</div>
          ) : (
            ''
          )}
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            autoFocus
            onChange={e => {
              this.onTitleChange(e);
            }}
          />

          <Autocomplete
            inputProps={{ placeholder: 'Category' }}
            items={this.state.uniqueReviewsArr}
            shouldItemRender={(item, value) => {
              return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
            }}
            getItemValue={item => item}
            renderItem={(item, isHighlighted, autocompleteItemWrapperStyle) => (
              <div
                key={item}
                style={{
                  background: isHighlighted ? '#039be5' : '#FFF',
                  color: isHighlighted ? '#fff' : '#262f3e',
                  padding: '3px',
                  letterSpacing: '0.4px',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                {item}
              </div>
            )}
            onChange={e => {
              this.onCategoryChange(e);
            }}
            value={this.state.category}
            onSelect={val => this.onAutocompleteSelect(val)}
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
            color1={'#f3f3f3'}
            color2={'#33a9d8'}
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

const mapStateToProps = state => {
  const uniqueCategories = [];
  return {
    uniqueReviewsArr: state.reviews
      .filter(review => {
        if (uniqueCategories.indexOf(review.category) <= -1) {
          uniqueCategories.push(review.category);
          return review;
        }
      })
      .sort((a, b) => {
        return a.category > b.category ? 1 : -1;
      })
  };
};

export default connect(mapStateToProps)(ReviewForm);

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import fontawesome from '@fortawesome/fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';

class DayLogger extends React.Component {
  static propTypes = {
    habits: PropTypes.object,
    history: PropTypes.object,
    logHistory: PropTypes.func.isRequired
  };

  state = {
    logDate: moment().format('MM-DD-YYYY')
  }

	/**********************************************************
	Update Which Date is Being Logged
	*/
  prevDate = () => {
    const newDate = moment.max(moment(this.state.logDate, 'MM-DD-YYYY').subtract(1, 'days'), moment(this.state.logDate, 'MM-DD-YYYY').subtract(3, 'days')).format('MM-DD-YYYY');
    this.setState({ logDate: newDate });
  }

  nextDate = () => {
    const newDate = moment.min(moment(this.state.logDate, 'MM-DD-YYYY').add(1, 'days'), moment()).format('MM-DD-YYYY');
    this.setState({ logDate: newDate });
  }


	/**********************************************************
	Render Buttons to Log 3 Days Back to Today
	*/

  renderDateSwitcher = () => {
    const minDate = moment().subtract(3, 'days');
    const maxDate = moment();

    return (
      <React.Fragment>
        <button
          className="date-shift"
          disabled={moment(this.state.logDate, 'MM-DD-YYYY').isSameOrBefore(minDate, 'day')}
          onClick={this.prevDate}
        >
          {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
        </button>
        <h4>{this.state.logDate}</h4>
        <button
          className="date-shift"
          disabled={moment(this.state.logDate, 'MM-DD-YYYY').isSameOrAfter(maxDate, 'day')}
          onClick={this.nextDate}
        >
          {/* <FontAwesomeIcon icon={faChevronRight} /> */}
        </button>
      </React.Fragment>
    )
  }


	/**********************************************************
	Render List of Habits for a Day
	*/

  renderDateHabits = (indx) => {
    const dayHistory = this.props.history[this.state.logDate] || {};
    const habit = this.props.habits[indx];

    return (
      <li key={indx}>
        <label>
          <input
            type="checkbox"
            checked={dayHistory[indx] === true}
            name={habit}
            onChange={(event) => this.props.logHistory(this.state.logDate, indx, event.target.checked)}
          />
          {habit}
        </label>
      </li>
    )

  }

	/**********************************************************
	Render
	*/

  render() {
    return (
      <section className="container logger card">
        <h2>Did You Do It?</h2>
        <p className="lead">Quick-track if you built your habit each day</p>
        <div className="logger-nav">
          {this.renderDateSwitcher()}
        </div>
        <ul>
          {Object.keys(this.props.habits).map(this.renderDateHabits)}
        </ul>
      </section>
    )
  }
}

export default DayLogger;
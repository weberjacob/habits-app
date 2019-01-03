import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../css/DayLogger.scss';

class DayLogger extends React.Component {
  static propTypes = {
    habits: PropTypes.object,
    history: PropTypes.object,
    logHistory: PropTypes.func.isRequired
  };

  state = {
    logDate: moment().format('MM-DD-YYYY')
  }

  prevDate = () => {
    const newDate = moment.max(moment(this.state.logDate, 'MM-DD-YYYY').subtract(1, 'days'), moment(this.state.logDate, 'MM-DD-YYYY').subtract(3, 'days')).format('MM-DD-YYYY');
    this.setState({ logDate: newDate });
  }

  nextDate = () => {
    const newDate = moment.min(moment(this.state.logDate, 'MM-DD-YYYY').add(1, 'days'), moment()).format('MM-DD-YYYY');
    this.setState({ logDate: newDate });
  }

  renderDateSwitcher = () => {
    const minDate = moment().subtract(10, 'days');
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

  // Show a list of the habits for each day
  renderDateHabits = (index) => {
    const dayHistory = this.props.history[this.state.logDate] || {};
    const habit = this.props.habits[index];

    return (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            checked={dayHistory[index] === true}
            name={habit}
            onChange={(event) => this.props.logHistory(this.state.logDate, index, event.target.checked)}
          />
          {habit}
        </label>
      </li>
    )

  }

  render() {
    return (
      <section className="day-logger">
        <h2>How did the day go?</h2>
        <p>Track if you completed your goal for the day.</p>
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
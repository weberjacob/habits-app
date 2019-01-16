import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../css/HabitHistory.scss';

class HabitHistory extends React.Component {

  static propTypes = {
    totals: PropTypes.number
  };

  state = {
    isActive: false
  }

  toggleActiveState = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  renderYearTotal = () => {
    // Take total entered and divide by the current day of the year.
    let yearTotal = this.props.totals;
    let yearStart = moment().dayOfYear();
    return (
      <div className="year-total">
        Yearly Progress: <span className="total-complete">{ yearTotal } out of { yearStart } days</span>
      </div>
    )
  }

  render() {
    return (
      <div className='history-tracker'>
        <button onClick={this.toggleActiveState} >View Your History</button>

        <section className={(this.state.isActive) ? 'open' : 'closed'}>
          <h2>How have you been doing?</h2>
          <p className=''>How many days have you tracked this year?</p>
          <div className='history-totals'>
            { this.renderYearTotal() }
          </div>
        </section>

      </div>
    )
  }
}

export default HabitHistory;

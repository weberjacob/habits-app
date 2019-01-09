import React from 'react';
import PropTypes from 'prop-types';
import '../css/HabitHistory.scss';

class HabitHistory extends React.Component {

  static propTypes = {
    totals: PropTypes.number
  };

  renderTotal = () => {
    return (
      <div className="total">
        Total = <span className="total-complete">{ this.props.totals }</span>
      </div>
    )
  }

  render() {
    return (
      <section className='container history card'>
        <h2>How have you been doing?</h2>
        <p className="lead">How many days have you tracked this year?</p>
        <div className='history-grid-wrapper'>
          <div className='history-grid'>
            { this.renderTotal() }
          </div>
        </div>
      </section>
    )
  }
}

export default HabitHistory;

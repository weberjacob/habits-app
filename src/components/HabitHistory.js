import React from 'react';
import PropTypes from 'prop-types';
import '../css/HabitHistory.scss';

class HabitHistory extends React.Component {

  static propTypes = {
    totals: PropTypes.number
  };

  renderTotal = () => {
    let totalComplete = this.props.totals ;
    return (
      <div className="total">
        Total = <span className="total-complete">{ totalComplete }</span>
      </div>
    )
  }

  render() {
    return (
      <section className='container history card'>
        <h2>How have you been doing?</h2>
        <p className="lead">How many days have you tracked?</p>
        <div className='history-grid-wrapper flexer justspacearound'>
          <div className='history-grid'>
            { this.renderTotal() }
          </div>
        </div>
      </section>
    )
  }
}

export default HabitHistory;

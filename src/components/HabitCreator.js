import React from 'react';
import PropTypes from 'prop-types';
import '../css/HabitCreator.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

class HabitCreator extends React.Component {
  static propTypes = {
    habits: PropTypes.object,
    changeHabit: PropTypes.func.isRequired,
    removeHabit: PropTypes.func.isRequired
  };

  newHabitRef = React.createRef();
  handleNewHabit = (event) => {
    event.preventDefault();
    const newHabit = this.newHabitRef.current ? this.newHabitRef.current.value : event.target.newHabit.value;
    if (!newHabit) { return }

    const newKey = +new Date();
    this.props.changeHabit(newKey, newHabit);
    event.target.reset();
  }

  handleChangeHabit = (key, event) => {
    const changedHabit = event.currentTarget ? event.currentTarget.value : event.target.value;
    this.props.changeHabit(key, changedHabit);
  }

  render() {
    return (
      <div className="habit-creator">
        <section>
            <h2>What Habits Are You Tracking?</h2>
            <p className="lead">Manage the habits you are tracking here</p>
            <ul className="current-habits">
              {Object.keys(this.props.habits).map(index => (
                <li key={index}>
                  <fieldset>
                    <input onChange={(event) => this.handleChangeHabit(index, event)} value={this.props.habits[index]} />
                    <button className="remove icon" onClick={() => this.props.removeHabit(index)}>
                      <FontAwesomeIcon icon={ faMinusCircle } />
                    </button>
                  </fieldset>
                </li>
              ))}

              <li>
                <form onSubmit={this.handleNewHabit}>
                  <input name="newHabit" ref={ this.newHabitRef } />
                <button className="add icon" type="submit">
                  <FontAwesomeIcon icon={ faPlusCircle } />
                </button>
                </form>
              </li>
            </ul>
        </section>
      </div>
    )
  }
}

export default HabitCreator;
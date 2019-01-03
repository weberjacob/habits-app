import React from 'react';
import PropTypes from 'prop-types';
import '../css/HabitCreator.scss';

class HabitCreator extends React.Component {
  static propTypes = {
    habits: PropTypes.object,
    changeHabit: PropTypes.func.isRequired,
    removeHabit: PropTypes.func.isRequired
  };

  state = {
    isActive: false
  }

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

  showHabitCreation = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <div className="habit-creator">
        <button onClick={this.showHabitCreation} >Manage Your Habits</button>
        <section className={(this.state.isActive) ? 'open' : 'closed'}>
            <h2>What Habits Are You Tracking?</h2>
            <p className="lead">Manage the habits you are tracking here</p>
            <ul>
              {Object.keys(this.props.habits).map(index => (
                <li key={index}>
                  <fieldset>
                    <input onChange={(event) => this.handleChangeHabit(index, event)} value={this.props.habits[index]} />
                    <button className="delete-btn" onClick={() => this.props.removeHabit(index)}>Remove Habit</button>
                  </fieldset>
                </li>
              ))}

              <li>
                <form onSubmit={this.handleNewHabit}>
                  <input name="newHabit" ref={this.newHabitRef} />
                  <button className="add-btn" type="submit">Add Habit</button>
                </form>
              </li>
            </ul>
        </section>
      </div>
    )
  }
}

export default HabitCreator;
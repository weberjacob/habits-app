import React from 'react';
import PropTypes from 'prop-types';

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
      <section className="container creator card">
        <h2>What Habits Are You Tracking?</h2>
        <p className="lead">Manage the habits you are tracking here</p>
        <ul>
          {Object.keys(this.props.habits).map(index => (
            <li key={index}>
              <fieldset>
                <input onChange={(event) => this.handleChangeHabit(index, event)} value={this.props.habits[index]} />
                <button className="delete-btn" onClick={() => this.props.removeHabit(index)}>asdfsdf</button>
              </fieldset>
            </li>
          ))}

          <li>
            <form onSubmit={this.handleNewHabit}>
              <input name="newHabit" ref={this.newHabitRef} />
              <button className="add-btn" type="submit">asdf</button>
            </form>
          </li>
        </ul>
      </section>
    )
  }
}

export default HabitCreator;
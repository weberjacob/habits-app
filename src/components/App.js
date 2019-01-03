import React from 'react';
import firebase from 'firebase';
import base, { firebaseApp } from "../base";
import DayLogger from './DayLogger';
import HabitCreator from './HabitCreator';
import '../css/App.scss';
// import HistoryTracker from './HistoryTracker';

class App extends React.Component {
  state = {
    user: '',
    displayName: '',
    habits: {},
    history: {}
  };

  componentDidMount() {
    // const user = localStorage.getItem('user');
    this.authListener = firebase.auth().onAuthStateChanged(userData => {
      if (userData && userData.uid) {
        this.userAuth(userData);
      } else {
        localStorage.removeItem('user');
        this.props.history.push('/login');
      }
    });
  }

  userAuth = async userData => {
    const user = userData.uid;
    const displayName = userData.displayName;
    localStorage.setItem('user', user);
    this.setState({ user, displayName });

    this.habitRef = base.syncState(`${this.state.user}/habits`, {
      context: this,
      state: 'habits'
    });

    this.histRef = base.syncState(`${this.state.user}/history`, {
      context: this,
      state: 'history'
    });
  }

  componentWillUnmount() {
    if (this.authListener) { this.authListener = undefined }
    if (this.habitRef) { base.removeBinding(this.habitRef) }
    if (this.histRef) { base.removeBinding(this.histRef) }
  }

  logOut = () => {
    firebase.auth().signOut();
  }

  changeHabit = (key, newVal) => {
    const updatedHabits = { ...this.state.habits };
    updatedHabits[key] = newVal;
    this.setState({ habits: updatedHabits });
  }

  removeHabit = (key) => {
    const updatedHabits = { ...this.state.habits };
    updatedHabits[key] = null; // set to null instead of delete - firebase bug?
    this.setState({ habits: updatedHabits });
  }

  logHistory = (date, habitKey, didDoIt) => {
    const updatedHistory = { ...this.state.history };
    updatedHistory[date] = updatedHistory[date] || {};
    updatedHistory[date][habitKey] = didDoIt || false;
    this.setState({ history: updatedHistory });
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div>
            <h1>{this.state.displayName}'s Habits</h1>
            <button className="logout" onClick={this.logOut}>Log Out</button>
          </div>
        </nav>
        <main className='container'>
          <DayLogger
            habits={this.state.habits}
            history={this.state.history}
            logHistory={this.logHistory}
          />


          {/* <HistoryTracker
            habits={this.state.habits}
            history={this.state.history}
          /> */}
          <HabitCreator 
            habits={this.state.habits}
            changeHabit={this.changeHabit}
            removeHabit={this.removeHabit}
          />
        </main>
      </React.Fragment>
    )
  }
}
export default App;
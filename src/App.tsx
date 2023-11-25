import React from 'react';
import logo from './logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mokedata/robots.json';
import Robot from './components/Robot';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
}

export default App;

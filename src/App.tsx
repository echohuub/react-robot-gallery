import React from 'react';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mokedata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

interface Props {}

interface State {
  roboGallery: any,
}
class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      roboGallery: [],
    }
  }

  componentDidMount(): void {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({roboGallery: data}))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.roboGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

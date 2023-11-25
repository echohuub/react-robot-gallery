import React from 'react';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mokedata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

interface Props { }

interface State {
  roboGallery: any,
  count: number,
}
class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      roboGallery: [],
      count: 0,
    }
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ roboGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <button onClick={()=>{
          this.setState({
            count: this.state.count + 1
          }, ()=>{
            console.log(this.state.count)
          })
          console.log(this.state.count);

          // 调用两次，还是一次效果
          this.setState({
            count: this.state.count + 1
          })
          this.setState({
            count: this.state.count + 1
          })

          // 如果要生效两次，这样使用
          this.setState((preState, preProps) =>{
            return {count: preState.count + 1}
          })
          this.setState((preState, preProps) =>{
            return {count: preState.count + 1}
          })
        }}>Click</button>
        <span>count: {this.state.count}</span>
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

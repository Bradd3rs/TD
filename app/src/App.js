import React from 'react';
import Player from './components/Player';
import Controls from './components/Controls';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();

    this.state = {
      level: 1,
      units: 10,
      attack: 1,
      totalAttack: 0,
      dead: false
    }
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.createArmy = this.createArmy.bind(this);
    this.increaseLevel = this.increaseLevel.bind(this);
  }
  componentDidMount() {

    this.createArmy();
  }
  start(attack) {

    this.child.current.calculateHealth();
    this.createArmy();
  }
  stop() {

    this.setState(() => ({ dead: true }))
  }
  increaseLevel() {

    this.setState((prevState) => ({ level: prevState.level + 1 }))
  }
  createArmy() {

    let totalAttack = 0;
    for(let i = 0; i < this.state.units + this.state.level; i++ ) {
      totalAttack = totalAttack + this.state.attack;
    }

    this.setState(() => ({ totalAttack: totalAttack }))
  }
  render() {
    return (
      <div>
        <h1>Level: {this.state.level}</h1>
        <p>totalAttack: {this.state.totalAttack}</p>
        <Player 
          totalAttack={this.state.totalAttack} 
          ref={this.child}
          increaseLevel={this.increaseLevel}
          kill={this.stop} />
        <Controls  
          start={this.start}
          dead={this.state.dead}/>
      </div>
    );
  }
}

export default App;

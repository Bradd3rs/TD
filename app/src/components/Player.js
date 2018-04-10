import React, {Component} from 'react';
import styled from 'styled-components';

class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            health: 100,
            dps: 10
        }
        this.calculateHealth = this.calculateHealth.bind(this);
    }
    calculateHealth() {
        let health = this.state.health,
            totalAttack = this.props.totalAttack;
            if( (health - totalAttack) > 0 ) {

                this.setState(() => ({ health: health - totalAttack  }));
                this.props.increaseLevel();
            } else {

                this.setState(() => ({ health: 0 }));
                this.props.kill();
                console.log('you died');
            }
    }
    render() {
        return (
            <PlayerContainer>
                <h1>Player</h1>
                <p>health: {this.state.health}</p>
                <p>dps: {this.state.dps}</p>
            </PlayerContainer>
        )
    }
}

export default Player;

const PlayerContainer = styled.div`
    width: auto;
    height: auto;
    background-color: rebeccapurple;
    color: white;
    padding: 5px;
    display: inline-block;
`
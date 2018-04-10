import React, {Component} from 'react';
import styled from 'styled-components';

class Controls extends Component {
    constructor(props) {
        super(props)

        this.state = {
            health: 100,
            attack: 10,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let attack = this.state.attack
        this.props.start(attack);
    }
    render() {
        return (
            <div>
                <Button type="button" onClick={this.handleClick} disabled={this.props.dead}>Start</Button>
            </div>
        )
    }
}

export default Controls;

const Button = styled.button`
    width: auto;
    height: auto;
    background-color: darkcyan;
    color: white;
    border: none;
    padding: 5px;
`
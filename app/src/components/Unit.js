import React, {Component} from 'react';
import styled from 'styled-components';

class Unit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            health: 50,
            dps: 5,
        }
    }
    render() {
        return (
            <UnitContainer>
                <h1>Unit</h1>
                <p>health: {this.state.health}</p>
                <p>dps: {this.state.dps}</p>
            </UnitContainer>
        )
    }
}

export default Unit;

const UnitContainer = styled.div`
    width: auto;
    height: auto;
    background-color: sienna;
    color: white;
    padding: 5px;
    display: inline-block;
`
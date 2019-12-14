import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Amount ($)</th>
                <th>Payer</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}


const TableBody = props => { 
    
    const rows = props.characterData.map((row, index) => {
        return (
            
            <tr key={index}>
                <td>{row.amount}</td>
                <td>{row.payer}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Calculator extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Calculator;

import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Calculator from './Calculator';

class App extends Component {
    state = {
        characters: [],
        bills: 0
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    IncrementBillAmount = () => {
        this.setState({bills: this.state.bills + 1});
    }
   
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }


    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h2>😎Coolest tool for bill splitting😎</h2>
            
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New Bill</h3>
                <Form handleSubmit={this.handleSubmit} />
                <h3>Who 😎 owes Who 💰 </h3>
                <Calculator
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
               
            </div>
        );
    }
}

export default App;
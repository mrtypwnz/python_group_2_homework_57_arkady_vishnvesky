import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button'
import Alert from './components/Alert/Alert'
class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Modal: false,
            Alert: true,
        };
    }

    showModal = () => {
        this.setState({Modal: true});
    };

    closeModal = () => {
        this.setState({Modal: false});
    };

    showAlert = () => {
        this.setState({Alert: true})
    };

    closeAlert = () => {
        this.setState({Alert: false})
    };

    exampleAlert = () => {
        alert("Продолжить_тест")
    }


    render() {

    let buttons = [{type: 'primary', label: 'Продолжить', clicked: this.exampleAlert},
                {type: 'danger', label: 'Закрыть', clicked: this.closeModal}];

    return (
        <div>
            <Button clicked ={this.showModal}/>
            <Modal
                show={this.state.showModal}
                title="example text"
                close={this.closeModal}
                buttons={buttons}
            />

            <Alert
                type="primary"
                show={this.state.showAlert}
                close={this.closeAlert}
                ><p className="Alert-Text">some alert text</p>
            </Alert>
        </div>

    );
    }
}

export default App;

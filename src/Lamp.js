import React, {Component} from 'react';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
    }

    handleClik = () => {
        this.setState({ on: !this.state});
    }
    render() {
        const light = this.state.on ? 'on' : 'off';
        return(
            <div className="Lamp">
                <button 
                    onClik={this.handleClik}
                    className="{light}">
                    {light.toUpperCase()}
                </button>
                <figure className={light} />
            </div>
        );
    }
}

export default Lamp; 
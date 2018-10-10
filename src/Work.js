import React, {Component} from 'react'
import logo from './logo.svg';


class Work extends Component {

    constructor(props){
        super(props);
        this.state = {
          working: false
        };
      }
  
      handleClik = () => {
        this.setState({working: !this.state.working});
  
      }

    render(){

        const taf = this.state.working ? 'App-logos' : 'App-logo';
        const working = this.state.working ? 'working' : 'fin';
   
        return(
            

            <div className="App">
            <header className="App-header">
                <img src={logo} className={taf}  alt="logo" />
                <h1 className="App-title">Simpsons Quotes</h1>
            
        
                <button 
                    onClick={this.handleClik}
                    className={working}>
                    {working.toUpperCase()}
                </button>

            </header>       
            </div>
        )
    }

}

export default Work;
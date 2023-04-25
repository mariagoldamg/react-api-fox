import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      image:null
    }
  }

 async componentDidMount () {
    const url = "https://randomfox.ca/floof/";
    const response = await fetch (url);
    const data = await response.json();
    this.setState ({image:data.image});
 

}


render(){
  return(
    <div>
      <img src={this.state.image} alt="fox" width ="300px"/>
    
    </div>
  )
}
}
export default App;

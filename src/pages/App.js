import React, {Component} from 'react';
import logo from '../images/banner.png'
import RickAndMortyList from '../components/RickAndMortyList';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/App.css';

class App extends Component {
  state = {
    loading: true,
    error: null,
    data: {
      results: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try{
      this.setState({loading: true, error: null})
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await response.json();
      this.setState({loading: false, data: data})
      console.log(data)
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }
  render() {
    if(this.state.loading){
      return 'loading...'
    }
    if(this.state.error){
      return 'lo siento hubo un error inesperado'
    }
    return (
      <div className="App">
        <div className="container">
          <div className="App-logo">
            <img src={logo} alt="logo"/>
            <div className="form-group">
              <input className="form-control" placeholder="Filtrar Un personaje"/>
            </div>
          </div>
          <ul className="App-container-list">
            {this.state.data.results.map(item => (
              <li className="App-card" key={item.id}>
                <RickAndMortyList item={item}/>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
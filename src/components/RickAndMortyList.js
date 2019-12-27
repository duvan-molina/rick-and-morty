import React, { Component } from 'react';
import './style/RickAndMortyList.css'

class RickAndMortyList extends Component {
render() {
  
  return(
  <div className="RickAndMortyList">
    <div className="RickAndMortyList-img">
      <img src={this.props.item.image} alt="image"/>
    </div>
    <div className="RickAndMortyList-info">
      <h1>Name: {this.props.item.name}</h1>
      <p>Type: {this.props.item.species}</p>
      <p>Gender: {this.props.item.gender}</p>
    </div>
  </div>
  );
}
}

export default RickAndMortyList;
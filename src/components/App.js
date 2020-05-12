import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets";
    switch (this.state.filters.type) {
      case 'cat':
        url = url + '?type=cat';
        break;
      case 'dog':
        url = url + '?type=dog';
        break;
      case 'micropig':
        url = url + '?type=micropig';
        break;
      default:
        url = url;
        break;
    }
    fetch(url)
    .then(response => response.json())
    .then(jsonObject => this.setState({pets: jsonObject}));
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    });
    this.setState({
      pets: pets
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

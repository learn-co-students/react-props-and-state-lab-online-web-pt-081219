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

  onChangeType= (newFilter) => {
    this.setState({
      filters:{
        type: `${newFilter}`
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all"){
      fetch('/api/pets')
      .then(res => res.json())
      .then((result) => {
      
        this.setState({
          pets: result
        })
        console.log(this.state.pets)


      })
    }else{
      console.log(this.state.filters.type)
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then((result) => {
        
        this.setState({
          pets: result
        })
      })
    }
    

    
  }

  onAdoptPet = (petId) => {
   /* let result = this.state.pets.find(({id}) => id === find_id)
    console.log(result)
    result.isAdopted = true
    this.setState({
      pets: [
        ...this.state.pets,
        result
      ]
    })
*/
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
    console.log(this.state.pets)
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
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

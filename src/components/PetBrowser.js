import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {

  genPets = () => (
    this.props.pets.map((pet, idx) => 
      <Pet pet= {pet} key ={idx} onAdoptPet={this.props.onAdoptPet}/>
    )
    
  )

  render() {
    return <div className="ui cards">{this.genPets()}</div>
  }
}

export default PetBrowser

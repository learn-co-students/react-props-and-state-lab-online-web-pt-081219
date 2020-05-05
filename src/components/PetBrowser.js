import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const pets = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
     //*** pets is an array of react elements (which are a $$typeof: Symbol(react.element)) ***
    ))

    return <div className="ui cards">
            {pets}
          </div>

  }
}

export default PetBrowser

//////////////////////////////////////////////////////////////////////////////

// Alt, though would be without actually being cards:

// import React from 'react'
// import Pet from './Pet'

// class PetBrowser extends React.Component {

//   render(){
//      return this.props.pets.map(pet => (<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />))
//   }

// }

// export default PetBrowser

//////////////////////////////////////////////////////////////////////////////

// Alt, without arrow function implicit return:

// import React from 'react'
// import Pet from './Pet'

// class PetBrowser extends React.Component {

//   render() {
//     const pets = this.props.pets.map(function(pet){
//       return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
       
//     }.bind(this))


//     return <div className="ui cards">
//             {pets}
//           </div>
//   }
// }

// export default PetBrowser
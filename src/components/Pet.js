import React from 'react'

class Pet extends React.Component {

gender = (pet) => {
  var gender;
  if (pet.gender === 'male') {
    gender = '♂'
  } else {
    gender = '♀'
  }
  return gender
}

button = () => {
  var btn = null
  if (this.props.pet.isAdopted) {
    btn = <button className="ui disabled button">Already adopted</button>
  } else {
     btn = <button onClick={ () => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
  }
  return btn
}


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender(this.props.pet)}
            {this.props.pet.name}
          </a>
          <div className="meta">
          <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.button(this.props.pet)}
        </div>
      </div>
    )
  }
}

export default Pet

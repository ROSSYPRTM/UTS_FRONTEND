import React, { Component } from 'react'
import Rubah from './Rubah'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      barang: "TAS"
    })
  }

gantiBarang = (barang_baru) => {
  this.setState({
    barang: barang_baru
  })
}
 
  render() {
    return (
      <div>
        <h2>{this.state.barang}</h2>
        <button onClick={() => this.gantiBarang("LAPTOP")}>ganti</button>
        <Rubah barang={this.state.barang} gantiBarang={this.gantiBarang}/>
      </div>
    )
  }
}

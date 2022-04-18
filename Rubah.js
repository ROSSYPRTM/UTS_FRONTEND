import React, { Component } from 'react'

export default class Rubah extends Component {

    render() {
        const{barang, gantiBarang} = this.props
        return (
            <div>
                <h2>Rubah state ke props = {barang}</h2>
                <button onClick={() => gantiBarang("laptop")}>ganti</button>
            </div>
        )
    }
}

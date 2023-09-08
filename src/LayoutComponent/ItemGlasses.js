import React, { Component } from 'react'

export default class ItemGlasses extends Component {
    render() {
        let { url } = this.props.item
        return (
            <div className="card bg-white mr-4 mb-3" style={{ border: "1px solid black", width: "100px", height: "50px", justifyContent: "center" }}>
                <a onClick={() => { 
                    this.props.handleAddGlass(this.props.item)
                 }} href="#" type=''><img src={url} alt="" style={{ width: "100%" }} /></a>         
            </div>
        )
    }
}

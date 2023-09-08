import React, { Component } from 'react'
import ItemGlasses from './ItemGlasses'

export default class ListGlasses extends Component {
    renderListGlasses = () => { 
        return this.props.list.map((item,index) => {  
            return <ItemGlasses item={item} key={index} handleAddGlass= {this.props.handleAddGlass}
            />
        })
    }
  render() {
    return (
      <div style={{display : "flex",flexWrap : "wrap", width : "100%"}}>
            {this.renderListGlasses()}
      </div>
    )
  }
}

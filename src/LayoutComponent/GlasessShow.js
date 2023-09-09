import React, { Component } from 'react'

export default class GlasessShow extends Component {
    renderGlass = () => { 
        // let {showGlass} = this.props
        return this.props.showGlass.map((item,index) => { 
            let {name,url,desc} = item
            return (
                <div key={index}>
                    <img  src={url} alt=""style={{width:"50%"}}/>
                    <div className="d-flex flex-column position-absolute" style={{top:"90px",backgroundColor:"rgba(255, 99, 71, 0.2)"}}>
                        <h2 style={{fontSize:"14px", textAlign:"left"}}>{name}</h2>
                        <p style={{fontSize:"12px",}}>{desc}</p>
                    </div>
                </div>            
            )
         })
     }
  render() {
    return (
      <div style={{margin:"auto",width:"185px",position:"absolute",bottom:"140px",position:"absolute",left:"34%"}}>
            {this.renderGlass()}
      </div>
    )
  }
}

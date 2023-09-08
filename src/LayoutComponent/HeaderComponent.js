import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
            <header className='d-flex justify-content-center align-items-center position-fixed' style={{backgroundColor: "rgba(0, 0, 0, 0.5)", height : "100px",top:"0",right:"0",left:"0",zIndex : "1000"}}>
                <div className="container text-white">
                    <h2 >TRY GLASSES APP ONLINE</h2>
                </div>
            </header>
      </div>
    )
  }
}

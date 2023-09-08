import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'

export default class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <BannerComponent/>
      </div>
    )
  }
}

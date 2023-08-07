import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div  className="text-center">
        <img src="https://www.sketchup.com/themes/sketchup_www_terra/images/ajax-loader.gif" height={100} alt="Loading..." />
      </div>
    )
  }
}

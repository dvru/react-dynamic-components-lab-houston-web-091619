import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    if(this.props.opacity >= 0.2) {    //If the opacity value is greater than or equal to 0.2
      return ( // the ColorBox component should render another ColorBox itself (recursive components!) //an opacity prop should be passed to the child //// the passed opacity prop should be reduced by 0.1
        <div className="color-box" style={{opacity: this.props.opacity}}>  
          <ColorBox opacity={this.props.opacity - 0.1} />  
        </div>
      )
    } else {   // If the opacity value is less than 0.2
      return null //do not render another ColorBox (or else we would have infinite ColorBoxes rendering!)
                    // instead, the render method should return null
    }
  }
  
}
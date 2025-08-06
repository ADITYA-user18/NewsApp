import React, { Component } from 'react'
import loader from './loader2.gif'

export class spinner extends Component {
  render() {
    return (
     <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
  <img
  src={loader}
  alt="Loading..."
  className="img-fluid rounded-circle shadow"
  style={{
    width: '500px',
    height: '500px',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // good for both modes
    backdropFilter: 'blur(4px)', // adds a glass effect
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
  }}
/>

</div>

    )
  }
}

export default spinner

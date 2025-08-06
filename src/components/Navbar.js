import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      darkMode: true,
    };
  }

  toggleMode = () => {
    const newMode = !this.state.darkMode;
    // this.setState({ darkMode: newMode });

    
    document.body.style.backgroundColor = newMode ? '#121212' : 'white';
    document.body.style.color = newMode ? 'white' : 'black';
  };

  render() {
const { darkMode, toggleMode } = this.props;
    

    return (
      <div>
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
          <div className="container-fluid">
            <a className={`navbar-brand ${darkMode ? 'text-white' : 'text-dark'} ms-5`} href="#">Instant News</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link active ${darkMode ? 'text-white' : 'text-dark'}`} href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} href="/">Link</a>
                </li>
              </ul>
            </div>

            
            <div className="form-check form-switch ms-2 me-3">
  <label
    className={`form-check-label me-2 ${darkMode ? 'text-white' : 'text-dark'}`}
    htmlFor="modeSwitch"
  >
    {darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
  </label>
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="modeSwitch"
    onClick={toggleMode}
    checked={darkMode}
    readOnly
  />
</div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

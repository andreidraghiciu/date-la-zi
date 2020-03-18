import React from 'react';
import { Link } from 'react-router-dom';
import './top-nav.css';
// import { Footer } from "@code4ro/taskforce-fe-components";


export class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerMenuActive: false
    }
  }

  toggleBurgerMenu() {
    this.setState({
      isBurgerMenuActive: !this.state.isBurgerMenuActive
    })
  }

  hideBurgerMenu() {
    this.setState({
      isBurgerMenuActive: false
    })
  }

  render() {
    return (
      <div className="navigation-container">
        <nav
          role="navigation"
          aria-label="main navigation"
          className="navbar"
        >
          <div className="container border-bottom">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" onClick={() => this.hideBurgerMenu()}>
                <img src="/images/logo-coviz.svg" className="logo-coviz" alt="Date La Zi Logo" />
              </Link>
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                data-target="navMenu"
                href="#/"
                aria-expanded={this.state.isBurgerMenuActive ? 'true' : 'false'}
                onClick={() => this.toggleBurgerMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div
              id="navMenu"
              className={this.state.isBurgerMenuActive ? 'navbar-menu is-active' : 'navbar-menu'}
            >
              <div className="navbar-start" />
              <div className="navbar-end">
                <Link to="/about" className="navbar-item" onClick={() => this.hideBurgerMenu()}>
                Despre Proiect
                </Link>
                <a href="https://code4.ro/ro/apps" className="navbar-item">
                Ecosistemul Covid-19
                </a>
                <a href="https://code4.ro/ro/doneaza" className="navbar-item">
                Sprijină proiectul
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container is-clearfix">
          {/* <Footer /> */}
          <div className="is-pulled-right">
            <div className="developer border-bottom level-right is-clearfix">
              <div>
                <span className="is-inline-block">Un proiect dezvoltat de</span>
              &nbsp;&nbsp;
                <a href="https://code4.ro" target="_blank" rel="noopener noreferrer" className="is-inline-block">
                  <img src="/images/logo-code4.svg" alt="Code 4 Romania Logo" className="logo-code4" />
                </a>
              &nbsp;
              </div>
              <div>
                &nbsp;&nbsp;
                <span>În parteneriat cu</span>
                &nbsp;&nbsp;
                <a href="https://www.gov.ro/" target="_blank" rel="noopener noreferrer" className="is-inline-block">
                  <img src="/images/logo-gov.png" alt="Guvernul Romaniei si Logo" className="logo-gov" />
                </a>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

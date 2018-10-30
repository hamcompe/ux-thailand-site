import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 95px;
  padding: 0 40px;
  align-items: center;
  transition: all 0.3s ease;

  font-size: 14px;
  font-weight: 600;
  a {
    color: var(--color_almost_white);
  }
  ${props => props.white
    && `
    background: rgba(255,255,255,0.95);
    a {
      color: var(--color_black);
    }
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  `};
`
const LogoWrapper = styled.div`
  min-width: 400px;
`
const NavbarRight = styled.div``
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
`
const Li = styled.li`
  padding: 4px 8px;
  margin: 0 20px;
`

const ImageLogo = styled.img`
  height: 55px;
`

class Navbar extends React.Component {
  state = {
    offset: 0,
  }

  handleScroll = () => {
    this.setState({ offset: window.pageYOffset })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  logoURLWithPrefix = name => `/images/${name}`

  render() {
    const { offset } = this.state
    const isNavbarWhite = offset >= 150

    const logoURL = isNavbarWhite ? 'logo_UXO.svg' : 'logo_UXO-white.svg'

    return (
      <Nav white={isNavbarWhite}>
        <LogoWrapper>
          <Link to="/">
            <ImageLogo src={this.logoURLWithPrefix(logoURL)} alt="" />
          </Link>
        </LogoWrapper>
        <NavbarRight>
          <Ul>
            <Li>
              <Link to="#conferences">Conferences</Link>
            </Li>
            <Li>
              <Link to="#vision">Vision</Link>
            </Li>
            <Li>
              <Link to="#sponsor">Sponsors</Link>
            </Li>
            <Li>
              <Link to="#agenda">Agenda</Link>
            </Li>
            <Li>
              <Link to="#speakers">Speakers</Link>
            </Li>
            <Li>
              <Link to="#ticket">Ticket</Link>
            </Li>
          </Ul>
        </NavbarRight>
      </Nav>
    )
  }
}

export default Navbar

import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 63px;
  padding: 0 40px;
  align-items: center;
  transition: all 0.3s ease;

  font-size: 14px;
  font-weight: 600;
  color: var(--color_almost_white);
  ${props => props.white
    && `
    background: rgba(255,255,255,0.95);
    color: var(--color_black);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  `};
`
const LogoWrapper = styled.div`
  width: 300px;
`
const NavbarRight = styled.div``
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
`
const Li = styled.li`
  padding: 4px 8px;
  margin: 0;
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

  render() {
    const { offset } = this.state
    const isNavbarWhite = offset >= 150

    return (
      <Nav white={isNavbarWhite}>
        <LogoWrapper>
          <Link to="/">UX Thailand</Link>
        </LogoWrapper>
        <NavbarRight>
          <Ul>
            <Li>Conferences</Li>
            <Li>Vision</Li>
            <Li>Sponsors</Li>
            <Li>Agenda</Li>
            <Li>Speakers</Li>
            <Li>Ticket</Li>
          </Ul>
        </NavbarRight>
      </Nav>
    )
  }
}

export default Navbar

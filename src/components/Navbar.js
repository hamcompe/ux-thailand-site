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
  box-shadow: 0 1px rgba(99, 114, 130, 0.16);
  align-items: center;
  transition: all 0.3s ease;
  color: #fff;
  ${props => props.white
    && `
    background: rgba(255,255,255,0.95);
    color: #000;
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
    offset: window.pageYOffset,
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

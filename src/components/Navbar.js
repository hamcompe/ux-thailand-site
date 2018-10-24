import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 63px;
  padding: 0 40px;
  box-shadow: 0 1px rgba(99, 114, 130, 0.16);
  align-items: center;
`
const LogoWrapper = styled.div`
  width: 300px;
`
const NavbarRight = styled.div`
`
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
`
const Li = styled.li`
  color: #fff;
  padding: 4px 8px;
  margin: 0;
`

function Navbar() {
  return (
    <Nav>
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
        {/* <Link href="/new-story">
          <a>new story</a>
        </Link> */}
      </NavbarRight>
    </Nav>
  )
}

export default Navbar

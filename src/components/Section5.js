import React from 'react'
import styled from 'react-emotion'
import Button from './Button'

const Section = styled.section`
  padding: 80px 0;
  min-height: 500px;
  background: #111;
  color: var(--color_grey_super_light);
`
const Container = styled.div`
  padding: 0 var(--padding_size);
`
const Title = styled.h3`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);
  margin: 0;
  strong {
    font-size: 48px;
    font-weight: 800;
  }
`
const SubTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
`
const HeaderWrapper = styled.header`
  text-align: center;
`
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Body = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  margin: 0 16px;
`

function Section5() {
  return (
    <Section>
      <Container>
        <HeaderWrapper>
          <Title>
            A big <strong>thank you</strong> for support
          </Title>
          <SubTitle>Our partners in achieving our vision</SubTitle>
        </HeaderWrapper>
        <FooterWrapper>
          <Body>How to be apart of this UXTH Conference 2019,</Body>
          <Button>Contact us</Button>
          <Body>or getting more detail</Body>
          <Button outline>Download sponsorship.pdf</Button>
        </FooterWrapper>
      </Container>
    </Section>
  )
}

export default Section5

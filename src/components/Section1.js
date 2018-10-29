import React from 'react'
import styled from 'react-emotion'
import Button from './Button'

const HeroText = styled.h2`
  color: #fff;
  font-size: 42px;
  margin-bottom: 36px;
  font-weight: 400;
`
const Body = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 36px;
`
const BodyHightlight = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`
const Section = styled.section`
  background: var(--color_blur_dark);

  padding-top: 200px;
  padding-bottom: 100px;
`
const HeroSectionTextWrapper = styled.div`
  max-width: 720px;
`
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
`

function HeroSection() {
  return (
    <Section>
      <Container>
        <HeroSectionTextWrapper>
          <HeroText>A two-day conference for people who build world-class products.</HeroText>
          <BodyHightlight>23-24 February, 2019</BodyHightlight>
          <Body>Central Bangkok, Thailand</Body>
          <Button>buy ticket</Button>
        </HeroSectionTextWrapper>
      </Container>
    </Section>
  )
}

export default HeroSection

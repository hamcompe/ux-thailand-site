import React from 'react'
import styled from 'react-emotion'
import Button from './Button'
import mq from '../../utils/media-query'

const Section = styled.section`
  background: var(--color_blur_dark);

  padding-top: 200px;
  padding-bottom: 100px;
  ${mq.s} {
    padding-top: 160px;
    padding-bottom: 40px;
  }
`
const HeroText = styled.h1`
  font-weight: 200;
  font-style: italic;
  font-size: 36px;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  line-height: 1.2;
  margin-bottom: 80px;
`
const Body = styled.p`
  font-style: italic;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 64px;
`
const BodyHightlight = styled.p`
  font-style: italic;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
`
const HeroSectionTextWrapper = styled.div`
  color: var(--color_almost_white);
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

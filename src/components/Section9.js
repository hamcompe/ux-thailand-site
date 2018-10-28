import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  background-image: linear-gradient(var(--color_blur_dark), var(--color_blue));
  color: #fff;
  padding: 63px 0;
  text-align: center;
`
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const Title = styled.h2`
  font-size: 46px;
  font-weight: 400;
  strong {
    font-weight: 900;
  }
`
const Label = styled.p`
  color: var(--color_blue_light);
  font-size: 32px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px -16px;
  padding-left: 100px;
  padding-right: 100px;
`
const Card = styled.div`
  min-height: 500px;
  min-width: 350px;
  background: #fff;
  border-radius: 8px;
  margin: 0 16px;
  color: var(--color_blur_dark);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
`

const CardHead = styled.h3`
  font-size: 24px;
  color: #098bd5;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`

const CardTitle = styled.h1`
  font-size: 48px;
  color: #098bd5;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25); 
  margin: 0;
  max-width: 300px;
  word-wrap: break-word;
  text-align: left;
  line-height: 0.94;
`

const CardSubtitle = styled.h3`
  font-size: 24px;
  color: #484848;
  max-width: 300px;
  word-wrap: break-word;
  text-align: left;
`

const CardPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const CardPriceDiscount = styled.p`
  text-decoration: line-through;
  color: #ea0e50;
  font-size: 32px;
`

const CardPrice = styled.p`
  font-size: 64px;
  color: #1c3180;
  line-height: 60px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

function Section9() {
  return (
    <Section>
      <Wrapper>
        <Title>
          Join us at <strong>The UX Thailand Conference</strong>
        </Title>
        <Label>
          Get 33% off. Early bird tickets ends 1st November 2018
        </Label>
        <CardWrapper>
          <Card>
            <CardHead> Day 1 </CardHead>
            <CardTitle> INSPIRE </CardTitle>
            <CardSubtitle> Conference only </CardSubtitle>
            <CardPriceWrapper>
              <CardPriceDiscount> 4950 </CardPriceDiscount>
              <CardPrice> 2450 THB </CardPrice>
            </CardPriceWrapper>
          </Card>
          <Card>
            <CardHead> Day 2 </CardHead>
            <CardTitle> HANDS-ON </CardTitle>
            <CardSubtitle> Workshop Only (limited seat) </CardSubtitle>
            <CardPriceWrapper>
              <CardPriceDiscount> 11950 </CardPriceDiscount>
              <CardPrice> 8950 THB </CardPrice>
            </CardPriceWrapper>
          </Card>
          <Card>
            <CardTitle> FULL EXPERIENCE </CardTitle>
            <CardSubtitle> Both Conference Day 1 & Workshop Day 2 </CardSubtitle>
            <CardPriceWrapper>
              <CardPriceDiscount> 14950 </CardPriceDiscount>
              <CardPrice> 9950 THB </CardPrice>
            </CardPriceWrapper>
          </Card>
        </CardWrapper>
      </Wrapper>
    </Section>
  )
}

export default Section9

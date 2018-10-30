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
  font-size: 48px;
  font-weight: 100;
  font-style: italic;
  line-height: 45px;
  strong {
    font-weight: 800;
  }
`
const Label = styled.p`
  color: var(--color_blue_light);
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  margin-top: 60px;
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
  position: relative;
`

const CardHead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  color: #098bd5;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`

const CardTitle = styled.h1`
  font-size: 48px;
  font-weight: 200;
  font-style: italic;
  color: #098bd5;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  margin: 0;
  max-width: 300px;
  word-wrap: break-word;
  text-align: left;
  line-height: 45px;
`

const CardSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
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
  position: absolute;
  bottom: 120px;
  left: 0px;
`
const CardPriceDiscount = styled.p`
  text-decoration: line-through;
  color: #ea0e50;
  font-size: 32px;
  font-weight: 300;
  font-style: italic;
`

const CardPrice = styled.p`
  font-size: 64px;
  font-weight: 800;
  font-style: italic;
  margin-top: 10px;
  color: #1c3180;
  line-height: 60px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  small {
    font-size: 30px;
    font-weight: 300;
  }
`

function Section9({id}) {
  return (
    <Section id={id}>
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
              <CardPriceDiscount> 4,950 </CardPriceDiscount>
              <CardPrice> 2,450 <small>THB</small> </CardPrice>
            </CardPriceWrapper>
          </Card>
          <Card>
            <CardHead> Day 2 </CardHead>
            <CardTitle> HANDS-ON </CardTitle>
            <CardSubtitle> Workshop Only (limited seat) </CardSubtitle>
            <CardPriceWrapper>
              <CardPriceDiscount> 11,950 </CardPriceDiscount>
              <CardPrice> 8,950 <small>THB</small> </CardPrice>
            </CardPriceWrapper>
          </Card>
          <Card>
            <CardTitle> FULL EXPERIENCE </CardTitle>
            <CardSubtitle> Both Conference Day 1 & Workshop Day 2 </CardSubtitle>
            <CardPriceWrapper>
              <CardPriceDiscount> 14,950 </CardPriceDiscount>
              <CardPrice> 9,950 <small>THB</small> </CardPrice>
            </CardPriceWrapper>
          </Card>
        </CardWrapper>
      </Wrapper>
    </Section>
  )
}

export default Section9

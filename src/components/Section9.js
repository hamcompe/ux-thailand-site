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
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px -16px;
`
const Card = styled.div`
  min-height: 500px;
  width: 500px;
  background: #fff;
  border-radius: 8px;
  margin: 0 16px;
  color: var(--color_blur_dark);
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
            Day 1
          </Card>
          <Card>
            Day 2
          </Card>
          <Card>
            Day 3
          </Card>
        </CardWrapper>
      </Wrapper>
    </Section>
  )
}

export default Section9

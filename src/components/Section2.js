import React from 'react'
import styled from 'react-emotion'
import Button from './Button'

const Quote = styled.blockquote`
  font-size: 42px;
  color: var(--color_blur_dark);
  text-align: center;
`
const QuoteName = styled.span`
  font-size: 12px;
  color: var(--color_grey_light);
`
const QuoteWrapper = styled.div`
  margin-bottom: 36px;
`
const Container = styled.div`
  margin: 56px auto;
  max-width: 1080px;
  text-align: center;
`
const BodyText = styled.p`
  font-size: 24px;
  color: var(--color_black);
`
const TextWrapper = styled.div`
  margin-bottom: 36px;
`
const Section = styled.section`
`

function Section2() {
  return (
    <Section>
      <Container>
        <QuoteWrapper>
          <Quote>
            “Let us take a seat for a couple of days on the shoulders of giants together.”
          </Quote>
          <QuoteName>
            — by refering to the quote to Sir Isaac Newton
          </QuoteName>
        </QuoteWrapper>
        <TextWrapper>
          <BodyText>
            <strong>
              The UX Thailand Conference
            </strong>
            {' '} is a two-day conference made up of thought-provoking presentations, practical workshops and engaging panel discussions. We’re bringing Giants from across the world who've pioneered the design and product industry.
            Be aware! there’re full of intense inspiring and upskill.
          </BodyText>
        </TextWrapper>
        <Button outline>See last year’s highlights</Button>
      </Container>
    </Section>
  )
}

export default Section2

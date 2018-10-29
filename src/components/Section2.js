import React from 'react'
import styled from 'react-emotion'
import Button from './Button'

const textSpacing = '40px'

const Quote = styled.blockquote`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  color: var(--color_blur_dark);
  text-align: center;
  line-height: 1.2;
  margin: 0;
  margin-bottom: ${textSpacing};
`
const QuoteName = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: var(--color_grey_light);
`
const QuoteWrapper = styled.div`
  margin-bottom: 36px;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 926px;
  text-align: center;
  padding: 0 var(--padding_size);
`
const BodyText = styled.p`
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_black);
`
const TextWrapper = styled.div`
  margin-bottom: ${textSpacing};
`
const Section = styled.section`
  padding: 120px 0;
`

function Section2() {
  return (
    <Section>
      <Container>
        <QuoteWrapper>
          <Quote>
            “Let us take a seat for a couple of days on the shoulders of giants together.”
          </Quote>
          <QuoteName>— by refering to the quote to Sir Isaac Newton</QuoteName>
        </QuoteWrapper>
        <TextWrapper>
          <BodyText>
            <strong>The UX Thailand Conference</strong> is a two-day conference made up of
            thought-provoking presentations, practical workshops and engaging panel discussions.
            We’re bringing Giants from across the world who’ve pioneered the design and product
            industry. Be aware! there’re full of intense inspiring and upskill.
          </BodyText>
        </TextWrapper>
        <Button outline>See last year’s highlights</Button>
      </Container>
    </Section>
  )
}

export default Section2

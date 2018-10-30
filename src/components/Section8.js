import React from 'react'
import styled from 'react-emotion'
import SpeakerCard from './SpeakerCard'

const Section = styled.section`
  background: var(--color_blur_dark);
  color: #fff;
  padding: 63px 0;
`
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
const Title = styled.p`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  line-height: 45px;
  color: var(--color_blue);
  margin-bottom: 10px;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const speaker = {
  jared: {
    time: '10:00 - 11:00',
    title: 'The Evolution of a New UX Design Resolution',
    name: 'JARED SPOOL',
    detail: 'is a Maker of Awesomeness at Center Centre/UIE and one of the leading experts in user experience. Get to know more',
  },
  dana: {
    time: '11:00 - 12:00',
    title: 'Democracy Is A Design Problem',
    name: 'DANA CHISNELL',
    detail: 'is the Co-Founder of the Center for Civic Design and founding team member of President Obama’s US Digital Service. Get to know more',
  },
  john: {
    time: '13:00 - 14:00',
    title: 'Topic is mockup now',
    name: 'JOHN CUTLER',
    detail: 'is Product Development Coach who is keenly focused on user experience and evidence-driven product development. Get to know more',
  },
}

function Section8({id}) {
  return (
    <Section id={id}>
      <Wrapper>
        <TitleWrapper>
          <Title>
            AGENDA
          </Title>
        </TitleWrapper>
        <Layout>
          <SpeakerCard speaker={speaker.jared} />
          <SpeakerCard speaker={speaker.dana} />
          <SpeakerCard speaker={speaker.john} />
        </Layout>
      </Wrapper>
    </Section>
  )
}

export default Section8

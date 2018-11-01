import React from 'react'
import styled from 'react-emotion'
import SpeakerCard, { Time } from './SpeakerCard'

const speaker = {
  jared: {
    time: '10:00 - 11:00',
    title: 'The Evolution of a New UX Design Resolution',
    name: 'JARED SPOOL',
    detail:
      'is a Maker of Awesomeness at Center Centre/UIE and one of the leading experts in user experience.',
    image: '/images/spk_JaredSpool.svg',
  },
  dana: {
    time: '11:00 - 12:00',
    title: 'Democracy Is A Design Problem',
    name: 'DANA CHISNELL',
    detail:
      'is the Co-Founder of the Center for Civic Design and founding team member of President Obama’s US Digital Service.',
    image: '/images/spk_DanaChisnell.svg',
  },
  john: {
    time: '13:00 - 14:00',
    title: 'Topic is mockup now',
    name: 'JOHN CUTLER',
    detail:
      'is Product Development Coach who is keenly focused on user experience and evidence-driven product development.',
    image: '/images/spk_JohnCutler.svg',
  },
  melissa: {
    time: '14:00 - 15:00',
    title: 'Escaping The Build Trap',
    name: 'MELISSA PERRI',
    detail:
      'is the CEO of Produx Labs; helping organisations become product-led. Melissa is currently writing a book about her experiences for O’Reilly.',
    image: '/images/spk_MelissaPerri.svg',
  },
  liam: {
    time: '15:00 - 16:00',
    title: 'Everyone Is A Designer',
    name: 'LIAM HUTCHINSON',
    detail:
      'is an Experience Design Consultant for ThoughtWorks where he helps organisations think more strategically about design.',
    image: '/images/spk_LiamHutchinson.svg',
  },
}

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

const BreakBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`

const Seperator = styled.div`
  width: 690px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(248, 248, 248, 0.2);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(248, 248, 248, 0.2);
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  color: #098bd5;
`

const Row = styled.div`
  display: flex;
`
const Tab = styled.div`
  margin: 0 8px;
  ${props => props.active
    && `
    background: hotpink;
  `};
`
const Card = styled.div`
  background: #fff;
  height: 50px;
  width: 100px;
  color: var(--color_black);
  border-radius: 4px;
`
class Tabs extends React.Component {
  state = {
    currentIndex: 0,
  }

  handleClick = (index) => {
    this.setState({ currentIndex: index })
  }

  render() {
    const {
      tabs = ['day1', 'day2'],
      body = ['content bla bla', 'day 2 content bla bla'],
    } = this.props
    const { currentIndex } = this.state

    // const Component = () => (
    //   <Row>
    //     {tabs.map((tab, index) => (
    //       <Tab active={index === currentIndex} onClick={() => this.handleClick(index)}>
    //         {tab}
    //       </Tab>
    //     ))}
    //   </Row>
    // )
    // return this.props.children({
    //   index: currentIndex,
    //   setIndex: this.handleClick,
    //   Component,
    // })
    return (
      <Row>
        {tabs.map((tab, index) => (
          <Tab active={index === currentIndex} onClick={() => this.handleClick(index)}>
            {tab}
          </Tab>
        ))}
        {body[currentIndex]}
      </Row>
    )
  }
}
function Body1() {
  return (
    <Layout>
      <SpeakerCard speaker={speaker.jared} />
      <SpeakerCard speaker={speaker.dana} />
      <BreakBox>
        <Time>12:00 - 13:00</Time>
        <Seperator>Lunch Time</Seperator>
      </BreakBox>
      <SpeakerCard speaker={speaker.john} />
      <SpeakerCard speaker={speaker.melissa} />
      <SpeakerCard speaker={speaker.liam} />
    </Layout>
  )
}
function Section8({ id }) {
  return (
    <Section id={id}>
      <Wrapper>
        <Tabs body={[<Body1 />, 'body2']} />
        {/* <Tabs>
          {({ index, Component }) => (
            <div>
              <Component />
              {index === 0 ? (
                <Layout>
                  <SpeakerCard speaker={speaker.jared} />
                  <SpeakerCard speaker={speaker.dana} />
                  <BreakBox>
                    <Time>12:00 - 13:00</Time>
                    <Seperator>Lunch Time</Seperator>
                  </BreakBox>
                  <SpeakerCard speaker={speaker.john} />
                  <SpeakerCard speaker={speaker.melissa} />
                  <SpeakerCard speaker={speaker.liam} />
                </Layout>
              ) : (
                <div>tab 2</div>
              )}
            </div>
          )}
        </Tabs> */}
        <TitleWrapper>
          <Title>AGENDA</Title>
        </TitleWrapper>
      </Wrapper>
    </Section>
  )
}

export default Section8

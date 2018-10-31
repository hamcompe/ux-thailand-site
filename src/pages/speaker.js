import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

import Layout from '../components/layout'

const Section = styled.section`
  background-image: linear-gradient(#000, var(--color_blur_dark));

  padding-top: 200px;
  padding-bottom: 100px;
  ${mq.s} {
    padding-top: 160px;
    padding-bottom: 40px;
  }
`

const Container = styled.div`
  max-width: var(--layout_width_size_large);
  margin: 0 auto;
  padding: 0 var(--padding_size);
`

const Image = styled.img`
  width: 610px;
  height: 610px;
`

const SpeakerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 65px;
`

const FirstNameTitle = styled.h1`
  font-size: 100px;
  font-weight: 900;
  font-style: italic;
  line-height: 1.1;
  color: var(--color_blue);
`
const LastNameTitle = styled(FirstNameTitle)`
  padding-left: 40px;
`

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_grey_super_light);
  width: 570px;
  margin-top: 20px;
`

const DateTime = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: rgba(232, 232, 232, 0.6);
  margin-bottom: 10px;
`

const Topic = styled.h1`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);
  line-height: 1;
  margin-bottom: 40px;
`

const Content = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: var(--color_grey_super_light);
`

const BlueContent = styled.p`
  font-size: 16px;
  font-weight: 300; 
  color: var(--color_blue);
`

const ListWrapper = styled.ul`
  list-style: circle outside none;
`

const ListItem = styled.li`
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: var(--color_grey_super_light);
`

const Speaker = () => (
  <Layout>
    <Section>
      <Container>
        <SpeakerWrapper>
          <Image src="images/spk_JaredSpool@3x.png" />
          <DetailWrapper>
            <FirstNameTitle>JARED</FirstNameTitle>
            <LastNameTitle>SPOOL</LastNameTitle>
            <Subtitle>is a Maker of Awesomeness at Center Centre/UIE and one of the leading experts in user experience.</Subtitle>
            <DateTime>23 February 2018, 9:00 - 10:30</DateTime>
            <Topic>“The Evolution of a New UX Design Resolution”</Topic>
            <Content>
              Design works on many levels. We can zoom in to the screen level, looking directly at what in the interactions on a single screen or page. We can zoom out a little to look at an entire application’s design, understanding how screens work together. Or we can pull back to an organization level, working to connect applications and other services together.
              <br />
              <br />
              Looking at design through different levels of resolution helps us answer some important questions. Is there a difference between UX and UI, and if so, how does that change how teams should operate? What is the relationship between product design and service design? How do we start preparing for what comes next?
              <br />
              <br />
              In this entertaining talk, Jared explores the relationships between these new levels of resolution. He’ll introduce you to a level of design beyond the organization level and you how we’ll need to start designing beyond organizational boundaries, and what that implies. He’ll introduce you to the pioneers of this new design area, and explain the process by which designers everywhere will need to develop their expertise.
            </Content>
            <BlueContent>Jared will show you:</BlueContent>
            <ListWrapper>
              <ListItem>Where designers fall into the dangerous trap of thinking too narrowly about their career</ListItem>
              <ListItem>How there’s still a frontier of unsolved issues that pioneering designers need to explore</ListItem>
              <ListItem>What the relationship between pioneers, settlers, and town planners are, when it comes to design craft</ListItem>
            </ListWrapper>
          </DetailWrapper>
        </SpeakerWrapper>
      </Container>
    </Section>
  </Layout>
)

export default Speaker

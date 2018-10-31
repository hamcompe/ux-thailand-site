import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

import Layout from '../components/layout'

const Section = styled.section`
  background-color: black;

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
  color: #098bd5;
`
const LastNameTitle = styled(FirstNameTitle)`
  padding-left: 40px;
`

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  color: #e8e8e8;
  width: 570px;
  margin-top: 20px;
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
          </DetailWrapper>
        </SpeakerWrapper>
      </Container>
    </Section>
  </Layout>
)

export default Speaker

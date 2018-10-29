import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

const Section = styled.section`
  padding: 80px 0;
  background: var(--color_black);
  color: #fff;
`
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--padding_size);
`
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  ${mq.s} {
    grid-template-columns: 1fr;
  }
`
const Title = styled.p`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);

  max-width: 400px;
  text-indent: -0.4em;
  margin-bottom: 96px;

  ${mq.s} {
    font-size: 32px;
    margin-bottom: 32px;
  }
`
const SubTitle = styled.p`
  font-size: 24px;
  font-style: italic;
  font-weight: 200;
  color: var(--color_blue);
  margin-bottom: 8px;

  ${mq.s} {
    font-size: 20px;
  }
`
const Body = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  color: var(--color_almost_white);

  margin-bottom: 16px;
`

function Section4() {
  return (
    <Section>
      <Container>
        <Layout>
          <div>some image here</div>
          <div>
            <Title>“Empower locally, recognised globally.”</Title>
            <SubTitle>Our Vision</SubTitle>
            <Body>
              UX Thailand begin as a series of monthly meet-ups, focused on empowering the local
              community to do great design. When we looked to push this further. The UX Thailand
              Conference was born.
            </Body>
            <Body>
              A non-profit, meaning the organisers are all volunteers, we don’t get paid. The money
              that is made is invested in further empowering the local community. We’ll use the
              revenue to provide more regular events like our monthly meetup, training courses
              throughout the year and hope to build relationships across APAC.
            </Body>
            <Body>
              With all of this, we hope for Thailand to become a globally recognised leader in
              design.
            </Body>
          </div>
        </Layout>
      </Container>
    </Section>
  )
}

export default Section4

import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  padding: 80px 0;
  background: var(--color_black);
  color: #fff;
`
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Title = styled.p`
  color: var(--color_blue);
  font-size: 36px;
  max-width: 400px;
  line-height: 1.5;
  text-indent: -0.5em;
  margin-bottom: 40px;
`
const SubTitle = styled.p`
  color: var(--color_blue);
  font-size: 24px;
  margin-bottom: 16px;
`
const Body = styled.p`
  margin-bottom: 16px;
`

function Section4() {
  return (
    <Section>
      <Wrapper>
        <Layout>
          <div>
            some image here
          </div>
          <div>
            <Title>
              “Empower locally, recognised globally.”
            </Title>
            <SubTitle>
              Our Vision
            </SubTitle>
            <Body>
              UX Thailand begin as a series of monthly meet-ups, focused on empowering the local community to do great design. When we looked to push this further. The UX Thailand Conference was born.
            </Body>
            <Body>
              A non-profit, meaning the organisers are all volunteers, we don’t get paid. The money that is made is invested in further empowering the local community. We’ll use the revenue to provide more regular events like our monthly meetup, training courses throughout the year and hope to build relationships across APAC.
            </Body>
            <Body>
              With all of this, we hope for Thailand to become a globally recognised leader in design.
            </Body>
          </div>
        </Layout>
      </Wrapper>
    </Section>
  )
}

export default Section4

import React from 'react'
import styled from 'react-emotion'

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
  font-size: 48px;
  font-weight: 200;
  font-style: italic;
  line-height: 45px;
  color: var(--color_blue);
  margin-bottom: 10px;
`
const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
  color: #e8e8e8;
`
const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  color: var(--color_blue);
  text-transform: uppercase;
`
const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  width: 100%;
  color: #e8e8e8;
`

const SpeakerContentBox = styled.div`
  text-align: center;
  width: 335px;
`
const SpeakerImage = styled.div`
  width: 335px;
  height: 335px;
  background-image: linear-gradient(to top right, var(--color_blue_light), var(--color_blue));
`
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Section8() {
  return (
    <Section>
      <Wrapper>
        <TitleWrapper>
          <Title>
            OUR SPEAKERS
          </Title>
          <SubTitle>
            Joined thought-leaders from across the globe
          </SubTitle>
        </TitleWrapper>
        <Layout>
          <SpeakerContentBox>
            <SpeakerImage />
            <Name>
              Jared Spool
            </Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet repudiandae reprehenderit assumenda consequuntur aliquid, delectus, maxime sequi tempora, possimus ex natus distinctio velit consequatur. Ipsam reiciendis suscipit non id.
            </Description>
          </SpeakerContentBox>
          <SpeakerContentBox>
            <SpeakerImage />
            <Name>
              Jared Spool
            </Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet repudiandae reprehenderit assumenda consequuntur aliquid, delectus, maxime sequi tempora, possimus ex natus distinctio velit consequatur. Ipsam reiciendis suscipit non id.
            </Description>
          </SpeakerContentBox>
          <SpeakerContentBox>
            <SpeakerImage />
            <Name>
              Jared Spool
            </Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet repudiandae reprehenderit assumenda consequuntur aliquid, delectus, maxime sequi tempora, possimus ex natus distinctio velit consequatur. Ipsam reiciendis suscipit non id.
            </Description>
          </SpeakerContentBox>
          <SpeakerContentBox>
            <SpeakerImage />
            <Name>
              Jared Spool
            </Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet repudiandae reprehenderit assumenda consequuntur aliquid, delectus, maxime sequi tempora, possimus ex natus distinctio velit consequatur. Ipsam reiciendis suscipit non id.
            </Description>
          </SpeakerContentBox>
          <SpeakerContentBox>
            <SpeakerImage />
            <Name>
              Jared Spool
            </Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet repudiandae reprehenderit assumenda consequuntur aliquid, delectus, maxime sequi tempora, possimus ex natus distinctio velit consequatur. Ipsam reiciendis suscipit non id.
            </Description>
          </SpeakerContentBox>
          <SpeakerContentBox>
            <SpeakerImage />
            <Name>
              Jared Spool
            </Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet repudiandae reprehenderit assumenda consequuntur aliquid, delectus, maxime sequi tempora, possimus ex natus distinctio velit consequatur. Ipsam reiciendis suscipit non id.
            </Description>
          </SpeakerContentBox>
        </Layout>
      </Wrapper>
    </Section>
  )
}

export default Section8

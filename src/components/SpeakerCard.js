import React from 'react'
import styled from 'react-emotion'

const SpeakerContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`

export const Time = styled.p`
  font-weight: 400;
  font-style: italic;
  font-size: 24px;
  color: #098bd5;
  margin-top: 20px;
`

const SpeakerImage = styled.img`
  width: 208px;
  height: 208px;
  margin-right: 40px;
  margin-left: 40px;
  background-image: linear-gradient(to top right, var(--color_blue_light), var(--color_blue));
`

const SpeakerDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 430px;
  margin-top: 10px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: normal;
  color: #098bd5;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`
const Name = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  color: #098bd5;
  line-height: 2.2;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`

const Detail = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #e8e8e8;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`

function SpeakerCard({ speaker }) {
  return (
    <SpeakerContentBox>
      <Time>{speaker.time}</Time>
      <SpeakerImage src={speaker.image} alt="" />
      <SpeakerDetailWrapper>
        <Title>{speaker.title}</Title>
        <Name>{speaker.name}</Name>
        <Detail>{speaker.detail}</Detail>
      </SpeakerDetailWrapper>
    </SpeakerContentBox>
  )
}

export default SpeakerCard

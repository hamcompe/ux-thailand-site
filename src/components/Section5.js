import React from 'react'
import styled from 'react-emotion'
import Button from './Button'
import mq, { breakpoints } from '../../utils/media-query'

const Section = styled.section`
  padding: 80px 0;
  min-height: 500px;
  background: #000;
  color: var(--color_grey_super_light);
`
const Container = styled.div`
  padding: 0 var(--padding_size);
`
const Title = styled.h3`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);
  margin: 0;
  strong {
    font-size: 48px;
    font-weight: 800;
  }
`
const SubTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
`
const HeaderWrapper = styled.header`
  text-align: center;
`
const FooterWrapper = styled.footer``
const Body = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  margin: 0 16px;
`
// const gridGap = '16px'
// const SponsorWrapper = styled.div`
//   display: grid;
//   grid-gap: ${gridGap};
//   margin: 48px 0;
// `
// const SponsorGoldRow = styled.div`
//   display: grid;
//   grid-gap: ${gridGap};
//   grid-template-columns: repeat(2, 1fr);
//   margin: 0 auto;
//
//   max-width: 860px;
//   width: 100%;
// `
// const SponsorSilverRow = styled.div`
//   display: grid;
//   grid-gap: ${gridGap};
//   grid-template-columns: repeat(4, 1fr);
//   margin: 0 auto;
//
//   max-width: 1080px;
//   width: 100%;
// `
// const SponsorBronzeRow = styled.div`
//   display: grid;
//   grid-gap: ${gridGap};
//   grid-template-columns: repeat(5, 1fr);
//   margin: 0 auto;
//
//   max-width: 1080px;
//   width: 100%;
// `
// const SponsorTemplateBox = styled.div`
//   width: 100%;
//   height: 100%;
//   min-height: 120px;
//   border: 1px solid #fff;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
// Temporary
// function SponsorTemplate() {
//   return <SponsorTemplateBox>Spopnsor</SponsorTemplateBox>
// }
// const renderByNum = num => Array.from({ length: num })

// Haven't use, but it's initial template
// function SponsorList() {
//   return (
//     <SponsorWrapper>
//       <SponsorGoldRow>
//         {renderByNum(2).map(() => (
//           <SponsorTemplate />
//         ))}
//       </SponsorGoldRow>
//       <SponsorSilverRow>
//         {renderByNum(4).map(() => (
//           <SponsorTemplate />
//         ))}
//       </SponsorSilverRow>
//       <SponsorBronzeRow>
//         {renderByNum(5).map(() => (
//           <SponsorTemplate />
//         ))}
//       </SponsorBronzeRow>
//     </SponsorWrapper>
//   )
// }

const SponsorContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
`
const SponsorRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 80px auto;
  grid-gap: 24px;
  align-items: center;
  justify-content: center;

  ${mq.s} {
    grid-template-columns: 1fr;
  }
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  max-width: 100%;
  width: 100%;
`
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq.l} {
    flex-direction: column;
  }
`
const Li = styled.li`
  margin: 8px 0;
  ${mq.l} {
    width: 100%;
    text-align: center;
  }
`
const stretchSize = `${breakpoints.l}px`
function Section5({ id }) {
  return (
    <Section id={id}>
      <Container>
        <HeaderWrapper>
          <Title>
            A big <strong>thank you</strong> for support
          </Title>
          <SubTitle>Our partners in achieving our vision</SubTitle>
        </HeaderWrapper>
        <SponsorContainer>
          <SponsorRow>
            <ImageWrapper>
              <Image src="/images/bridqeasia.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/thoughtworks.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sketch.svg" alt="" align="middle" />
            </ImageWrapper>
          </SponsorRow>
        </SponsorContainer>
        <FooterWrapper>
          <Ul>
            <Li>
              <Body>How to be apart of this UXTH Conference 2019,</Body>
            </Li>
            <Li>
              <Button stretchOn={stretchSize}>Contact us</Button>
            </Li>
            <Li>
              <Body>or getting more detail</Body>
            </Li>
            <Li>
              <Button outline stretchOn={stretchSize}>
                Download sponsorship.pdf
              </Button>
            </Li>
          </Ul>
        </FooterWrapper>
      </Container>
    </Section>
  )
}

export default Section5

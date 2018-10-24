import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  min-height: 400px;
  background-image: linear-gradient(#000, var(--color_blur_dark));
  color: #fff;
}
`

function Section6() {
  return (
    <Section>
      Content here
    </Section>
  )
}

export default Section6

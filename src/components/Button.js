import styled, { css } from 'react-emotion'

const PrimaryStyle = css`
  font-weight: 500;
  background: var(--color_blue);
  color: #fff;
  text-transform: uppercase;
`
const OutlineStyle = css`
  background: transparent;
  color: var(--color_blue);
`

const ButtonStyle = ({outline}) => css`
  min-width: 120px;
  border-radius: 25px;
  padding: 8px 24px;
  border: 1px solid var(--color_blue);
  ${outline ? OutlineStyle : PrimaryStyle};
`

const Button = styled.button`
  ${ButtonStyle}
`

export default Button

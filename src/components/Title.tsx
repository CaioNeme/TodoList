import styled from "styled-components"

export default function Title() {
  return (
    <TitleStyle>TODO LIST</TitleStyle>
  )
}
const TitleStyle = styled.h1`
  color: #000000;
  font-size: 26px;
  font-family: 'Kanit';
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
`

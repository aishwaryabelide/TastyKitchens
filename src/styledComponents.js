import styled from 'styled-components'

export const Title = styled.h1`
  font-family: DM Sans;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: ${props => props.align};
  color: #f7931e;

  @media screen and (max-width: 768px) {
    display: ${props => props.display};
    font-size: 14px;
    padding: 10px;
  }
`

export const Heading = styled.h1`
  font-family: DM Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (max-width: 768px) {
    text-align: left;
    font-size: 24px;
    padding-left: 10px;
    margin-top: 0px;
    padding-top: 0px;
  }
`

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

import React, { FC } from 'react'
import styled from 'styled-components'

export type Props = {
  comment: string
}

const Balloon: FC<Props> = ({ comment }) => <BalloonArea>{comment}</BalloonArea>

export default Balloon

const BalloonArea = styled.p`
  display: none;
  background-color: #4b4b4b;
  position: absolute;
  top: 30px;
  left: 280px;
  width: 60px;
  height: 15px;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.875rem;
  color: #fff;

  &:after {
    position: absolute;
    width: 0;
    height: 0;
    right: -10px;
    bottom: 5px;
    margin-left: 10px;
    border: solid transparent;
    /* border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 50px solid #4B4B4B; */
    border-top-color: #4b4b4b;
    border-width: 10px;
    pointer-events: none;
    content: ' ';
  }
`

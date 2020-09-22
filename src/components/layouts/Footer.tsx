import React, { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  return <FooterArea>©️ 2020 おおまか家計簿</FooterArea>
}

const FooterArea = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #efe2ff;
  font-family: 'PingFang HK', sans-serif;
  color: #272727;
  text-align: center;
  line-height: 60px;
  box-sizing: border-box;
`

export default Footer

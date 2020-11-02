import React, { FC, useState } from 'react'
import styled from 'styled-components'
import LabelCategory from '@/components/atoms/LabelCategory'
import EditIcon from '@/components/atoms/EditIcon'
import DeleteIcon from '@/components/atoms/DeleteIcon'

export type Props = {
  id: number
  money: number
  img_file: string
  color_type: number
  category_name: string
}

export type OnError = {
  src: string
  errored: boolean
}

const DetailList: FC<Props> = ({
  id,
  money,
  img_file,
  color_type,
  category_name,
}) => {
  const [srcState, setSrcState] = useState<OnError>({
    src: img_file,
    errored: false,
  })

  /**
   * 画像リンク切れの際の処理
   * NOTE: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
   */
  const onError = () => {
    if (!srcState.errored) {
      setSrcState({
        src: '/no_image.png',
        errored: false,
      })
    }
  }

  return (
    <_List>
      <_Block>
        <_Image src={srcState.src} onError={onError} />
      </_Block>
      <_MoneyBlock>
        <LabelCategory size={80} name={category_name} colorType={color_type} />
        <_Money>¥{money}</_Money>
      </_MoneyBlock>
      <_Block>
        <_EditButtonBlock>
          <EditIcon id={id} size={35} submit={() => {}} />
        </_EditButtonBlock>
        <_DeleteButtonBlock>
          <DeleteIcon id={id} size={35} submit={() => {}} />
        </_DeleteButtonBlock>
      </_Block>
    </_List>
  )
}

export default DetailList

const _List = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid #707070;
  &:last-child {
    border-bottom: none;
  }
`

const _Block = styled.div`
  width: 33%;
`

const _MoneyBlock = styled.div`
  width: 33%;
  div:first-child {
    margin: 0 auto;
  }
`

const _Image = styled.img`
  cursor: pointer;
  display: block;
  margin: 5px auto;
  height: 90%;
  object-fit: contain;
`

const _Money = styled.p`
  margin: 15px auto;
  width: 80%;
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Tekton Pro', sans-serif;
`

const _EditButtonBlock = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 40%;
  line-height: 56px;
  div:first-child {
    margin-top: 10px;
    margin-left: 3px;
  }
`

const _DeleteButtonBlock = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 40%;
  line-height: 56px;
  div:first-child {
    margin-top: 5px;
  }
`

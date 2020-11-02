import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'
import useDetail from '@/contexts/detail'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import ListArea from '@/components/organisms/common/ListArea'
import DetailList from '@/components/molcules/detail/DetailList'

const ShowDetailList: FC = () => {
  const { details } = useDetail()
  return (
    <ContentsForm>
      <FormTitle title="金額一覧" space="sm" />
      {details && details.length !== 0 && details[0].id !== 0 && (
        <ListArea>
          {details.map((detail) => (
            <DetailList
              key={detail.id}
              id={detail.id}
              money={detail.money}
              img_file={detail.img_file}
              color_type={detail.color_type}
              category_name={detail.category_name}
            >
              aaa
            </DetailList>
          ))}
        </ListArea>
      )}
    </ContentsForm>
  )
}

export default ShowDetailList

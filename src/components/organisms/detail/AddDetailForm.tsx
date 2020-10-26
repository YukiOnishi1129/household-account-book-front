import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'
import useDetail from '@/contexts/detail'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'

const AddDetailFrom: FC = () => {
  return (
    <ContentsForm>
      <FormTitle title="金額入力" space="sm" />
    </ContentsForm>
  )
}

export default AddDetailFrom

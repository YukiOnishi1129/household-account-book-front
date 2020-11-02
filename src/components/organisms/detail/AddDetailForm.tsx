import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'
import { DetailValidError } from '@/types/errors'
import useDetail from '@/contexts/detail'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import DetailForm from '@/components/molcules/detail/DetailForm'
import { getEnabledCategories } from 'trace_events'

const AddDetailFrom: FC = () => {
  const { categories } = useDetail()
  const [categoryId, setCategpryId] = useState(0)
  const [money, setMoney] = useState<string | number>('')
  const [imgFile, setImgFile] = useState('')
  const [detailError, setDetailError] = useState<DetailValidError>({
    categoryId: '',
    money: '',
    imgFile: '',
  })
  return (
    <ContentsForm>
      <FormTitle title="金額入力" space="sm" />
      <DetailForm
        status={LinkStatus.REGISTER}
        categoryId={categoryId}
        money={money}
        imgFile={imgFile}
        categories={categories}
        setCategpryId={setCategpryId}
        setMoney={setMoney}
        detailError={detailError}
        submit={() => {}}
      />
    </ContentsForm>
  )
}

export default AddDetailFrom

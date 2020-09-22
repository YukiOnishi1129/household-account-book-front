import React, { FC, useState } from 'react'
import styled from 'styled-components'
import usePartner from '@/contexts/partner'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import ListArea from '@/components/organisms/common/ListArea'
import PartnerList from '@/components/molcules/partner/PartnerList'
import FormTitle from '@/components/atoms/FormTitle'

const ShowPartnerList: FC = () => {
  const { partners, deletePartner } = usePartner()

  /**
   * パートナー削除処理
   * @param id
   */
  const handleSubmitDelete = async (id: number) => {
    await deletePartner(id)
  }

  return (
    <ContentsForm>
      <FormTitle title="共有パートナー一覧" space="sm" />
      <ListArea>
        {partners.map((partner) => (
          <PartnerList
            key={partner.id}
            id={partner.id}
            name={partner.name}
            email={partner.email}
            submit={handleSubmitDelete}
          />
        ))}
      </ListArea>
    </ContentsForm>
  )
}

export default ShowPartnerList

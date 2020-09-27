import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import usePartner from '@/contexts/partner'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import ListArea from '@/components/organisms/common/ListArea'
import PartnerList from '@/components/molcules/partner/PartnerList'
import FormTitle from '@/components/atoms/FormTitle'
import SubmitButton from '@/components/atoms/SubmitButton'
import { LinkStatus } from '@/utils/consts'

const ShowPartnerList: FC = () => {
  const { partners, deletePartner } = usePartner()
  const [isOpen, setIsOpen] = useState(false)
  const [targetId, setTatgetId] = useState(0)
  const [targetName, setTatgetName] = useState('')
  const [targetMail, setTatgetMail] = useState('')

  const openModal = (id: number, name: string, email: string): void => {
    setTatgetId(id)
    setTatgetName(name)
    setTatgetMail(email)
    setIsOpen(true)
  }

  const toggleModal = (): void => {
    setTatgetId(0)
    setTatgetName('')
    setTatgetMail('')
    setIsOpen(false)
  }

  /**
   * パートナー削除処理
   * @param id
   */
  const handleSubmitDelete = async (id: number): Promise<void> => {
    await deletePartner(id)
    toggleModal()
  }

  return (
    <>
      <ContentsForm>
        <FormTitle title="共有パートナー一覧" space="sm" />
        {partners.length !== 0 && partners[0].id !== 0 && (
          <ListArea>
            {partners.map((partner) => (
              <PartnerList
                key={partner.id}
                id={partner.id}
                name={partner.name}
                email={partner.email}
                submit={openModal}
              />
            ))}
          </ListArea>
        )}
      </ContentsForm>
      {/* 削除モーダル */}
      <DeletePartnerModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalTitle>パートナーを削除しますか？</ModalTitle>
        <FormGroup>
          <FormItem>
            <ItemName>お名前</ItemName>
            <ItemValue>{targetName}</ItemValue>
          </FormItem>
          <FormItem>
            <ItemName>メールアドレス</ItemName>
            <ItemValue>{targetMail}</ItemValue>
          </FormItem>
        </FormGroup>
        <ButtonGroup>
          <SubmitButton
            status={LinkStatus.CANCEL}
            size="md"
            submit={() => {
              toggleModal()
            }}
          >
            削除
          </SubmitButton>
          <SubmitButton
            status={LinkStatus.DELETE}
            size="md"
            submit={() => {
              handleSubmitDelete(targetId)
            }}
          >
            削除
          </SubmitButton>
        </ButtonGroup>
      </DeletePartnerModal>
    </>
  )
}

export default ShowPartnerList

const DeletePartnerModal = Modal.styled`
  padding: 60px;
  box-sizing: border-box;
  border-radius: 30px;
  width: 30rem;
  min-height: 20rem;
  background-color: #FAEAF8;
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #d163a2;
`

const FormGroup = styled.div`
  /* padding: 30px; */
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
`

const FormItem = styled.div`
  display: flex;

  &:first-child {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const ItemName = styled.p`
  width: 180px;
  font-size: 1.25rem;
  font-weight: bold;
`

const ItemValue = styled.p`
  font-size: 1.25rem;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`

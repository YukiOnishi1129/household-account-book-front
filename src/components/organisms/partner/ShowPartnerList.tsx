import React, { FC, useState } from 'react'
import usePartner from '@/contexts/partner'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import ListArea from '@/components/organisms/common/ListArea'
import PartnerList from '@/components/molcules/partner/PartnerList'
import FormTitle from '@/components/atoms/FormTitle'
import DeletePartnerDialog from '@/components/dialogs/partner/DeletePartnerDialog'

const ShowPartnerList: FC = () => {
  const { partners, deletePartner } = usePartner()
  const [isOpen, setIsOpen] = useState(false)
  const [targetId, setTatgetId] = useState(0)
  const [targetName, setTatgetName] = useState('')
  const [targetMail, setTatgetMail] = useState('')

  /**
   * ダイアログを開く処理
   * @param id
   * @param name
   * @param email
   */
  const openModal = (id: number, name: string, email: string): void => {
    setTatgetId(id)
    setTatgetName(name)
    setTatgetMail(email)
    setIsOpen(true)
  }

  /**
   * ダイアログを閉じる処理
   */
  const closeModal = (): void => {
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
    closeModal()
  }

  return (
    <>
      <ContentsForm>
        <FormTitle title="共有パートナー一覧" space="sm" />
        {partners && partners.length !== 0 && partners[0].id !== 0 && (
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
      <DeletePartnerDialog
        isOpen={isOpen}
        id={targetId}
        name={targetName}
        email={targetMail}
        submit={handleSubmitDelete}
        close={closeModal}
      />
    </>
  )
}

export default ShowPartnerList

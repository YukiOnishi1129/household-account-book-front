import React, { ReactNode, FC, useState, useContext, useEffect } from 'react'
import { CategoryContext } from '@/utils/contexts'
import ApiClient from '@/network/ApiClient'
import { initialCategories } from '@/utils/inits'
import { Category, RequestCategory } from '@/types/api'

/**
 * CategoryProvider
 * @param param0
 */
export const CategoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState(initialCategories)
  const [name, setName] = useState('')
  const [colorType, setColorType] = useState(0)

  useEffect(() => {
    let unmounted = false
    getCategories(unmounted)

    const cleanup = () => {
      unmounted = true
    }

    return cleanup
  }, [])

  /**
   * カテゴリー一覧取得
   * @param unmounted
   */
  const getCategories = async (unmounted: boolean) => {
    try {
      const res = await ApiClient.category.getCategories()
      // アンマウントされていなければ、stateを更新
      if (!unmounted) setCategories(res.data)
    } catch (error) {}
  }

  /**
   * カテゴリー登録
   * @param requestData
   */
  const addCategories = async (requestData: RequestCategory) => {
    try {
      const res = await ApiClient.category.addCategory(requestData)
      setCategories(categories.concat(res.data))
    } catch (error) {}
  }

  /**
   * カテゴリー編集
   * @param id
   * @param requestData
   */
  const editCategory = async (
    id: Category['id'],
    requestData: RequestCategory
  ) => {
    try {
      const res = await ApiClient.category.editCategory(id, requestData)
      const newCategories = categories.map((category) => {
        if (category.id === id) {
          return Object.assign({}, category, {
            category_name: res.data.category_name,
            color_type: res.data.color_type,
          })
        }
        return category
      })
      setCategories(newCategories)
    } catch (error) {}
  }

  /**
   * カテゴリー削除
   * @param id
   */
  const deleteCategory = async (id: Category['id']) => {
    try {
      const res = await ApiClient.category.deleteCategory(id)
      if (res.status === 204) {
        const newCategories = categories.filter((c) => {
          return c.id !== id
        })
        setCategories(newCategories)
      }
    } catch (error) {}
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        name,
        colorType,
        setName,
        setColorType,
        addCategories,
        editCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

/**
 * CategoryContext
 */
const useCategory = () => {
  const context = useContext(CategoryContext)
  return context
}

export default useCategory

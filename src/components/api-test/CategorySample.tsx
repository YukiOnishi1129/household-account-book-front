import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Category, RequestCategory } from '../../types/api'
import ApiClient from '../../network/ApiClient'
import styled from 'styled-components'
import CategoryList from './CategoryList'
import StatusCode from './StatusCode'

const CategorySample: FC = () => {
  const [getCategoies, setGetCategories] = useState(initailCategories)
  const [addCategory, setAddCategory] = useState(initialCategory)
  const [editCategory, setEditCategory] = useState(initialCategory)
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(0)
  const router = useRouter()
  useEffect(() => {
    let unmounted = false
    const getCategoryFunc = async () => {
      try {
        const res = await ApiClient.category.getCategories()
        if (!unmounted) {
          setGetCategories(res.data)
        }
      } catch (error) {
        router.push('/api-test')
      }
    }
    const addCategoryFunc = async () => {
      try {
        const res = await ApiClient.category.addCategory(
          requestCategoryParameter
        )
        if (!unmounted) {
          setAddCategory(res.data)
        }
      } catch (error) {
        router.push('/api-test')
      }
    }
    const editCategoryFunc = async () => {
      try {
        const res = await ApiClient.category.editCategory(
          1,
          requestCategoryParameter
        )
        if (!unmounted) {
          setEditCategory(res.data)
        }
      } catch (error) {
        router.push('/api-test')
      }
    }
    const deleteCategoryFunc = async () => {
      try {
        const res = await ApiClient.category.deleteCategory(1)
        if (!unmounted) {
          setDeleteCategoryStatus(res.status)
        }
      } catch (error) {
        router.push('/api-test')
      }
    }
    getCategoryFunc()
    addCategoryFunc()
    editCategoryFunc()
    deleteCategoryFunc()
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <>
      <h1>CategorySample</h1>
      <h2>No.15: get category</h2>
      <CategoryDiv>
        {getCategoies.map((category, index) => {
          return <CategoryList key={index} category={category} />
        })}
      </CategoryDiv>
      <h2>No.16: add category</h2>
      {addCategory && <CategoryList category={addCategory} />}
      <h2>No.17: edit category</h2>
      {editCategory && <CategoryList category={editCategory} />}
      <h2>No.18: delete category status</h2>
      <StatusCode code={deleteCategoryStatus} />
    </>
  )
}

export default CategorySample

export const initailCategories: Category[] = [
  {
    id: 0,
    category_name: '',
    color_type: 0,
  },
]

export const initialCategory: Category = {
  id: 0,
  category_name: '',
  color_type: 0,
}

export const requestCategoryParameter: RequestCategory = {
  category_name: '',
  color_type: 0,
}

export const CategoryDiv = styled.div`
  display: flex;
`

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import BeforeLink, { Props as BeforeLinkProps } from './BeforeLink'
import { AfterLoginPage } from '@/utils/consts'

export default {
  title: 'atoms/Link',
  components: BeforeLink,
} as Meta

const Template: Story<BeforeLinkProps> = (args) => <BeforeLink {...args} />

export const DetailLink = Template.bind({})
DetailLink.args = { nowPage: AfterLoginPage.DETAIL, date: '2020-09-10' }
export const CategoryLink = Template.bind({})
CategoryLink.args = { nowPage: AfterLoginPage.CATEGORY, date: '2020-09-10' }

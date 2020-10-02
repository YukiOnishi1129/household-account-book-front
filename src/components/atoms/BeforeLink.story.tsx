import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import BeforeLink, { Props as BeforeLinkProps } from './BeforeLink'
import { AfterLoginPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

export default {
  title: 'atoms/BeforeLink',
  components: BeforeLink,
} as Meta

const Template: Story<BeforeLinkProps> = (args) => <BeforeLink {...args} />

export const DetailLink = Template.bind({})
DetailLink.args = { nowPage: AfterLoginPage.DETAIL, date: CurrentDate() }
export const CategoryLink = Template.bind({})
CategoryLink.args = { nowPage: AfterLoginPage.CATEGORY, date: CurrentDate() }

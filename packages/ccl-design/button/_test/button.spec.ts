import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { CButton } from '../index'

describe('CButton', () => {
  test('class', async () => {
    const wrapper = mount(CButton, {
      props: {
        type: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('c-button')
    expect(wrapper.classes()).toContain('c-button--secondary')
    await wrapper.setProps({ status: 'success' })
    expect(wrapper.classes()).toContain('c-button--success')
  })
  test('click', async () => {
    const wrapper = mount(CButton, {
      props: {
        disabled: true,
      },
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

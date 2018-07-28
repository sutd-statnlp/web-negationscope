import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import OriginStore from '@/store'
import Form from './Form'
import filter from '@/filter'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(filter)
localVue.use(Vuex)

describe('Form.vue', () => {
  let store
  beforeEach(() => {
    store = {...OriginStore}
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(Form, {
      store,
      localVue
    })
    expect(wrapper).not.toEqual(null)
  })
})

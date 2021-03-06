import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import OriginStore from '@/store'
import HomePage from './HomePage'
import filter from '@/filter'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(filter)
localVue.use(Vuex)

describe('HomePage.vue', () => {
  let store
  beforeEach(() => {
    store = {...OriginStore}
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(HomePage, {
      store,
      localVue
    })
    expect(wrapper)
      .not.toEqual(null)
  })
})

import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MockStore from '@/../test/unit/mock/store'
import OriginStore from '@/store'
import Panel from './Panel'
import filter from '@/filter'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(filter)
localVue.use(Vuex)

describe('Panel.vue with MockStore', () => {
  let store
  beforeEach(() => {
    store = {...MockStore}
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(Panel, {
      store,
      localVue
    })
    expect(wrapper).not.toEqual(null)
    expect(wrapper.html()).not.toEqual(null)
  })
})

describe('Panel.vue with OriginStore', () => {
  let store
  beforeEach(() => {
    store = {...OriginStore}
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(Panel, {
      store,
      localVue
    })
    expect(wrapper).not.toEqual(null)
    expect(wrapper.html()).not.toEqual(null)
  })
})

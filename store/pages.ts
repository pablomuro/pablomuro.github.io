import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  title: ''
})

export type PageState = ReturnType<typeof state>

export const getters: GetterTree<PageState, PageState> = {
  title: state => state.title,
}

export const mutations: MutationTree<PageState> = {
  CHANGE_TITLE: (state, newTitle: string) => {
    state.title = newTitle
  },
}

export const actions: ActionTree<PageState, PageState> = {
  changeTitle({ commit }, title) {
    commit('CHANGE_TITLE', title)
  },
  clearTitle({ commit }) {
    commit('CHANGE_TITLE', null)
  }
}

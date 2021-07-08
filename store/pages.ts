import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  title: ''
})

export type PageState = ReturnType<typeof state>

export const getters: GetterTree<PageState, PageState> = {
  title: state => state.title,
}

export const mutations: MutationTree<PageState> = {
  changeTitle: (state, newTitle: string) => {
    state.title = newTitle
  },
}

export const actions: ActionTree<PageState, PageState> = {
  changeTitle({ commit }, title) {
    commit('changeTitle', title)
  },
  clearTitle({ commit }) {
    commit('changeTitle', null)
  }
}

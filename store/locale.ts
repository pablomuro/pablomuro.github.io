import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  lang: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  lang: _state => _state.lang,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_LAN: (_state, newLang: string) => {
    _state.lang = newLang
  },
}

export const actions: ActionTree<RootState, RootState> = {
  change({ commit }, lang) {
    commit('CHANGE_LAN', lang)
  },
}

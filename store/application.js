export const state = () => ({
  curStep: 1,
  allStep: 3,
})

export const actions = {
  nextStep({ commit }, step) {
    commit('nextStep', step)
  }
}

export const mutations = {
  nextStep(state, curStep) {
    if (state.curStep < state.allStep) {
      state.curStep = curStep + 1
    }
  }
}

export const state = () => ({
  curStep: 1,
  allStep: 4,
  submissionId: ''
})

export const actions = {
  pushStep({ commit }, submissionId) {
    commit('pushStep', submissionId)
  },

  nextStep({ commit }, step) {
    commit('nextStep', step)
  }
}

export const mutations = {
  pushStep(state, setData) {
    state.submissionId = setData
  },
  nextStep(state, curStep) {
    if (state.curStep < state.allStep) {
      state.curStep = curStep + 1
    } else {
      state.curStep = 1
    }
  }
}

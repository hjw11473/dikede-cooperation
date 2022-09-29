import { LOGINAPI, VerificationCodeAPI } from '@/api'
const getDefaultState = () => {
  return {
    token: null,
    Verifica: '',
    tokenTime:0
  }
}

const state = getDefaultState()

const mutations = {
  // token令牌
  SET_TOKEN(state, token) {
    state.token = token
  },
  // 验证码
  SET_VERIFICA(state, Verifica) {
    state.Verifica = Verifica
  },
  // token令牌计时器
  SET_TOKENTIME: (state, tokenTime) => {
    state.tokenTime = tokenTime
  },
}

const actions = {
  // 登录请求
  async loginAction({ commit }, loginData) {
      const data = await LOGINAPI(loginData)
      // console.log(data)
      commit('SET_TOKEN', data)
      commit('SET_TOKENTIME', new Date().getTime())
  },
  // 验证码请求
  async getCodeAPI({ commit }, Verifica) {
    try {
      const data = await VerificationCodeAPI(Verifica)
      console.log(data)
      commit('SET_VERIFICA', data)
    } catch (error) {
      console.log(error);
    }
  },
  emptytoken({commit}) {
    commit('SET_TOKEN')
    commit('SET_USERINFO')
    // commit('SET_TOKENTIME')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


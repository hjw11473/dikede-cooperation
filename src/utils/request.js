// import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const request = axios.create({
  baseURl: process.env.VUE_APP_BASE_API,
  timeout: 5000
})



request.interceptors.request.use(config => {
  // console.log(config);
  console.log(store.getters.token);
  if (store.getters.token) {
    // 时间2 - 时间1 > token超时的时间 ==> token登录失效
    // if (checkTimeout()) {
    //   store.dispatch('user/emptytoken')
    //   router.push('/login')
    //   return Promise.reject(new Error('token 超时'))
    // } 
    config.headers.Authorization = store.getters.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }
    Message.error(response.data)
    return Promise.reject(response.data)
  },
  error => {
    Message.error(error.message)

    throw Promise.reject(error)
  }
)

export default request


// import axios from 'axios'
// import store from '@/store'
// import router from '@/router'
// import { Message } from 'element-ui'

// /**
//  * 超时的数据处理
//  */
// const timeOut = 6000000
// const IsCheckTimeOut = () => {
//   const currentTime = +new Date()
//   console.log(currentTime)
//   const timeStamp = (currentTime - store.getters.loginTime) / 1000
//   return timeStamp > timeOut
// }
// const request = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   timeout: 5000 // request timeout
// })

// // 请求拦截器
// request.interceptors.request.use(config => {
//   if (store.getters.token) {
//     if (!IsCheckTimeOut()) {
//       store.dispatch('user/logout')
//       router.push('/login')
//       Message.error('token 超时')
//       return Promise.reject(new Error('token 超时'))
//     }
//     // 有需要时可将下面的代码解开
//     // config.headers.Authorization = `Bearer ${store.getters.token}`
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })
// export default request

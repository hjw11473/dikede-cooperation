import request from '@/utils/request'

// 登录接口
export function LOGINAPI(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}

// 获取验证码接口
export function VerificationCodeAPI(arr) {
  return request({
    url: `/api/user-service/user/imageCode/${arr}`,
    responseType: 'blob'
  })
}

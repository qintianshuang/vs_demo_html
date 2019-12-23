export default {
  /*
  *登录，注册功能
  */
  manage: {
    register: '/manage/company/register', // 注册接口
    login: '/manage/company/login', // 登录
    logout: '/manage/company/loginOut' // 退出
  },
  /***
   * 用户登录验证
   */
  pwd: {
    sendEmail: '/manage/user/sendEmail',// 获取邮件
    resetPwd: '/manage/user/passwordReset'// 获取验证码
  },
  /***
   * 获取用户信息
   */
  employee: {
    queryEmployeeByName: '/employee/queryEmployeeByName'
  }
}
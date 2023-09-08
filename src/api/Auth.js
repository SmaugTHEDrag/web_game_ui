import apiService from "../page/utils/request.service"

export const loginApi = async ({username, password}) => {
  return await apiService()({
    url: '/api/v1/accounts/login',
    method: "post",
    data: {
      login_name: username,
      password,
    }
  }).then((res) => res.data)
}

export const signUpApi = async ({username, email, password}) => {
  return await apiService()({
    url: '/api/v1/accounts',
    method: "post",
    data: {
      login_name: username,
      email,
      password,
    }
  }).then((res) => res.data)
}
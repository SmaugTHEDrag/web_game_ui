import axios from "axios"
import { API_ROOT } from "./constants"
import { getToken } from "./cookies";
import { logout } from "./common";
import store from './../../container/store';
import { LOADING } from "../../container/Loading/constants";

const apiService = () => {
	const configOption = {
		baseURL: API_ROOT,
		timeout: 5000,
	}
	const instance = axios.create(configOption)

	instance.interceptors.request.use(
		(config) => {
			store.dispatch({ type: LOADING.LOADING, payload: true })

			const token = getToken()
			if (token && config.headers) {
				config.headers["access_token"] = token
				config.headers["Accept"] = "application/json"
				config.headers["Content-Type"] = "application/json"
			}
			return config
		},
		(err) => {
			Promise.reject(err)
		}
	)
	instance.interceptors.response.use(
		(res) => {
			store.dispatch({ type: LOADING.LOADING, payload: false })
			return res
		},
		(err) => {
			console.log(err)
			if (err.response.data.error === "verify_token_fail") logout()
			if (err.response.data.error === "wrong_user") logout()
			store.dispatch({ type: LOADING.LOADING, payload: false })

			return Promise.reject(err)
		}
	)
	return instance
}

export default apiService

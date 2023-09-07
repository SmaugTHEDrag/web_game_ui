import Cookies from "js-cookie"

const logout = () => {
	Cookies.remove("token", { path: "/" })
	Cookies.remove("username", { path: "/" })

	window.location.href = "/"
}

export {
  logout
}
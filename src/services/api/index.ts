import axios,{AxiosError,AxiosInstance} from "axios";

export const request = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

export const requestWithToken = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		common: {
			Authorization: "Bearer " + localStorage.getItem("token")
		}
	}
});


// requestTestApi.interceptors.request.use(
// 	(config) => {
// 		// config.headers["Accept-Language"] = localStorage.getItem("i18nextLng");
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );



const produseInterceptorConfig = (request: AxiosInstance) => {
	return request.interceptors.request.use(
		(config: any) => {
			// config.headers["Accept-Language"] = localStorage.getItem("i18nextLng");
			const token = localStorage.getItem("token")
			if (token) {
				config.headers.Authorization = "Bearer " + token;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);
}

produseInterceptorConfig(request)
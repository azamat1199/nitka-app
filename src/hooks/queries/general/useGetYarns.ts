import { useQuery } from "react-query";

import { request } from "../../../services/api";


const useGetYarn = () => {
    const query = useQuery(
        "http://137.184.114.36:7044/products/yarn",
		async () => {
			const response = await request.get(`http://137.184.114.36:7044/products/yarn` );

			return response;
		},
		{}
	);
    return  query

}

export default useGetYarn
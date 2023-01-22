import axios from "axios";
import { useQuery } from "react-query";

import { request } from "../../../services/api";


const useGetCollection = () => {
    const query = useQuery(
        "http://137.184.114.36:7044/products/fabric",
		async () => {
			const response = await axios.get(`http://137.184.114.36:7044/products/fabric` );

			return response;
		},
		{}
	);
    return  query

}

export default useGetCollection
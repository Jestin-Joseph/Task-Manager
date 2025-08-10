import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { api } from "./api";
import { AuthContext } from "../Context/AuthContext";

function useAPI(endpoint) {
    const { authToken } = useContext(AuthContext);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // const api = axios.create({
    //     baseURL: process.env.REACT_APP_USER_BASE_URL,
    // })

    // const token = localStorage.getItem("authToken");
    const fetchData = async () => {
        setLoading(true);
        try {
            const resp = await api.get(endpoint)

            setData(resp.data);
            setError(null)

        } catch (err) {
            console.error("API error:", err);
            setError(err.response?.data?.error || "Something went wrong");
        } finally {
            setLoading(null)
        }
    }

    useEffect(() => {
        if (authToken) {
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint, authToken])


    // return { data, loading, error, refetch: fetchData }; 
    return { data, error, loading }
}

export default useAPI;
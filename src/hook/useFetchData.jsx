import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("데이터 가져오기를 실패했습니다.: ", error);
            } finally {
                setLoding(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading };
};

export default useFetchData;
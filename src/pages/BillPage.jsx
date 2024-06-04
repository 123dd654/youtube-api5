import React from 'react';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetchData';

const BillboardPage = () => {

    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/123dd654/music-best/main/billboard/billboard100_2024-06-04.json`)

    return (
        <>
            {loading ? (
                <div>
                    로딩중....
                </div>
            ) : (
                <Chart title="🎶 감미로운 빌보드 차트 Top 100" musicList={data} />
            )}
        </>
    );
}

export default BillboardPage;
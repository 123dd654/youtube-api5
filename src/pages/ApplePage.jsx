import React from 'react';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetchData';

const ApplePage = () => {

    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/webs9919/music-best/main/apple/apple100_2024-06-04.json`)

    return (
        <>
            {loading ? (
                <div>
                    로딩중....
                </div>
            ) : (
                <Chart title="🎶 감미로운 애플 차트 Top 100" musicList={data} />
            )}
        </>
    );
}

export default ApplePage;
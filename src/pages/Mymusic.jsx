import { ClipLoader } from 'react-spinners';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetchData';
import { useState } from 'react';
const Mymusic = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // 어제 날짜
    const [selectedDate, setSelectedDate] = useState(yesterday);
    // Update the URL to point to the public folder
    const url = `${process.env.PUBLIC_URL}/data/play_list.json`;
    const { data, loading } = useFetchData(url);
    return (
        <>
            {loading ? (
                <div className='loading'>
                    <ClipLoader size={50} color='#7D57FF' />
                </div>
            ) : (
                <Chart
                    title='나의 리스트'
                    musicList={data}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    minDate={new Date('2024-05-01')}
                    maxDate={yesterday}
                    isMyList={url.includes('mylist')}
                />
            )}
        </>
    );
}
export default Mymusic;
import React, { createContext, useEffect, useState } from 'react'

export const MusicPlayerContext = createContext();

const MusicPlayerProvider = ({ children }) => {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/play_list.json`) // 데이타 json 이름 넣기
            const data = await response.json();
            setMusicData(data);
            console.log(data);
        }
        fetchData();
    }, []) //,[] 가 한번만 실행 하게 해줌

    return (
        <MusicPlayerContext.Provider value={{ musicData }}>
            {children}
        </MusicPlayerContext.Provider>
    )
}

export default MusicPlayerProvider
import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from 'react-icons/fc';
const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
        <FcCalendar size={24} />
        <span>{value}</span>
    </button>
));
const Chart = ({ title, musicList, selectedDate, onDateChange, minDate, maxDate, isMyList }) => {
    return (
        <section className='music-chart'>
            <div className="title">
                <h2>{title}</h2>
                {!isMyList && (
                    <div className='date-picker'>
                        <DatePicker
                            selected={selectedDate}
                            onChange={onDateChange}
                            dateFormat='yyyy-MM-dd'
                            minDate={minDate}
                            maxDate={maxDate}
                            customInput={<CustomInput />}
                        />
                    </div>
                )}
            </div>
            <div className="list">
                <ul>
                    {musicList.map((item, index) => (
                        <li key={index}>
                            <span className='rankbox'>#{item.rank}</span>
                            <span className='imgbox' style={{ backgroundImage: `url(${item.imageURL})` }}></span>
                            <span className='titlebox'>{item.title}</span>
                            <span className='albumbox'>{item.album}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
export default Chart;
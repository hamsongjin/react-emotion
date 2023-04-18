import React from 'react';

function Main() {
    return(
        <div className='container'>
            <div className='w_wrap'>
                <div className='top_wrap ds_sb mb_2'>
                    <h2 className='title_h2'>Calendar</h2>
                    <div className='btn_wrap'>
                        <button className='btn' type='button'>WEEK</button>
                        <button className='btn' type='button'>TODAY</button>
                    </div>
                </div>
                <div className='calendar_wrap'>
                    <div className='item_wrap'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
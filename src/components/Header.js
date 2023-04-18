import React from 'react';
import '../style/css/header.css';
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
    return(
        <header className='bg_white'>
            <div className='w_wrap'>
                <div className='inner_wrap'>
                    <AiOutlineMenu/>
                    <div className='title_wrap'>
                        <h3 className="title_h3">2023.4</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
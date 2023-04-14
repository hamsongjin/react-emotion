import React from 'react';

function SignIn() {
    return(
        <div className='container w_wrap signin'>
            <div className='inner_wrap'>
                <div className='title_wrap pt_100 ta_c'>
                    <h1 className='title_h1 mb_20'>감정, 보관소</h1>
                    <img src={require('../assets/main_img.png')} alt='logo' />
                </div>
                <div className='panel_wrap'>
                    <div className='panel_inner'>
                        {/* id, pw// */}
                        <div className='item_wrap'>
                            <div className='item'>
                                <input type='text' name='id_line' placeholder='ID'/>
                            </div>
                            <div className='item'>
                                <input type='password' name='pw_line' placeholder='PW' />
                            </div>
                        </div>
                        {/* //id, pw */}
                        <button type='button'>로그인</button>
                        {/* user info// */}
                        <div className='user_info'>

                        </div>
                        {/* //user info */}
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default SignIn;
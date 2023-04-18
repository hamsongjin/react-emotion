import React from 'react';
import '../style/css/signIn.css'

function SignIn() {
    return(
        <div className='container w_wrap signin'>
            <div className='inner_wrap'>
                <div className='title_wrap pt_80 ta_c'>
                    {/* <h1 className='title_h1 mb_20'>감정, 보관소</h1> */}
                    <img src={require('../assets/main_img.png')} alt='logo' />
                </div>
                <div className='panel_wrap pos_b'>
                    <div className='panel_inner'>
                        {/* id, pw// */}
                        <h1 className='title_h1 ta_c mb_30'>login</h1>
                        <div className='item_wrap input mb_50'>
                            <div className='item'>
                                <input type='text' name='id_line' placeholder='ID'/>
                            </div>
                            <div className='item'>
                                <input type='password' name='pw_line' placeholder='PW' />
                            </div>
                        </div>
                        <div className='login_err_wrap'>
                            <p className='msg'></p>
                        </div>
                        {/* //id, pw */}
                        <button className='long_btn' type='button'>로그인</button>
                        {/* user info// */}
                        <div className='user_info ds_sb mt_10'>
                            <p><a href='javascript:(0);'>회원가입</a></p>
                            <p><a href='javascript:(0);'>비밀번호 찾기</a></p>
                        </div>
                        {/* //user info */}
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default SignIn;
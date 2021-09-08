import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'
import { signUp } from '../../redux/actions/userActions';
import '../SignIn/SignIn.scss'
export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword,setCPassword] = useState();
  let history = useHistory();
  const dispatch = useDispatch();
  

  const handleSignUp = async()=>{
    if(password!==cPassword){
      alert('Password and confirm password are not match')
    }else{
      await dispatch(signUp(name,email,password));
      history.push('/')
    }
  }


  return (
    <div className='re_container'>
      <div className='re_form'>
        <div className='re_form_fr'>
          <p style={{ fontSize: 32, marginBottom:-5 }}>Sign up</p>
          <input required onChange={e=>setName(e.target.value)} style={{marginTop:30}} placeholder='Enter your name' />
          <input required onChange={e=>setEmail(e.target.value)}  placeholder='Enter your email' />
          <input type='password' required onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' />

          <input type='password'  required onChange={e=>setCPassword(e.target.value)} placeholder='Enter your password confirm' />
          
          <div style={{height:40}} />
          <p className='re_btn' onClick={()=>handleSignUp()} >Sign Up</p>

        </div>
        <div style={{ display: 'flex', width: 1, height: 500, backgroundColor: '#dedede' }} />
        <div className='re_form_sr'>
          <p style={{fontSize:36,fontWeight:530,color:'#ff6e40'}}>ekaf ekin</p>
          <p style={{fontSize:24,fontWeight:600}}>Welcome to ekaf ekin</p>
          <p style={{fontSize:18}}>Create an account, we are waiting for you </p>
          <p style={{fontSize:18, marginTop:-15}}> to join us</p>
         <NavLink exact to='/' style={{textDecoration:'none'}}>
         <p className='re_btn'>Sign In</p>
         </NavLink>
          <div style={{display:'flex', flexDirection:'row', color:'#ff6e40',marginTop:80}}>
            <p>Privacy policy</p>
            <p style={{marginLeft:30}}>Terms & Condittions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

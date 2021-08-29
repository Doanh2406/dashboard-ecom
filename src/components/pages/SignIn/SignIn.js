import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { signin } from '../../redux/actions/userActions';
import './SignIn.scss'
export default function SignIn() {
  const [email, setEmail] = useState();
  const [password,setPassword] = useState();
  const dispatch = useDispatch();
  
  const handleSignin = () =>{
    
    dispatch(signin(email,password))
     
  }
  return (
    <div className='re_container'>
      <div className='re_form'>
        <div className='re_form_fr'>
          <p style={{ fontSize: 32, }}>Sign In</p>
          <p style={{ color: '#8c8c8c', marginTop: -20 }}>Sign in to ekaf ekin to continue</p>
          <input required onChange={e=>setEmail(e.target.value)} style={{marginTop:30}} placeholder='Enter your email' />
          <input required onChange={e=>setPassword(e.target.value)} security placeholder='Enter your password' />
          <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center',fontSize:14,marginLeft:5,marginTop:10 }}>
            <p >Can't access your account?</p>
            <span style={{color:'#ff6e40',marginLeft:5}}>Reset your password now.</span>
          </div>
          <div style={{height:50}} />
          <p className='re_btn' onClick={()=>handleSignin()} >Sign In</p>

        </div>
        <div style={{ display: 'flex', width: 1, height: 500, backgroundColor: '#dedede' }} />
        <div className='re_form_sr'>
          <p style={{fontSize:36,fontWeight:530,color:'#ff6e40'}}>ekaf ekin</p>
          <p style={{fontSize:24,fontWeight:600}}>Welcome to ekaf ekin</p>
          <p style={{fontSize:18}}>if you don't have an account, would you like </p>
          <p style={{fontSize:18, marginTop:-15}}> to register right now?</p>
          <NavLink exact to='/signup' style={{textDecoration:'none'}}>
          <p className='re_btn'>Sign Up</p>
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

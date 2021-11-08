import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, updateUserPassword } from '../../redux/actions/userActions'
import './Profile.scss'
export default function PasswordDetails() {
  const [cp,setCp] = useState()
  const [np,setNp] = useState()
  const [cnp, setCnp] = useState()
  const {userInfo} = useSelector(state => state.userSignIn)

  const dispatch = useDispatch()
  const handleClick = async ()=>{
    if(cp!==userInfo.password){
      return alert('Wrong password')
    }
    if(np!==cnp){
      return alert('worng')
    }
    await dispatch(updateUserPassword(userInfo._id,np))
    await dispatch(signin(userInfo.email,np))
    alert('Success')
  }
  return (
    <div>
    <div className='pro_fc_row'>
      <div style={{width:'95%'}} className='pro_fc_cl'>
        <h2>Change paswword</h2>
        <p className='pro_title'>
          Your current password
        </p>
        <input value={cp} onChange={e=>setCp(e.target.value)} type='password' className='pro_input' />
        <p className='pro_title'>
          New password
        </p>
        <input  value={np} onChange={e=>setNp(e.target.value)}   type='password' className='pro_input' />
        <p className='pro_title'>
          Confirm new passowrd
        </p>
        <input  value={cnp} onChange={e=>setCnp(e.target.value)}  type='password' className='pro_input' />
     
      </div>
      
    </div>
    <div className='pro_submit' onClick={()=>handleClick()}>Submit</div>
</div>
  )
}

import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, updateUser, updateUserAva } from '../../redux/actions/userActions'
import './Profile.scss'
import LoadingPage from '../../LoadingPage/LoadingPage'
export default function ProfileDetails() {
  const dispatch = useDispatch()
  const {loading,userInfo} = useSelector(state => state.userSignIn)
  const [userAva,setUserAva] = useState()
  const [name, setName] = useState();
  const [userName,setUserName] = useState();
  const [email,setEmail] = useState();
  const [birth,setBirth] = useState();
  const [sex,setSex] = useState();
  const [role,setRole] = useState();
  const [status,setStatus] = useState();
  const [department, setDepartment] = useState();
  const [phone,setPhone] = useState();
  const [website,setWebsite] = useState();
  const [addressline1,setAddressline1] = useState();
  const [addressline2,setAddressline2] = useState();
  const [city, setCity] = useState();
  const [country,setCountry] = useState();
  const [language,setLanguage] = useState();
  const [postcode,setPostcode] = useState();
  const [twiter,setTwiter] = useState();
  const [facebook,setFacebook] = useState();
  const [instagram, setInstagram] = useState();
  const [zalo,setZalo] = useState();
  
  useEffect(() => {
  
    if(userInfo){
      setName(userInfo.name)
      setEmail(userInfo.email)
      setUserName(userInfo.userName)
      setBirth(userInfo.birth)
      setSex(userInfo.sex)
      setRole(userInfo.role)
      setStatus(userInfo.status)
      setDepartment(userInfo.department)
      setPhone(userInfo.phone)
      setWebsite(userInfo.website)
      setAddressline1(userInfo.addressline1)
      setAddressline2(userInfo.addressline2)
      setCity(userInfo.city)
      setCountry(userInfo.country)
      setLanguage(userInfo.country)
      setPostcode(userInfo.postcode)
      setTwiter(userInfo.twiter)
      setFacebook(userInfo.facebook)
      setInstagram(userInfo.instagram)
      setZalo(userInfo.zalo)
    }
  }, [dispatch,userInfo])
  const handleSubmit =async () =>{
    const formData = new FormData();
    formData.append('userAva',userAva)
    
    if(userAva){
      await dispatch(updateUserAva(userInfo._id,formData))
    }
    await dispatch(updateUser(userInfo._id,name,userName,birth,sex,role,status,department,phone,website,addressline1,addressline2,city,country,language,postcode,twiter,facebook,instagram,zalo))
   await dispatch(signin(userInfo.email,userInfo.password))
    
  }
  return (
    <div>
      {
        loading?<LoadingPage />:<>
        <div className='pro_fc_row'>
          
        <img style={{marginTop:20,borderRadius:50}} src={userAva ? window.URL.createObjectURL(userAva) : userInfo.userAva?userInfo.userAva:'http://localhost:5000/upload/constants/ava.png'} alt='photos' />
        <div style={{ marginLeft: 20,  }}>
          <p style={{ fontWeight: 530, fontSize: 24 }}>{userInfo.name}</p>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: -18 }}>
          <div className='add_btn_container'>
              <label style={userAva?{background:'gray',marginTop:-20}:{marginTop:-20}}  className="pro_btn" for="upload-photo">Change Avatar</label>
              <input onChange={(e) => setUserAva(e.target.files[0])} id='upload-photo' name='upload-photo' className='add_btn_choose' type='file' accept='image/*'  />
            </div>
            <p style={{ marginLeft: 10, background: 'red' }} className='pro_btn'>Remove Avatar</p>
          </div>
        </div>
      </div>
      <div className='pro_fc_row'>
        <div className='pro_fc_cl'>
          <h2>Basic Infomation</h2>
          <p className='pro_title'>
            Name
          </p>
          <input value={name} onChange={e=>setName(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            User Name
          </p>
          <input value={userName} onChange={e=>setUserName(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Email
          </p>
          <input disabled value={email}  className='pro_input' />
          <p className='pro_title'>Date of birth (DD/MM/YYYY)</p>
          <input value={birth} onChange={e=>setBirth(e.target.value)} className='pro_input' />
          <p className='pro_title'>Sex</p>
          <div value={sex} onChange={e=>setSex(e.target.value)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <input   style={{width:20}} type='radio' name='sex' value='Male' />
            <label  for='Male'>Male</label>
            <input style={{ marginLeft: 20,width:20 }} type='radio' name='sex' value='Female' />
            <label for='Female'>Female</label>
            <input style={{ marginLeft: 20,width:20 }} type='radio' name='sex' value='Others' />
            <label for='Others'>Others</label>
          </div>
        </div>
        <div style={{ marginLeft: 50 }} className='pro_fc_cl'>
          <div style={{ height: 56 }} />
          <p className='pro_title'>
            Role
          </p>
          <select value={role}  onChange={e=>setRole(e.target.value)} className='pro_select'>
            <option>Admin</option>
            <option>User</option>
            <option>Staft</option>
          </select>
          <p className='pro_title'>
            Status
          </p>
          <select value={status}  onChange={e=>setStatus(e.target.value)} className='pro_select'>
            <option>Active</option>
            <option>Blocked</option>
          </select>
          <p className='pro_title'>
            Department
          </p>
          <select value={department}  onChange={e=>setDepartment(e.target.value)} className='pro_select'>
            <option>Sales</option>
            <option>Management</option>
            <option>Developer</option>
          </select>
        </div>
      </div>
      <div className='pro_fc_row'>
        <div className='pro_fc_cl'>
          <h2>Contact</h2>
          <p className='pro_title'>
            Phone
          </p>
          <input value={phone}  onChange={e=>setPhone(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Website
          </p>
          <input  value={website} onChange={e=>setWebsite(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Addressline 1
          </p>
          <input value={addressline1} onChange={e=>setAddressline1(e.target.value)} className='pro_input' />
          
          <p className='pro_title'>
            Addressline 2
          </p>
          <input value={addressline2}  onChange={e=>setAddressline2(e.target.value)} className='pro_input' />
          
        </div>
        
        <div style={{ marginLeft: 50 }} className='pro_fc_cl'>
          <div style={{ height: 56 }} />
          <p className='pro_title'>
            City
          </p>
          <input value={city} onChange={e=>setCity(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Country
          </p>
          <input value={country} onChange={e=>setCountry(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Language
          </p>
          <input value={language}  onChange={e=>setLanguage(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Post code
          </p>
          <input value={postcode}  onChange={e=>setPostcode(e.target.value)} className='pro_input' />
        </div>
        

      </div>
      
      <div className='pro_fc_row'>
        <div className='pro_fc_cl'>
          <h2>Social</h2>
          <p className='pro_title'>
            Twiter
          </p>
          <input value={twiter} onChange={e=>setTwiter(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Facebook
          </p>
          <input value={facebook} onChange={e=>setFacebook(e.target.value)} className='pro_input' />
      
        </div>
        <div style={{ marginLeft: 50 }} className='pro_fc_cl'>
          <div style={{ height: 56 }} />
          <p className='pro_title'>
            Instagram
          </p>
          <input value={instagram} onChange={e=>setInstagram(e.target.value)} className='pro_input' />
          <p className='pro_title'>
            Zalo
          </p>
          <input value={zalo}  onChange={e=>setZalo(e.target.value)} className='pro_input' />
        </div>
      </div>
      <div className='pro_submit' onClick={()=>handleSubmit()}>Submit</div>
      <div style={{height:50}} />
      </>
      }
    </div>
   
  )
}

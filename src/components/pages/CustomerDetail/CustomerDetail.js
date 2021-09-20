import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import LinkHome from '../../LinkHome/LinkHome'
import { userDetail } from '../../redux/actions/userActions'
import LoadingPage from '../../LoadingPage/LoadingPage'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './CustomerDetail.scss'
import TableCustomerDetail from './TableCustomerDetail'
export default function CustomerDetail() {
  const { id } = useParams()
  const [show, setShow] = useState()

  const dispatch = useDispatch()
  const { loading, error, user } = useSelector(state => state.userDetail)
  console.log(loading, error, user)
  console.log(id)
  useEffect(() => {
    dispatch(userDetail(id))
  }, [])
  return (
    <>
      {
        loading ? <LoadingPage /> : user &&
          <>
            <LinkHome title='Customer Detail' />
            <div className='cd_container'>
              <div className='cd_fr'>
                <div className='cd_fr_fr'>
                  <img src={user.userAva ? 'http://localhost:5000/' + user.userAva : 'http://localhost:5000/upload/constants/ava.png'} alt='' />
                  <p><span>Name:</span> {user.name}</p>
                  <p><span>Email:</span>  {user.email}</p>
                  <p><span>Phone:</span>  {user.phone}</p>
                  <a href={user.facebook}>
                    <FacebookIcon style={{ color: 'blue' }} />
                  </a>
                  <a href={user.instagram}>
                    <InstagramIcon style={{ color: '#E1306C' }} />
                  </a>
                  <a href='http://google.com'>
                    <TwitterIcon style={{ color: '#405DE6' }} />
                  </a>
                  <div style={{ height: 1, width: '100%', background: 'gray', opacity: 0.3, marginTop: 20 }} />
                  <p className='cd_title'>Last Orders</p>
                  <p className='cd_subs'>7 day ago - <span style={{ color: 'blue' }}>Id: 123</span></p>
                  <p className='cd_title'>Average Order Value</p>
                  <p className='cd_subs'>$574.00</p>
                  <p className='cd_title'>Registered</p>
                  <p className='cd_subs'>2 months ago</p>
                </div>
              </div>
              <div className='cd_sr'>
                <div className='cd_sr_fr'>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }} onClick={() => setShow(!show)}  >
                    <p style={{ fontSize: 18, }} className='cd_title'>
                      Adresses
                    </p>
                    {
                      !show && <KeyboardArrowDownIcon style={{ marginLeft: 'auto' }} />
                    }
                    {
                      show && <KeyboardArrowUpIcon style={{ marginLeft: 'auto' }} />
                    }

                  </div>
                  {
                    show && <>
                      {
                        user.addressline1 && <>
                          <div style={{ height: 1, width: '100%', background: 'gray', opacity: 0.3, marginTop: 20, marginTop: 0 }} />

                          <p>{user.addressline1}</p>
                        </>

                      }
                      {
                        user.addressline2 && <>
                          <div style={{ height: 1, width: '100%', background: 'gray', opacity: 0.3, marginTop: 20 }} />

                          <p style={{ paddingBottom: 20 }}>{user.addressline2}</p></>
                      }
                    </>
                  }
                </div>
                <div className='cd_sr_sr'>
                  <div className='cd_order_container'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }} >

                      <p style={{ fontSize: 18, }} className='cd_title'>
                        Orders
                      </p>

                    </div>
                    <div style={{ height: 1, width: '100%', background: 'gray', opacity: 0.3,  marginTop: 0, }} />
                    <TableCustomerDetail   />
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}

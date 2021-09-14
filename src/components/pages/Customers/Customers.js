import React, { useEffect, useState } from 'react'
import './Customers.scss'
import LinkHome from '../../LinkHome/LinkHome'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  CartesianAxis
} from "recharts";
import StarIcon from '@material-ui/icons/Star';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GetAppIcon from '@material-ui/icons/GetApp';
import CustomersTable from './CustomersTable';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { listUser, listUserSearch } from '../../redux/actions/userActions';
const data = [
  {
    name: "22/6",
    uv: 100,

  },
  {
    name: "22/6",
    uv: 300,

  },
  {
    name: "22/6",
    uv: 200,

  },
  {
    name: "22/6",
    uv: 278,

  },
  {
    name: "22/6",
    uv: 189,

  },
  {
    name: "22/6",
    uv: 239,

  },
  {
    name: "22/6",
    uv: 349,

  }
];


export default function Customers() {
  const { loading, error, list } = useSelector(state => state.userList)
  const dispatch = useDispatch()
  const [three, setThree] = useState(false)
  const [count, setCount] = useState();
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const [search,setSearch] = useState();
  useEffect(() => {
    dispatch(listUser((page-1)*6, count, sort))
  }, [page,sort,count])
  useEffect(() => {
   if(!search){
    dispatch(listUserSearch(search))
   }
    if(search){
      dispatch(listUserSearch(search))
    }else{
      return
    }
   
  }, [search])
 
  console.log(loading, error, list)
  return (
    <>
      {
        loading ? <LoadingPage /> : <div className='cu_container'>
          <LinkHome title='Customer' />
          <div className='cu_fr'>
            <div className='cu_fr_fc'>
              <h2>New Customer</h2>
              <ResponsiveContainer>
                <LineChart

                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <Tooltip />
                  <CartesianAxis axisLine={false} tickLine={false} />
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Line type="monotone" dataKey="uv" stroke="#ff6e40" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className='cu_fr_sc'>
              <div className='cu_fr_sc_title'>
                <h2>Customer Rating</h2>

                <p className='cu_fr_sc_title_3dot' onClick={() => setThree(!three)}>...</p>
                {
                  three && <div className='cu_three_container'>
                    <p className='cu_three_item'>View Detail</p>
                    <p className='cu_three_item'>Download report</p>
                  </div>
                }

              </div>
              <div className='cu_fr_sc_body'>
                <h1>3.0</h1>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <StarIcon style={{ color: 'yellow' }} />
                  <StarIcon style={{ color: 'yellow' }} />
                  <StarIcon style={{ color: 'yellow' }} />
                  <StarIcon />
                  <StarIcon />
                  <p style={{ marginLeft: 10 }}>(318)</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <ArrowUpwardIcon style={{ fontSize: 18, color: '#05b171' }} />
                  <p style={{ color: '#05b171', marginRight: 10 }}> +35</p>
                  <p > Point from last month</p>

                </div>
                <div style={{ height: 150, }}>

                  <LineChart
                    height={150}
                    width={250}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >

                    <Line type="monotone" dataKey="uv" stroke="#05b171" />
                  </LineChart>

                </div>
                <div className='cu_btn_dow'>
                  <GetAppIcon style={{ fontWeight: 400, marginTop: 3, marginRight: 10 }} />
                  <p>Download Report</p>
                </div>
              </div>
            </div>
          </div>
          <div className='cu_sr'>
            <CustomersTable search={search} setSearch={setSearch} page={page} setPage={setPage} sort={sort} setSort={setSort}  count={count} setCount={setCount} list={list} />
          </div>
        </div>
      }
    </>
  )
}

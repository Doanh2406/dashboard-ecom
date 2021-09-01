import React,{useState} from 'react'
import './Checkout.scss'
import LinkHome from '../../LinkHome/LinkHome'
import Billing from './Billing'
import Shipping from './Shipping'
import Payment from './Payment'
const data = [
  {
    name: 'Yasuo',
    quantity: 3,
    price: 390,
    photo: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_36.jpg'
  },
  {
    name: 'Death is like the wind',
    quantity: 3,
    price: 390,
    photo: 'https://gamek.mediacdn.vn/133514250583805952/2021/5/20/-16214825828142048416160.jpg'
  },
  {
    name: 'All way by my side',
    quantity: 3,
    price: 390,
    photo: 'https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/06/yasuo-ma-su.jpg'
  }, {
    name: 'Lord of lords',
    quantity: 3,
    price: 390,
    photo: 'https://victory8.online/wp-content/uploads/2021/01/yasuo-cosplay-4.jpg'
  }
]
export default function Checkout() {
  const [tab,setTab] = useState(1);
  const [seen,setSeen] = useState(1)
  const handleNext = () =>{
    if(tab===3){
      return
    }else{
      setTab(tab+1)
      setSeen(seen+1)
    }
  }
  const handlePre = ()=>{
    if(tab===1){
      return
    }else{
      setTab(tab-1)
    }
  }
  return (
    <>
      <LinkHome title='Check out' />
      <div className='ch_container'>

        <div className='ch_fc'>
          <div className='ch_stage'>
            <div style={tab === 1 ? {background:'#ff6e40',opacity:0.8}:seen>1 ? {background:'#05b171',opacity:0.8}:null} className='ch_stage_item' >
              <p style={tab === 1? {background:'#ff470d'}:seen>1 ? {background:'#007d3b',opacity:0.8}:null} className='ch_stage_item_num'>1</p>
              <p className='ch_stage_item_text'>Billing</p>
            </div>
            <div style={tab === 2? {background:'#ff6e40',opacity:0.8}:seen>2 ? {background:'#05b171'}:null} className='ch_stage_item' >
              <p style={tab === 2? {background:'#ff470d'}:seen>2 ? {background:'#007d3b',opacity:0.8}:null} className='ch_stage_item_num'>2</p>
              <p className='ch_stage_item_text'>Shipping</p>
            </div>
            <div style={tab === 3? {background:'#ff6e40',opacity:0.8}:seen>2.5 ? {background:'#05b171'}:null} className='ch_stage_item' >
              <p style={tab === 3? {background:'#ff470d'}:seen>2.5 ? {background:'#007d3b',opacity:0.8}:null} className='ch_stage_item_num'>3</p>
              <p className='ch_stage_item_text'>Payment</p>
            </div>
          </div>

          <div className='ch_fc_fr'>
            {
              tab===1?<Billing />:tab===2 ? <Shipping /> : <Payment />
            }
          </div>
          <div className='ch_fc_btn'>
           <p style={tab !== 3? {background:'#05b171'}:null} className='ch_btn ' onClick={()=>handleNext()}>Next</p>
            <p style={tab !== 1? {background:'#05b171'}:null}  className='ch_btn' onClick={()=>handlePre()}>Previous</p>
            
          </div>
        </div>



        <div className='ch_sc'>
          <h2>Orders Summary</h2>
          <div className='ch_sc_fr'>
            <h3 >Products</h3>
            {
              data.map(item => (
                <>
                  <div className='ch_sc_fr_item'>
                    <div className='ch_sc_fr_item_f'>
                      <img src={item.photo} alt='img' />
                      <div style={{ display: 'flex', flexDirection: 'column', marginTop: -24, marginLeft: 20 }}>
                        <h5 style={{ marginBottom: 10 }}>{item.name}</h5>
                        <div stylle={{ display: 'flex', flexDirection: 'row' }}>
                          <span>{item.quantity}</span>
                          <span>X</span>
                          <span>${item.price}</span>
                        </div>
                      </div>
                    </div>
                    <p>${item.price * item.quantity}</p>
                  </div>
                </>
              ))
            }
          </div>
          <div className='ch_sc_sr'>
            <h3 >Price</h3>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div  className='ch_sc_sr_fcc'>
                <p >Sub total:</p>
                <p>Shipping:</p>
                <p>Tax(18%):</p>
                <p style={{fontWeight:540}}>Total:</p>
              </div>
              <div className='ch_sc_sr_fc'>
                <p >$1321</p>
                <p>Free</p>
                <p>$123</p>
                <p style={{fontWeight:540}}>$1432</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

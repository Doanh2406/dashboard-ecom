import React from 'react'
import LinkHome from '../../LinkHome/LinkHome'
import './CouponsList.scss'
import CouponTable from './CouponTable'
export default function CouponsList() {
  return (
    <>
    <LinkHome title='Coupons List' />
    <CouponTable />
    </>
  )
}

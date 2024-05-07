import Header from '@/components/Header'
import React, { type FC, type ReactNode } from 'react'

interface MyProps {
    children?: ReactNode;
 }

const DefaultLayout : FC<MyProps> = ({children}) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default DefaultLayout
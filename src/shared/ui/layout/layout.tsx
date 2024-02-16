import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { MainBlock } from '@/widgets/mainblock'

type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={'wrapper'}>
      <Header />
      <MainBlock>
        <Outlet />
      </MainBlock>
      <Footer />
    </div>
  )
})

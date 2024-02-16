import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Block } from '@/shared/ui/block/block'

import s from './mainblock.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const MainBlock = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <Block as={'main'}>
      <div ref={ref} {...rest} className={s.main__block}>
        {children}
      </div>
    </Block>
  )
})

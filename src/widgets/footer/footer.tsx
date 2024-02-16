import s from './footer.module.scss'

import { Block } from '../../shared/ui/block'

export const Footer = () => {
  return (
    <Block as={'footer'} className={s.footer}>
      <div>©2023 Stanislav khurtov</div>
    </Block>
  )
}

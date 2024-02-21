import React from 'react'
import s from './styles.module.scss'
import { cn } from 'lib/utils'

interface Props extends React.HtmlHTMLAttributes<{}> {
  as?: string
}
type Ref = React.ReactNode | HTMLElement

export const Container: React.FC<Props> = React.forwardRef<Ref, Props>(
  function Container(props, ref) {
    const { className, style, as = 'div', children } = props
    return React.createElement(
      as,
      {
        className: cn(s.root, className),
        style,
        ref,
      },
      children
    )
  }
)

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import s from './styles.module.scss'

const buttonVariants = cva(s.root, {
  variants: {
    variant: {
      default: s.default,
    },
    size: {
      default: undefined,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface Props extends VariantProps<typeof buttonVariants> {
  disabled?: boolean
}

export interface ButtonAsButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  as?: 'button'
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a'
}

export interface ButtonAsOtherProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: string
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps

type Ref = React.ReactNode | HTMLElement | string

export const Button = React.forwardRef<Ref, ButtonProps>(function Button(
  props,
  ref
) {
  const {
    variant,
    size,
    className,
    disabled,
    children,
    as = 'button',
    ...rest
  } = props

  return React.createElement(
    as,
    {
      className: buttonVariants({ variant, size, className }),
      ref,
      disabled,
      ...rest,
    },
    children
  )
})

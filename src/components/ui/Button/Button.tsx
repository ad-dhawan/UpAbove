import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  className?: string
}

type LinkButtonProps = BaseProps & { to: string }
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

export type ButtonProps = LinkButtonProps | NativeButtonProps

/** Renders a router <Link> when `to` is given, otherwise a native <button>. */
export function Button({ children, variant = 'primary', size = 'md', fullWidth, className, ...rest }: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ')

  if (rest.to !== undefined) {
    return (
      <Link to={rest.to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  )
}

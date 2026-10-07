import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
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

type LinkButtonProps = BaseProps & { to: string; href?: undefined }
type AnchorButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined }
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }

export type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps

/** Renders a router <Link> for `to`, a plain <a> for external `href`, otherwise a native <button>. */
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

  if (rest.href !== undefined) {
    return (
      <a {...rest} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  )
}

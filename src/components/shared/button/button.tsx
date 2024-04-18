import React from 'react'

import { cn } from '@/utils'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode
  isLoading?: boolean
}

export default function Button({ children, className, isLoading, disabled, ...rest }: Props) {
  return (
    <button
      className={cn(
        'focus-primary flex items-center justify-center gap-2 rounded-sm bg-primary text-center text-white transition-colors hover:bg-primary/[0.91] disabled:cursor-not-allowed disabled:bg-primary/70 disabled:text-gray-400',
        className,
        {
          'flex items-center justify-center gap-1': isLoading,
        }
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && (
        <div className="inline-block size-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <span>{children}</span>
    </button>
  )
}

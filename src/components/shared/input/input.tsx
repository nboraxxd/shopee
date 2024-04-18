import { useState } from 'react'

import { cn } from '@/utils'

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string
  classNameWrapper?: string
  classNameInput?: string
  classNameError?: string
  classNameEye?: string
}

export default function Input(props: Props) {
  const { errorMessage, classNameWrapper = 'mt-2', classNameInput, classNameError, classNameEye, ...rest } = props

  const [openEye, setOpenEye] = useState(false)

  function handleType() {
    if (rest.type === 'password') {
      return openEye === false ? 'password' : 'text'
    }
    return rest.type
  }

  return (
    <div className={cn(classNameWrapper)}>
      <input
        className={cn('w-full rounded-sm border border-gray-300 outline-none focus:shadow-sm', classNameInput)}
        {...rest}
        type={handleType()}
      />

      {/* Eye */}
      {rest.type === 'password' &&
        (openEye === false ? (
          <button type="button" onClick={() => setOpenEye(!openEye)}>
            <img src="/icons/eye.svg" alt="Eye" className={cn(classNameEye)} />
          </button>
        ) : (
          <button type="button" onClick={() => setOpenEye(!openEye)}>
            <img src="/icons/eye-slash.svg" alt="Eye slash" className={cn(classNameEye)} />
          </button>
        ))}

      {/* Error */}
      <p className={cn('mt-1 min-h-4 text-xs text-red-600', classNameError)}>{errorMessage}</p>
    </div>
  )
}

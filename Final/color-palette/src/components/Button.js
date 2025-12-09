import cx from 'classnames'

export default function Button({
  children,
  primary,
  success,
  danger,
  outline,
  rounded,
  onClick,
  className,
}) {
  const styles = cx(
    'px-4 py-2 border font-medium transition',
    {
      'bg-blue-500 text-white border-blue-500': primary && !outline,
      'bg-green-500 text-white border-green-500': success && !outline,
      'bg-red-500 text-white border-red-500': danger && !outline,
      'bg-white text-blue-500 border-blue-500': primary && outline,
      'bg-white text-green-500 border-green-500': success && outline,
      'bg-white text-red-500 border-red-500': danger && outline,
      'rounded-full': rounded,
      'rounded': !rounded,
    },
    className
  )

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
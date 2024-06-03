

const Container = ({className, children, ...others}) => {
  return (
    <div className={`px-[80px] ${className}`} {...others}>
      {children}
    </div>
  )
}

export default Container

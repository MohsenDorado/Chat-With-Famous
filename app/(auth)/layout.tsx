import React from "react"

const AppLayout = ({children}:{children:React.ReactNode;}) => {
  return (
    <div className="items-center flex justify-center h-full">{children}</div>
  )
}

export default AppLayout
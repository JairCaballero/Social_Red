import { Outlet } from "react-router-dom"

const LayoutPublic = () => {
  return (
    <div>
      <p>LayoutPublic</p>
      <Outlet />
    </div>
  )
}

export default LayoutPublic
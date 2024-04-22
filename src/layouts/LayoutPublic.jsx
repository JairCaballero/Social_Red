import { Outlet } from "react-router-dom"
import HeaderPublic from "../components/header/HeaderPublic"

const LayoutPublic = () => {
  return (
    <div>
      <HeaderPublic />
      <Outlet />
    </div>
  )
}

export default LayoutPublic
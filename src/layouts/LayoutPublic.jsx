import { Outlet } from "react-router-dom"
import HeaderPublic from "../components/header/HeaderPublic"

const LayoutPublic = () => {
  return (
    <div>
      <HeaderPublic />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPublic
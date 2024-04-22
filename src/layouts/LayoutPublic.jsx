import { Outlet } from "react-router-dom"
import HeaderPublic from "../components/header/HeaderPublic"

const LayoutPublic = () => {
  return (
    <div>
      <HeaderPublic />
      <div className="mt-6 container mx-auto bg-red-100 px-4 md:px-0">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPublic
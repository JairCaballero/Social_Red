import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/error-page"
import Home from "../pages/home/Home"
import LayoutPublic from "../layouts/LayoutPublic"

const router = createBrowserRouter ([
  {
    path : '/',
    element : <LayoutPublic />,
    errorElement : <ErrorPage />,
    childrem : [
      {
        path : '/',
        element: <Home />
      }
    ]
  }
])

export default router
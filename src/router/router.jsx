import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/home/Home"
import ErrorPage from "@/pages/error-page"
import LayoutPublic from "@/layouts/LayoutPublic"

const router = createBrowserRouter ([
  {
    path : '/',
    element : <LayoutPublic />,
    errorElement : <ErrorPage />,
    children : [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/perfil-user'
      },
      {
        path: '/perfil-group'
      },
    ]
  },
  {
    path: '/user',
    children: [
      {
        path: '/config'
      },
      {
        path: '/friends'
      },
      {
        path: '/groups'
      },
      {
        path: '/config-group/:id'
      },
    ]
  },
])

export default router
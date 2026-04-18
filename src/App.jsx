import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home'
import RootLayout from './layouts/RootLayout'
import Learn from './routes/Learn/Learn'
import About from './routes/About/About'

function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: '/',
      children: [
        {
          element: <Home />,
          path: '/'
        },

        {
          element: <Learn />,
          path: 'learn'
        },
        {
          element: <About />,
          path: 'about'
        }

      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App

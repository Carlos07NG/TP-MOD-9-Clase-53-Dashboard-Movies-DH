import {
    createBrowserRouter,
  } from 'react-router-dom'
import AppLayout from './src/layouts/AppLayout'
import ContentRowMovies from './src/components/ContentRowMovies'
import LastMovieInDh from './src/components/LastMovieInDh'
import GenresInDh from './src/components/GenresInDh'
import NotFound from './src/components/NotFound'
  
export  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      children : [
        {
          path: "/metrics",
          element : <ContentRowMovies/>,
        },
        {
          path: "/last-movie",
          element : <LastMovieInDh/>,
        },
        {
          path: "/genres",
          element : <GenresInDh/>,
        }
      ]
    },
    {
      path : "*",
      element : <NotFound/>
    }
])
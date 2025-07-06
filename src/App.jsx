import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Signup from '../pages/Signup'
import PersonalityDetector from '../pages/PersonalityDetector'
import Questions from '../pages/Questions'
import Result from '../pages/Result'
function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <LandingPage></LandingPage>
  },
{
  path: '/signup',
  element: <Signup />
},

{
  path: '/personalityDetector',
  element: <PersonalityDetector />
},
{
  path: '/questions',
  element: <Questions />
},
{
  path: '/results',
  element: <Result />
}])

  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App

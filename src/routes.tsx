import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Dishes = lazy(() => import('./pages/Dishes'))
const Community = lazy(() => import('./pages/Community'))
const Record = lazy(() => import('./pages/Record'))
const Me = lazy(() => import('./pages/Me'))

const routes: RouteObject[] = [
  { path: 'home', element: <Home /> },
  { path: 'dishes', element: <Dishes /> },
  { path: 'community', element: <Community /> },
  { path: 'record', element: <Record /> },
  { path: 'me', element: <Me /> },
  { path: '/', element: <Navigate to='/home' /> }
]

export default routes

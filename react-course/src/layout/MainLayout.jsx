import React, {Suspense} from 'react'
import {NavBar} from '../components/routerDomComponents/NavBar'
import {Outlet} from 'react-router-dom'
import {Loader} from '../components/routerDomComponents/Loader'
import {ErrorBoundary} from '../components/routerDomComponents/ErrorBoundary'

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

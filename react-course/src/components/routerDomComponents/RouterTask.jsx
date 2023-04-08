import React, {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import {FlexColumn} from '../UI/FlexColumn'
import {TaskWrapper} from '../UI/taskWrapper'
import {PrivateRouter} from './PrivateRouter'
import {MainLayout} from '../../layout/MainLayout'
import {ErrorBoundary} from './ErrorBoundary'

const MainPage = lazy(() =>
  import('./pages/Main').then((module) => ({
    default: module.MainPage,
  })),
)

const HeroesPage = lazy(() =>
  import('./pages/Heroes').then((module) => ({
    default: module.HeroesPage,
  })),
)

const HeroCardInfo = lazy(() =>
  import('./HeroCardInfo').then((module) => ({
    default: module.HeroCardInfo,
  })),
)

const LocationsPage = lazy(() =>
  import('./pages/Locations').then((module) => ({
    default: module.LocationsPage,
  })),
)

const LocationCardInfo = lazy(() =>
  import('./LocationCardInfo').then((module) => ({
    default: module.LocationCardInfo,
  })),
)

const EpisodesPage = lazy(() =>
  import('./pages/Episodes').then((module) => ({
    default: module.EpisodesPage,
  })),
)

const EpisodeCardInfo = lazy(() =>
  import('./EpisodeCardInfo').then((module) => ({
    default: module.EpisodeCardInfo,
  })),
)

const Login = lazy(() =>
  import('./pages/Login').then((module) => ({
    default: module.Login,
  })),
)

const NotFound404 = lazy(() =>
  import('./pages/404').then((module) => ({
    default: module.NotFound404,
  })),
)

export const RouterTask = () => {
  return (
    <TaskWrapper height='32rem'>
      <FlexColumn>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='' element={<MainPage />} />
            <Route path='heroes' element={<PrivateRouter />}>
              <Route index element={<HeroesPage />} />
              <Route path=':heroId' element={<HeroCardInfo />} exect />
            </Route>
            <Route path='locations' element={<PrivateRouter />}>
              <Route index element={<LocationsPage />} />
              <Route path=':locId' element={<LocationCardInfo />} />
            </Route>
            <Route path='episodes' element={<PrivateRouter />}>
              <Route index element={<EpisodesPage />} />
              <Route path=':episodeId' element={<EpisodeCardInfo />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound404 />} />
          </Route>
        </Routes>
      </FlexColumn>
    </TaskWrapper>
  )
}

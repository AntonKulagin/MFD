import React from 'react'
<<<<<<< HEAD
import {Route, Routes} from 'react-router-dom'
import {NavBar} from './NavBar'
import {MainPage} from './pages/Main'
import {LocationsPage} from './pages/Locations'
import {HeroesPage} from './pages/Heroes'
import {EpisodesPage} from './pages/Episodes'
import {FlexColumn} from '../UI/FlexColumn'
import {HeroCardInfo} from './HeroCardInfo'
import {LocationCardInfo} from './LocationCardInfo'
import {EpisodeCardInfo} from './EpisodeCardInfo'
import {NotFound404} from './pages/404'
import {TaskWrapper} from '../UI/taskWrapper'
=======
import { Route, Routes } from 'react-router-dom'
import TaskBlock from '../UI/TaskBlock/TaskBlock'
import NavBar from './NavBar'
import MainPage from './pages/Main/MainPage'
import LocationsPage from './pages/Locations/LocationsPage'
import HeroesPage from './pages/Heroes/HeroesPage'
import EpisodesPage from './pages/Episodes/EpisodesPage'
import FlexColumn from '../UI/FlexColumn/FlexColumn'
import HeroCardInfo from './HeroCardInfo/HeroCardInfo'
import LocationCardInfo from './LocationCardInfo/LocationCardInfo'
import EpisodeCardInfo from './EpisodeCardInfo/EpisodeCardInfo'
import NotFound404 from './pages/404/NotFound404'
import { Login } from './pages/Login'
import { PrivateRouter } from './PrivateRouter'
>>>>>>> 52a2bee (created task context)

export const RouterTask = () => {
  return (
    <TaskWrapper height='300px'>
      <FlexColumn>
        <NavBar />
        <Routes>
<<<<<<< HEAD
          <Route path='' element={<MainPage />} />
          <Route path='heroes'>
=======
          <Route path="" element={<MainPage />} />
          <Route path="heroes" element={<PrivateRouter />}>
>>>>>>> 52a2bee (created task context)
            <Route index element={<HeroesPage />} />
            <Route path=':heroId' element={<HeroCardInfo />} />
          </Route>
<<<<<<< HEAD
          <Route path='locations'>
=======
          <Route path="locations" element={<PrivateRouter />}>
>>>>>>> 52a2bee (created task context)
            <Route index element={<LocationsPage />} />
            <Route path=':locId' element={<LocationCardInfo />} />
          </Route>
<<<<<<< HEAD
          <Route path='episodes'>
=======
          <Route path="episodes" element={<PrivateRouter />}>
>>>>>>> 52a2bee (created task context)
            <Route index element={<EpisodesPage />} />
            <Route path=':episodeId' element={<EpisodeCardInfo />} />
          </Route>
<<<<<<< HEAD
          <Route path='*' element={<NotFound404 />} />
=======
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound404 />} />
>>>>>>> 52a2bee (created task context)
        </Routes>
      </FlexColumn>
    </TaskWrapper>
  )
}

import React from 'react'
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
import {Login} from './pages/Login'
import {PrivateRouter} from './PrivateRouter'

export const RouterTask = () => {
  return (
    <TaskWrapper height='300px'>
      <FlexColumn>
        <NavBar />
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='heroes' element={<PrivateRouter />}>
            <Route index element={<HeroesPage />} />
            <Route path=':heroId' element={<HeroCardInfo />} />
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
        </Routes>
      </FlexColumn>
    </TaskWrapper>
  )
}

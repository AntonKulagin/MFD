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
import {TaskBlock} from '../UI/TaskBlock'

export const RouterTask = () => {
  return (
    <TaskBlock height='300px'>
      <FlexColumn>
        <NavBar />
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='heroes'>
            <Route index element={<HeroesPage />} />
            <Route path=':heroId' element={<HeroCardInfo />} />
          </Route>
          <Route path='locations'>
            <Route index element={<LocationsPage />} />
            <Route path=':locId' element={<LocationCardInfo />} />
          </Route>
          <Route path='episodes'>
            <Route index element={<EpisodesPage />} />
            <Route path=':episodeId' element={<EpisodeCardInfo />} />
          </Route>
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </FlexColumn>
    </TaskBlock>
  )
}

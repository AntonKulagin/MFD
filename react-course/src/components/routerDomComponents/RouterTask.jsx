import React from 'react'
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

const RouterTask = () => {
  return (
    <TaskBlock height="300px">
      <FlexColumn>
        <NavBar />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="heroes">
            <Route index element={<HeroesPage />} />
            <Route path=":heroId" element={<HeroCardInfo />} />
          </Route>
          <Route path="locations">
            <Route index element={<LocationsPage />} />
            <Route path=":locId" element={<LocationCardInfo />} />
          </Route>
          <Route path="episodes">
            <Route index element={<EpisodesPage />} />
            <Route path=":episodeId" element={<EpisodeCardInfo />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </FlexColumn>
    </TaskBlock>
  )
}

export default RouterTask

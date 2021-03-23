import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Main from './components/Main'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Photo from './components/Photo'
import Cert from './components/Cert'
import HeaderBarContent from './components/HeaderBar'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

function HideOnScroll (props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      background: 'white',
      boxShadow: 'none'
    }
  })
)

function App () {
    return (
      <React.Fragment>
        <BrowserRouter>
        <HideOnScroll>
          <AppBar style={{ background: 'white',
      boxShadow: 'none' }}>
            <HeaderBarContent />
          </AppBar>
        </HideOnScroll>
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/photo' component={Photo} />
                  <Route path='/experience' component={Experience} />
                  <Route path='/cert' component={Cert} />
                  <Route component={Main} />
                </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
}

export default App

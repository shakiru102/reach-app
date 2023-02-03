import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import AuthNavigations from './auth/Index'
import ReeachStack from './reeach/ReeachStack'

const RootNavigation = () => {

  const {
    loggedIn,
    auth
  } = useSelector((state: RootState) => state.auth)

  return (
        auth ? <ReeachStack /> : <AuthNavigations />
  )
}

export default RootNavigation
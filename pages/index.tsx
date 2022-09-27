import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Searcher from '../components/Searcher'
import Description from '../containers/Description';
import UserCard from '../containers/UserCard'

import { getGitHubUser } from '../services/users'

const useStyles = makeStyles({
  root: {
    background: 'whitesmoke',
    width: '80vw',
    height: '50rem',
    borderRadius: '16px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const Home: NextPage = () => {

  const classes = useStyles()

  const [inputUser, setInputUser] = useState('octocat');
  const [data, setData] = useState({})

  const gettingUser = async (user: String) => {
    const userResponse = await getGitHubUser(user)

    if (inputUser === 'octocat') {
      localStorage.setItem('octocat', userResponse)
    }
    if (userResponse.message === 'Not Found') {
      const { octocat } = localStorage;
      return setData(octocat)
    }
    setData(userResponse)
  }

  useEffect(() => {
    gettingUser(inputUser)
  }, [inputUser])


  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: 500,
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard data={data} />
    </Container>
  )
}

export default Home

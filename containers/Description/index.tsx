import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Fragment } from 'react'
import LocationInformation from '../../components/LocationInformation'
import { Props } from '../../TypeProps'
import PaperInformation from '../PaperInformatio'

const Description = ({ data }: Props) => {

  const { bio } = data


  return (
    <Fragment>
      <Stack sx={{ justifyContent: 'center' }} >
        {bio
          ? <Typography variant='body1'>{bio}</Typography>
          : <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium distinctio ducimus consequuntur velit excepturi consectetur perspiciatis debitis est qui amet sed fuga vero molestias soluta sit, repellat veniam delectus.</Typography>
        }
      </Stack>
      <PaperInformation data={data} />
      <LocationInformation data={data} />
    </Fragment>
  )
}

export default Description
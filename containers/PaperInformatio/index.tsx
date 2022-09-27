import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Props } from '../../TypeProps'

const PaperInformation = ({ data }: Props) => {

    const { public_repos, followers, following } = data

    return (
        <Paper elevation={3} sx={{ padding: '25px 0' }}>
            <Stack direction='row' spacing={3} sx={{ justifyContent: 'space-evenly' }} >
                <Stack>
                    <Typography variant='h5'>Respos</Typography>
                    <Typography variant='h6' sx={{ margin: '0 auto' }}>{public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography variant='h5' sx={{ margin: '0 auto' }}>Followers</Typography>
                    <Typography variant='h6' sx={{ margin: '0 auto' }}>{followers}</Typography>
                </Stack>
                <Stack>
                    <Typography variant='h5'>Following</Typography>
                    <Typography variant='h6' sx={{ margin: '0 auto' }}>{following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default PaperInformation
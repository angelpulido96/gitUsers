import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Props } from '../../TypeProps'

const PrincipalInformation = ({ data }: Props) => {

    const { name, login, created_at } = data

    return (
        <Fragment>
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h4' >{name}</Typography>
                <Typography variant='subtitle2'>{created_at}</Typography>
            </Stack>
            <Typography variant='caption'>{`@${login}`}</Typography>
        </Fragment>
    )
}

export default PrincipalInformation
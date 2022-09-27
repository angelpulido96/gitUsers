import { CardMedia, Grid, Stack } from '@mui/material';
import React from 'react'
import PrincipalInformation from '../../components/principalInformation';
import { Props } from '../../TypeProps';
import Description from '../Description';



const UserCard = ({ data }: Props) => {

    const { avatar_url } = data

    return (
        <Grid
            container
            mt={2}
            spacing={2}
        >
            <Grid item xs={12} md={3}>
                <CardMedia
                    component='img'
                    image={avatar_url}
                    alt='GitHub User'
                    sx={{
                        borderRadius: 50
                    }}
                />
            </Grid>
            <Grid item xs={12} md={9}>
                <Stack direction='column' spacing={1} sx={{ margin: '30px' }}>
                    <PrincipalInformation data={data} />
                    <Description data={data} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard
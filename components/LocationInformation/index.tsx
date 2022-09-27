import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Props } from '../../TypeProps'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import Link from 'next/link';

const LocationInformation = ({ data }: Props) => {

    const { location, twitter_username, blog, company } = data

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={6}>
                <Stack direction='row'>
                    <LocationOnIcon />
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row'>
                    <TwitterIcon />
                    {twitter_username
                        ? <Typography>@{twitter_username}</Typography>
                        : <Typography>Not Avaible</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row'>
                    <LanguageIcon />
                    {blog
                        ? <Link href={blog}><a target='_blank'>{blog}</a></Link>
                        : <Typography>Not Avaible</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row'>
                    <BusinessIcon />
                    {company
                        ? <Typography>{company}</Typography>
                        : <Typography>Not Avaible</Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation
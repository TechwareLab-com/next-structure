import * as React from 'react'
import { NextPage } from 'next'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box py={3}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant='h2'>My SaaS App</Typography>
            <Typography variant='subtitle1'>This is the subtitle</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant='contained' color='primary' endIcon={<MailOutlineIcon />}>
              Subscribe for updates
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default IndexPage
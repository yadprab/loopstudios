import React from 'react'
import {TextField, Button} from '@material-ui/core'
const Contact=()=> {
    return (
      <>
        <form action="">
          <TextField label="firstname" variant="outlined" />
          <TextField label="lastname" variant="outlined" />
          <TextField label="email" variant="outlined" />

          <Button variant="contained" color="secondary"  type='submit'> submit</Button>
        </form>
      </>
    );
}

export  {Contact}

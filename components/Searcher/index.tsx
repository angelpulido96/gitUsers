import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, ChangeEvent } from 'react'
import { InputUser } from '../../TypeProps';

const Searcher = ({ setInputUser }: InputUser) => {

  const [valueInput, setvalueInput] = useState('')

  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  const onSearchValueChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setvalueInput(value)
  }


  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%',

      }}>
      <TextField
        label='Github User'
        placeholder='Search user'
        variant='outlined'
        value={valueInput}
        onChange={onSearchValueChange}
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size='small'
                onClick={handleSubmit}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: '90%'
        }} />
    </Stack>
  )
}

export default Searcher
import { FormControl, Grid, TextField, Slider, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'

import { FORM_FIELDS, FormProps } from './types'

const CreateTodoForm = ({ control, onSave }: FormProps) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSave()
      }}
    >
      <input type="submit" style={{ display: 'none' }} />
      <Grid container spacing={3.5} sx={{ pt: 1, minWidth: 500 }}>
        <Grid item xs={12}>
          <Controller
            rules={{ required: true }}
            control={control}
            name={FORM_FIELDS.NAME}
            render={({ field, fieldState: { invalid, error, isTouched } }) => (
              <FormControl fullWidth>
                <TextField
                  required
                  label="TODO Name"
                  variant="outlined"
                  {...field}
                  error={isTouched && invalid}
                  helperText={isTouched && error?.message}
                  autoComplete="off"
                />
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            rules={{ required: true }}
            control={control}
            name={FORM_FIELDS.DESCRIPTION}
            render={({ field, fieldState: { invalid, error, isTouched } }) => (
              <FormControl fullWidth>
                <TextField
                  required
                  label="TODO Description"
                  variant="outlined"
                  {...field}
                  error={isTouched && invalid}
                  helperText={isTouched && error?.message}
                  autoComplete="off"
                />
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            rules={{ required: true }}
            control={control}
            name={FORM_FIELDS.PROGRESS}
            render={({ field, fieldState: { invalid, error, isTouched } }) => (
              <FormControl fullWidth>
                <TextField
                  required
                  label="TODO Progress"
                  type="number"
                  variant="outlined"
                  {...field}
                  error={isTouched && invalid}
                  helperText={isTouched && error?.message}
                  autoComplete="off"
                />
              </FormControl>
            )}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default CreateTodoForm

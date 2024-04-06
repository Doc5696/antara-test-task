import { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useSnackbar, SnackbarKey } from 'notistack'

const CloseSnackbarBtn = (snackbarId: SnackbarKey): ReactNode => {
  const { closeSnackbar } = useSnackbar()
  return (
    <IconButton
      sx={{ color: 'white', fontSize: 14 }}
      onClick={() => closeSnackbar(snackbarId)}
    >
      <CloseIcon />
    </IconButton>
  )
}

export default CloseSnackbarBtn

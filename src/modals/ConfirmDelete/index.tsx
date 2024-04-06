import NiceModal, { muiDialogV5, show, useModal } from '@ebay/nice-modal-react'
import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { BaseSyntheticEvent } from 'react'

import { ConfirmDeleteProps } from './types'

const ConfirmDelete = NiceModal.create<ConfirmDeleteProps>(({ onDelete }) => {
  const modal = useModal()

  return (
    <MuiDialog {...muiDialogV5(modal)} onClose={undefined}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <Typography>This action can not be undone</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
        <Button onClick={modal.hide} size="large" variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onDelete()
            modal.hide()
          }}
          size="large"
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </MuiDialog>
  )
})

export const showConfirmDelete = (
  event: BaseSyntheticEvent,
  onDelete: () => void,
) => {
  event.preventDefault()
  return show(ConfirmDelete, { onDelete })
}

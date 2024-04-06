import NiceModal, { muiDialogV5, show } from '@ebay/nice-modal-react'
import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { BaseSyntheticEvent } from 'react'

import { TodoSchema } from 'src/api/Todo/schemas'
import useCreateTodoForm from './hook'
import CreateTodoForm from './Form'
import { ModalProps } from './types'

const TodoModal = NiceModal.create<ModalProps>(({ data }) => {
  const { onSave, modal, control, isSubmitBtnDisabled } =
    useCreateTodoForm(data)

  return (
    <MuiDialog {...muiDialogV5(modal)} onClose={undefined}>
      <DialogTitle>Create new TODO</DialogTitle>
      <DialogContent>
        <CreateTodoForm
          control={control}
          onSave={isSubmitBtnDisabled ? () => {} : onSave}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
        <Button
          onClick={modal.hide}
          size="large"
          variant="outlined"
          color="error"
        >
          Cancel
        </Button>
        <Button
          onClick={onSave}
          size="large"
          variant="contained"
          disabled={isSubmitBtnDisabled}
        >
          Save
        </Button>
      </DialogActions>
    </MuiDialog>
  )
})

export const showCreateTodo = (event: BaseSyntheticEvent) => {
  event.preventDefault()
  return show(TodoModal)
}

export const showUpdateTodo = (event: BaseSyntheticEvent, data: TodoSchema) => {
  event.preventDefault()
  return show(TodoModal, { data })
}

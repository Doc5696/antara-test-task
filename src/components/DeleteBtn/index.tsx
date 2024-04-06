import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { IconButton } from '@mui/material'

import { DeleteBtnProps } from './types'

const DeleteBtn = ({ onClick }: DeleteBtnProps) => {
  return (
    <IconButton color="error" onClick={onClick}>
      <DeleteForeverIcon />
    </IconButton>
  )
}

export default DeleteBtn

import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'

import { EditBtnProps } from './types'

const EditBtn = ({ onClick }: EditBtnProps) => {
  return (
    <IconButton color="primary" onClick={onClick}>
      <EditIcon />
    </IconButton>
  )
}

export default EditBtn

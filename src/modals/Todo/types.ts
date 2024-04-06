import { Control } from 'react-hook-form'

import { TodoSchema } from 'src/api/Todo/schemas'

export enum FORM_FIELDS {
  ID = '_id',
  NAME = 'name',
  DESCRIPTION = 'description',
  PROGRESS = 'progress',
}

export type FormData = {
  [FORM_FIELDS.ID]: string
  [FORM_FIELDS.NAME]: string
  [FORM_FIELDS.DESCRIPTION]: string
  [FORM_FIELDS.PROGRESS]: number
}

export type FormProps = {
  control: Control<FormData, unknown>
  onSave: () => void
}

export type ModalProps = {
  data: TodoSchema
}

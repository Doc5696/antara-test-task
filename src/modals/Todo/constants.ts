import getTimeStamp from 'src/utils/getTimeStamp'
import { FORM_FIELDS, FormData } from './types'
import { TodoSchema } from 'src/api/Todo/schemas'

export const defaultValues: FormData = {
  [FORM_FIELDS.ID]: getTimeStamp().toString(),
  [FORM_FIELDS.NAME]: '',
  [FORM_FIELDS.DESCRIPTION]: '',
  [FORM_FIELDS.PROGRESS]: 0,
}

export const getDefaultValues = (data?: TodoSchema): FormData => {
  if (!data || !data?._id) return defaultValues
  return data
}

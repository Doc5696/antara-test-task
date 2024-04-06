import * as yup from 'yup'

import { FORM_FIELDS } from './types'

const validationSchema = yup
  .object()
  .shape({
    [FORM_FIELDS.ID]: yup.string().required(),
    [FORM_FIELDS.NAME]: yup.string().trim().required().label('TODO name'),
    [FORM_FIELDS.DESCRIPTION]: yup
      .string()
      .trim()
      .required()
      .label('TODO description'),
    [FORM_FIELDS.PROGRESS]: yup.number().required().label('TODO progress'),
  })
  .required()

export default validationSchema

export type TodoSchema = {
  _id: string
  name: string
  description: string
  progress: number
}

export type TodoProgressIoUpdateSchema = Pick<TodoSchema, '_id' | 'progress'>

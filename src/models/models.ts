export interface ITodo {
  id: string,
  name: string,
  isCompleted: boolean
}

export enum ETab {
  all = 'All',
  current = 'Current',
  completed = 'Completed'
}

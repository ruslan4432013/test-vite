import { GraphApi } from './types'
import { apiInstance } from '../base'

const BASE_URL = '/v1/graph'

type Params = {
  counter?: string
}

export const getGraph = (params?: Params): Promise<GraphApi> => {
  let counter = 'all'
  if (params?.counter) {
    counter = params.counter
  }

  return apiInstance.get(`${BASE_URL}/${counter}`)
}

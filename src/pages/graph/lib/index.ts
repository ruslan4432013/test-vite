import { Serie } from '@nivo/line'
import { GraphApi } from '@shared/api'

export const convertDataToGraph = (res: GraphApi): Serie[] => {
  const hashMap = new Map<string, number>()

  res.chartData.forEach(([x, y]) => {
    const xValue = hashMap.get(x)
    if (xValue) {
      const value = xValue + y
      hashMap.set(x, value)
    } else {
      hashMap.set(x, y)
    }
  })
  const data: { x: string, y: number }[] = []
  hashMap.forEach((y, x) => {
    data.push({ x, y })
  })
  return [{
    id: 'ElectroMain',
    data
  }]
}

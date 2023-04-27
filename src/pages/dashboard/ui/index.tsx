import {
  sharedColumns,
  defaultColumns,
  coinColumns,
  getSharedData,
  getCoinData,
  getProfitData,
  getTariffData,
  getConsumptionData,
  getIncomeData,
} from '../lib'
import { ColumnTable } from '@shared/ui/column-table'
import { useCallback, useEffect, useState } from 'react'
import { DashboardApi, dashboardApi } from '@shared/api'

export const DashboardPage = () => {
  const [dashboard, setDashboard] = useState<null | DashboardApi>(null)
  const getDashboard = useCallback(async () => {
    const data = await dashboardApi.getDashboard()
    setDashboard(data)
  }, [])
  useEffect(() => {
    getDashboard().catch(console.error)
  }, [])

  if (!dashboard) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnTable title={'Общие данные'} tableData={getSharedData(dashboard)} columns={sharedColumns}/>
        <ColumnTable title={'Крипта'} tableData={getCoinData(dashboard)} columns={coinColumns}/>
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnTable title={'Тариф'} tableData={getTariffData(dashboard)} columns={defaultColumns}/>
        <ColumnTable title={'Потребление'} tableData={getConsumptionData(dashboard)} columns={defaultColumns}/>
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnTable title={'Доход'} tableData={getIncomeData(dashboard)} columns={defaultColumns}/>
        <ColumnTable title={'Прибыль'} tableData={getProfitData(dashboard)} columns={defaultColumns}/>
      </div>
    </div>
  )
}

export default DashboardPage

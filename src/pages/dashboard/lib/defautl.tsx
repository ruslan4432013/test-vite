import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { DashboardApi } from '@shared/api'
import { convertNum } from '@shared/lib'

type RowObj = {
  noChanges: string;
  noPower: string;
  noTransport: string;
};

const columnHelper = createColumnHelper<RowObj>()

export const defaultColumns: ColumnDef<RowObj, string>[] = [
  columnHelper.accessor('noChanges', {
    id: 'noChanges',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        Без изменений
      </p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor('noPower', {
    id: 'noPower',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        Без мощности
      </p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor('noTransport', {
    id: 'noTransport',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        Без транспорта
      </p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
]


export const getTariffData = (res: DashboardApi): RowObj[] => {
  const { no_transport, no_power, no_changes } = res.tariff
  return [{
    noChanges: convertNum(no_changes),
    noPower: convertNum(no_power),
    noTransport: convertNum(no_transport),
  }]
}


export const getConsumptionData = (res: DashboardApi): RowObj[] => {
  const { no_transport, no_power, no_changes } = res.consumption
  return [{
    noChanges: convertNum(no_changes),
    noPower: convertNum(no_power),
    noTransport: convertNum(no_transport),
  }]
}


export const getIncomeData = (res: DashboardApi): RowObj[] => {
  const { rub: { no_transport, no_power, no_changes } } = res.earnings
  return [{
    noChanges: convertNum(no_changes),
    noPower: convertNum(no_power),
    noTransport: convertNum(no_transport),
  }]
}


export const getProfitData = (res: DashboardApi): RowObj[] => {
  const { no_transport, no_power, no_changes } = res.result
  return [{
    noChanges: convertNum(no_changes),
    noPower: convertNum(no_power),
    noTransport: convertNum(no_transport),
  }]
}



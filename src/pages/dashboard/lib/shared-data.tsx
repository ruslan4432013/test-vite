import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { DashboardApi } from '@shared/api'
import { convertNum } from '@shared/lib'

type RowObj = {
  power: string;
  electricity: string
  transport: string
};

const columnHelper = createColumnHelper<RowObj>()

export const sharedColumns: ColumnDef<RowObj, string>[] = [
  columnHelper.accessor('electricity', {
    id: 'electricity',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">Стоимость электричества</p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor('transport', {
    id: 'transport',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        Стоимость транспорта
      </p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor('power', {
    id: 'power',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        Стоимость мощности
      </p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
]

export const getSharedData = (response: DashboardApi): RowObj[] => {
  const {no_changes, no_power, no_transport} = response.costs
  return [
    {
      electricity: convertNum(no_changes),
      transport: convertNum(no_transport),
      power: convertNum(no_power),
    },
  ]
}


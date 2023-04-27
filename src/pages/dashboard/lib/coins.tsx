import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { DashboardApi } from '@shared/api'
import { convertNum } from '@shared/lib'

type RowObj = {
  name: string;
  noChanges: string;
  noPower: string;
  noTransport: string;
  coinVT: string
};

const columnHelper = createColumnHelper<RowObj>()

export const coinColumns: ColumnDef<RowObj, string>[] = [
  columnHelper.accessor('name', {
    id: 'name',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">Имя</p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
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
  columnHelper.accessor('coinVT', {
    id: 'coinVT',
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        Койн/Вт
      </p>
    ),
    cell: (info) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  }),
]


export const getCoinData = (res: DashboardApi): RowObj[] => {
  const bitcoin = res.bitcoin
  const litecoin = res.litecoin
  return [{
    name: 'Bitcoin',
    noChanges: convertNum(bitcoin.no_changes),
    noPower: `${convertNum(bitcoin.no_power)} (-${convertNum(bitcoin.no_power_loss)})`,
    noTransport: `${convertNum(bitcoin.no_transport)} (-${convertNum(bitcoin.no_transport_loss)})`,
    coinVT: bitcoin.power.toString(),
  },
    {
      name: 'Litecoin',
      noChanges: convertNum(litecoin.no_changes),
      noPower: `${convertNum(litecoin.no_power)} (-${convertNum(litecoin.no_power_loss)})`,
      noTransport: `${convertNum(litecoin.no_transport)} (-${convertNum(litecoin.no_transport_loss)})`,
      coinVT: convertNum(litecoin.power),
    },
  ]
}


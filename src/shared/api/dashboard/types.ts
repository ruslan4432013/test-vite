export interface DashboardApi {
  transport: number
  power: number
  power_cost: number
  transport_cost: number
  consumption: Consumption
  coin_consumption: CoinConsumption
  tariff: Tariff
  costs: Costs
  bitcoin: Bitcoin2
  litecoin: Litecoin2
  earnings: Earnings
  result: Result
  date: string
  hour: number
  cache_time: string
}

export interface Consumption {
  no_changes: number
  no_transport: number
  no_power: number
}

export interface CoinConsumption {
  bitcoin: Bitcoin
  litecoin: Litecoin
}

export interface Bitcoin {
  no_changes: number
  no_transport: number
  no_power: number
}

export interface Litecoin {
  no_changes: number
  no_transport: number
  no_power: number
}

export interface Tariff {
  no_changes: number
  no_transport: number
  no_power: number
}

export interface Costs {
  no_changes: number
  no_transport: number
  no_power: number
}

export interface Bitcoin2 {
  power: number
  no_changes: number
  no_transport: number
  no_power: number
  no_transport_loss: number
  no_power_loss: number
}

export interface Litecoin2 {
  power: number
  no_changes: number
  no_transport: number
  no_power: number
  no_transport_loss: number
  no_power_loss: number
}

export interface Earnings {
  usd: Usd
  rub: Rub
}

export interface Usd {
  no_changes: number
  no_transport: number
  no_power: number
  no_transport_loss: number
  no_power_loss: number
}

export interface Rub {
  no_changes: number
  no_transport: number
  no_power: number
  no_transport_loss: number
  no_power_loss: number
}

export interface Result {
  no_changes: number
  no_transport: number
  no_power: number
}


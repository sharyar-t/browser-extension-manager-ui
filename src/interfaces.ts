export interface IExtension {
  logo: string
  name: string
  description: string
  isActive: boolean
}

export enum IFilter {
  All = 'all',
  Active = 'active',
  Inactive = 'inactive'
}

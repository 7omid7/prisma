import { defineMatrix } from '../../_utils/defineMatrix'

export default defineMatrix(() => [
  [
    {
      provider: 'sqlite',
    },
    {
      provider: 'postgresql',
    },
    {
      provider: 'mysql',
    },
    {
      provider: 'cockroachdb',
    },
    {
      provider: 'mongodb',
    },
    {
      provider: 'sqlserver',
    },
  ],
])

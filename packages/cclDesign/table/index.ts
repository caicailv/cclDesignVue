import { install } from '../_utils'
import Table from './src/table.vue'
Table.name = 'CTable'
export const CTable = install(Table)
console.log('CTable',CTable);

export const STATUSES = ['normal', 'success', 'warning', 'danger'] as const
export type Status = typeof STATUSES[number]
export const SIZES = ['mini', 'small', 'medium', 'large'] as const
export type Size = typeof SIZES[number]

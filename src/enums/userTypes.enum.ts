export const Type = ['ADMIN', 'MOD', 'VENDEDOR', 'CLIENTE'] as const;

export type Types = typeof Type[number];

import { z } from 'zod';

export const dateOptional = z.preprocess(val => !val ? null : val, z.string({ message: 'Tanggal tidak valid' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Tanggal tidak valid")
    .refine(
        (value) => !isNaN(Date.parse(value)),
        "Tanggal tidak valid"
    )
    .nullable())
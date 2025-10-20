import { z, ZodType } from 'zod';

export const varChar255Optional = z.preprocess(val => !val ? null : val, z.string().max(255, 'Maksimal 255 karakter').nullable())

export const varChar50Optional = z.preprocess(val => !val ? null : val, z.string().max(50, 'Maksimal 50 karakter').nullable())

export const textOptional = z.preprocess(val => !val ? null : val, z.string().nullable())

export const idOptional = z.preprocess(val => !val ? null : val, z.int().positive().nullable())

export const numberOptional = z.preprocess(val => !val ? null : val, z.number().nullable())

export const booleanNumberOptional = z.preprocess(val => !val ? null : val, z.number().min(1).max(2).nullable())

export const dateOptional = z.preprocess(val => !val ? null : val, z.string({ message: 'Tanggal tidak valid' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Tanggal tidak valid")
    .refine(
        (value) => !isNaN(Date.parse(value)),
        "Tanggal tidak valid"
    )
    .nullable())

export const arrayOptional = z.preprocess(val => !val ? null : val,  z.array(z.int().positive()).nullable());

export const tableOptional = (schema: ZodType, exceptField: string) =>
    z.preprocess((val) => {
      // Empty array
      if (!val) return null;

      if (Array.isArray(val)) {
        const first = {...val[0]};
        delete first[exceptField];

        // First array field is empty
        const isFirstRowEmpty =
          first &&
          Object.values(first).every(
            (v) => v === "" || v === null || v === undefined
          );

        if (isFirstRowEmpty) {
          return null;
        }
      }

      return val; 
    }, schema)

// export const arrayRequired = z.array(z.coerce.number()).refine((value) => value.some((item) => item), {
//     error: 'Minimal pilih satu'
// });
import { z, ZodType } from 'zod';

export const dateOptional = z.preprocess(val => !val ? null : val, z.string({ message: 'Tanggal tidak valid' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Tanggal tidak valid")
    .refine(
        (value) => !isNaN(Date.parse(value)),
        "Tanggal tidak valid"
    )
    .nullable())

export const arrayOptional = z.preprocess(val => !val ? null : val,  z.array(z.coerce.number()).nullable());

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
import { z } from 'zod';

export const varChar255Optional = z.string().max(255, 'Maksimal 255 karakter').transform(val => !val ? null : val).nullable()

export const varChar50Optional = z.string().max(50, 'Maksimal 50 karakter').transform(val => !val ? null : val).nullable()

export const textOptional = z.string().transform(val => !val ? null : val).nullable()

export const idOptional = z.int().positive().transform(val => !val ? null : val).nullable()

export const numberOptional = z.number().transform(val => !val ? null : val).nullable()

export const booleanNumberOptional = z.number().min(1).max(2).transform(val => !val ? null : val).nullable()

export const emailOptional = z.string().regex(/^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/, ).transform(val => !val ? null : val).nullable()

export const dateOptional = z
    .string('Tanggal tidak valid.')
    .regex(/^$|^\d{4}-\d{2}-\d{2}$/, "Tanggal tidak valid")
    .refine(
      (value) => !value || !isNaN(Date.parse(value)),
      "Tanggal tidak valid"
    )
    .transform(val => !val ? null : val)
    .nullable()

export const arrayOptional = z.array(z.int().positive()).transform((val) => val.length > 0 ? val : null).nullable();

// export const tableOptional = (schema: ZodType, exceptField: string) =>
//     z.preprocess((val) => {
//       // Empty array
//       if (!val) return null;

//       if (Array.isArray(val)) {
//         const first = {...val[0]};
//         delete first[exceptField];

//         // First array field is empty
//         const isFirstRowEmpty =
//           first &&
//           Object.values(first).every(
//             (v) => v === "" || v === null || v === undefined
//           );

//         if (isFirstRowEmpty) {
//           return null;
//         }
//       }

//       return val; 
//     }, schema)

// export const arrayRequired = z.array(z.coerce.number()).refine((value) => value.some((item) => item), {
//     error: 'Minimal pilih satu'
// });
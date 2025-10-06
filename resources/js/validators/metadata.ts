import dayjs from 'dayjs';
import { z } from 'zod';

export const metadataStoreSchema = z.object({
    activity_title: z.string('Wajib diisi').min(3, 'Minimal 3 karakter').max(255, 'Maksimal 255 karakter'),
    activity_year: z.coerce
        .number('Wajib diisi')
        .int()
        .min(1900, 'Masukkan tahun yang valid')
        .max(dayjs().year(), 'Maksimal dilaksanakan tahun ini'),
    data_collection_approach_id: z.coerce.number('Wajib diisi').int(),
    activity_sector_id: z.coerce.number('Wajib diisi').int(),
    statistical_activity_type_id: z.coerce.number('Wajib diisi').int(),
    statistical_activity_recommendation: z.coerce.number('Wajib diisi').int().min(1).max(2),
    recommendation_identity: z.string().max(255, 'Maksimal 255 karakter').nullable(),
});

export type MetadataStoreType = z.infer<typeof metadataStoreSchema>;

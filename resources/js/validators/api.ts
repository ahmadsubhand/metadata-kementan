import z from "zod";

export const apiTokenRequestSchema = z.object({
    application_name: z.string('Wajib diisi').nonempty('Wajib diisi'),
    application_description: z.string('Wajib diisi').nonempty('Wajib diisi')
})

export type apiTokenRequestType = z.infer<typeof apiTokenRequestSchema>;

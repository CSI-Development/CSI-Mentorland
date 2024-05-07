import z from 'zod';

export const uploadImageData = z.object({
    file: z.any()
});

export type IUploadImage = z.TypeOf<typeof uploadImageData>;

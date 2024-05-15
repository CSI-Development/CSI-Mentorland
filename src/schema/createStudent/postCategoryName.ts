import z from 'zod';

export const postCategoryName = z.object({
    catcategoryList: z.string(),
  });

export type IPostCategoryName = z.TypeOf<typeof postCategoryName>;

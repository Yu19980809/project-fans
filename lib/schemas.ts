import { z } from 'zod'

export const UpdateUserSchema = z.object({
  name: z.string().min(1, { message: 'Name must be atleast 1 chacracter.' }),
  username: z.string().min(1, { message: 'Username must be atleast 1 chacracter.' }),
  bio: z.string().min(1, { message: 'Bio must be atleast 1 chacracter.' }),
  profileImage: z.string().min(1, { message: 'Profile image is required.' }),
  coverImage: z.string().min(1, { message: 'Cover image is required.' })
})

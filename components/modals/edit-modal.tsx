import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { UserInfo } from '@/lib/tyeps'
import { UpdateUserSchema } from '@/lib/schemas'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '../ui/button'
import Loader from '../global/loader'
import ImageUpload from '../global/image-upload'
import { updateUserInfo } from '@/actions/users'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

type Props = {
  open: boolean
  user: UserInfo
  setOpen: React.Dispatch<boolean>
}

const EditModal = ({
  open,
  user,
  setOpen
}: Props) => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      name: user?.name || '',
      username: user?.username || '',
      bio: user?.bio || '',
      profileImage: user?.image || '',
      coverImage: user?.coverImage || ''
    }
  })

  const onSubmit = (values: z.infer<typeof UpdateUserSchema>) => {
    setIsLoading(true)
    
    updateUserInfo(user?.id!, values)
      .then(() => router.refresh())
      .catch(() => toast.error('Failed to update profile'))
      .then(() => {
        setIsLoading(false)
        setOpen(false)
      })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your profile</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            <div className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Name</FormLabel>

                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="John Snow"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">User Name</FormLabel>

                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="John Snow"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="bio"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Bio</FormLabel>

                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Hello"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="profileImage"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Profile Image</FormLabel>

                    <FormControl>
                      <ImageUpload
                        label="Upload profile image"
                        onChange={(base64: any) => form.setValue('profileImage', base64)}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="coverImage"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Cover Image</FormLabel>

                    <FormControl>
                      <ImageUpload
                        label="Upload cover image"
                        onChange={(base64: any) => form.setValue('coverImage', base64)}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" disabled={isLoading}>
                  Cancel
                </Button>
              </DialogClose>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader /> : 'Submit'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditModal

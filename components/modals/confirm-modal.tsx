
import Loader from '@/components/global/loader'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ConfirmModalProps {
  title?: string
  description?: string
  isLoading?: boolean
  open: boolean
  setOpen: React.Dispatch<boolean>
  onSubmit: () => void
}

const ConfirmModal = ({
  open,
  title,
  description,
  isLoading,
  onSubmit,
  setOpen
}: ConfirmModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="py-4">{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="flex justify-end items-center gap-x-2">
            <Button
              variant="outline"
              disabled={isLoading}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button disabled={isLoading} onClick={onSubmit}>
              {isLoading ? <Loader /> : 'Continue'}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
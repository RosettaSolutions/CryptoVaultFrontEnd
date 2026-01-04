import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Check, X, Coins } from "lucide-react"

interface CreditCostDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onAgree: () => void
  onDisagree: () => void
  currentCredits: number
}

export function CreditCostDialog({
  isOpen,
  onOpenChange,
  onAgree,
  onDisagree,
  currentCredits,
}: CreditCostDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Send To Blockchain</DialogTitle>
          <DialogDescription className="pt-2">
            Using the "send to blockchain" service will cost you <strong className="font-bold font-mono italic text-sky-400"> 1 Credit</strong>.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex items-center gap-2">
          <Coins className="h-5 w-5 text-sky-400" />
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Available Credits: <span className="font-bold font-mono italic text-sky-400">{currentCredits}</span>
          </p>
        </div>
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
          <Button onClick={onAgree} className="w-full sm:w-auto">
             <Check className="h-4 w-4" /> Agree
          </Button>
          <Button variant="outline" onClick={onDisagree} className="w-full sm:w-auto">
             <X className="h-4 w-4" /> Disagree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

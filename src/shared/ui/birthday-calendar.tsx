
import { useState } from "react"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { ChevronDownIcon } from "lucide-react"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface BirthdayCalendarProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
}

export const BirthdayCalendar: React.FC<BirthdayCalendarProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="justify-between font-normal"
          >
            {value ? value.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange?.(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

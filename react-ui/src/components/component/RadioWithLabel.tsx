/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nehs0S295ab
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "../../lib/utils";

export function RadioWithLabel({
  options,
  name,
  onChange,
  label = "",
  inline = false,
  className = "",
  ...props
}) {
  return (
    <div
      className={cn(
        "flex",
        inline && "flex-row items-center gap-4",
        !inline && "flex-col gap-2",
        className
      )}
    >
      {label && <Label htmlFor={name}>{label}:</Label>}
      <RadioGroup
        id={name}
        name={name}
        onValueChange={(value) => onChange({ target: { name, value } })}
        {...props}
        // className="flex items-center gap-4"
        className={cn(
          "flex",
          inline && "flex-row items-center gap-4",
          !inline && "flex-col"
        )}
      >
        {options.map((option) => (
          <div className="flex items-center gap-2" key={option.value}>
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-sm font-medium">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
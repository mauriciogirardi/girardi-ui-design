import { ReactNode, ComponentProps } from 'react'
import {
  Provider,
  StyledArrow,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode
  title: string
}

export function Tooltip({ children, title, ...props }: TooltipProps) {
  return (
    <Provider delayDuration={0.9}>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={10} {...props}>
          {title}
          <StyledArrow />
        </TooltipContent>
      </TooltipRoot>
    </Provider>
  )
}

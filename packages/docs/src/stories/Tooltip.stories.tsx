import { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Tooltip, TooltipProps } from '@girardi-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Cancel</Button>,
    title: 'Hello World',
    side: 'bottom',
  },
  argTypes: {
    side: {
      options: ['left', 'right', 'bottom', 'top'],
      control: { type: 'inline-radio' },
    },
  },

  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          gap: '$2',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const TooltipRight: StoryObj<TooltipProps> = {
  args: {
    children: <Text>John Doe</Text>,
    title: 'John Doe',
    side: 'right',
  },
}

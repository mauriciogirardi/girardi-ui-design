import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@girardi-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta

export const Primary: StoryObj<TextAreaProps> = {}

export const WithPlaceholder: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Write your message',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

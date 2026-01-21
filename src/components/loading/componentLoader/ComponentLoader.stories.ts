import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ComponentLoader from "./ComponentLoader.vue"

const meta = {
   title: "Feedback/ComponentLoader",
   component: ComponentLoader,
   tags: ["autodocs"],
   argTypes: {
      isLoading: { control: "boolean" },
   },
   args: {
      isLoading: true,
   },
} satisfies Meta<typeof ComponentLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Loading: Story = {
   args: {
      isLoading: true,
   },
}

export const Loaded: Story = {
   args: {
      isLoading: false,
   },
}

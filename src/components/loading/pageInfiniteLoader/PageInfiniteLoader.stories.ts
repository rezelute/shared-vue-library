import type { Meta, StoryObj } from "@storybook/vue3-vite"
import PageInfiniteLoader from "./PageInfiniteLoader.vue"

const meta = {
   title: "Feedback/PageInfiniteLoader",
   component: PageInfiniteLoader,
   tags: ["autodocs"],
   argTypes: {
      isLoading: { control: "boolean" },
   },
   args: {
      isLoading: true,
   },
} satisfies Meta<typeof PageInfiniteLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Loading: Story = {
   args: {
      isLoading: true,
   },
}

export const NotLoading: Story = {
   args: {
      isLoading: false,
   },
}

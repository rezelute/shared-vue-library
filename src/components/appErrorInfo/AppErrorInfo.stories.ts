import type { Meta, StoryObj } from "@storybook/vue3-vite"
import AppErrorInfo from "./AppErrorInfo.vue"

const meta = {
   title: "Feedback/AppErrorInfo",
   component: AppErrorInfo,
   tags: ["autodocs"],
   argTypes: {
      error: { control: "object" },
   },
   args: {
      error: { message: "Something went wrong!" },
   },
} satisfies Meta<typeof AppErrorInfo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      error: { message: "Something went wrong!" },
   },
}

export const WithCustomError: Story = {
   args: {
      error: { message: "Custom error message." },
   },
}

import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ActionConfirmMsg from "./ActionConfirmMsg.vue"

const meta = {
   title: "Feedback/ActionConfirmMsg",
   component: ActionConfirmMsg,
   tags: ["autodocs"],
   argTypes: {
      iconClass: { control: "text" },
   },
   args: {
      iconClass: "pi pi-envelope",
   },
} satisfies Meta<typeof ActionConfirmMsg>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      iconClass: "pi pi-envelope",
   },
}

export const CustomIcon: Story = {
   args: {
      iconClass: "pi pi-check-circle",
   },
}

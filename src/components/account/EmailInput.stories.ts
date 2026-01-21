import type { Meta, StoryObj } from "@storybook/vue3-vite"
import EmailInput from "./EmailInput.vue"

const meta = {
   title: "Account/EmailInput",
   component: EmailInput,
   tags: ["autodocs"],
   argTypes: {
      isSubmitClicked: { control: "boolean" },
      labelText: { control: "text" },
      email: { control: "text" },
   },
   args: {
      isSubmitClicked: false,
      labelText: "Email",
      email: "",
   },
} satisfies Meta<typeof EmailInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isSubmitClicked: false,
      labelText: "Email",
      email: "",
   },
}

export const WithValue: Story = {
   args: {
      email: "user@example.com",
   },
}

export const SubmitClicked: Story = {
   args: {
      isSubmitClicked: true,
   },
}

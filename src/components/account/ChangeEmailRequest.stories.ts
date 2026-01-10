import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ChangeEmailRequest from "./ChangeEmailRequest.vue"

const meta = {
   title: "Account/ChangeEmailRequest",
   component: ChangeEmailRequest,
   tags: ["autodocs"],
   argTypes: {
      isEmailSent: { control: "boolean" },
      loading: { control: "boolean" },
   },
   args: {
      isEmailSent: false,
      email: "user@example.com",
      loading: false,
   },
} satisfies Meta<typeof ChangeEmailRequest>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isEmailSent: false,
      email: "user@example.com",
      loading: false,
   },
}

export const Loading: Story = {
   args: {
      isEmailSent: false,
      email: "user@example.com",
      loading: true,
   },
}

export const EmailSent: Story = {
   args: {
      isEmailSent: true,
      email: "user@example.com",
      loading: false,
   },
}

export const InvalidEmail: Story = {
   args: {
      isEmailSent: false,
      email: "invalid-email",
      loading: false,
   },
   parameters: {
      docs: {
         description: {
            story: "Click the button to see the error.",
         },
      },
   },
}

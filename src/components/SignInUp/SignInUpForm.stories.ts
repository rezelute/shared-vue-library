import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SignInUpForm from "./SignInUpForm.vue"

const meta = {
   title: "SignInUp/SignInUpForm",
   component: SignInUpForm,
   tags: ["autodocs"],
   argTypes: {
      pageAuthType: { control: { type: "select", options: ["signIn", "signUp"] } },
      signupInviteOnly: { control: "boolean" },
      isSignUpLoading: { control: "boolean" },
   },
   args: {
      pageAuthType: "signIn",
      signupInviteOnly: false,
      isSignUpLoading: false,
      email: "",
   },
} satisfies Meta<typeof SignInUpForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      pageAuthType: "signIn",
      signupInviteOnly: false,
      isSignUpLoading: false,
      email: "",
   },
}

export const SignUp: Story = {
   args: {
      pageAuthType: "signUp",
      email: "",
   },
}

export const Loading: Story = {
   args: {
      isSignUpLoading: true,
      email: "",
   },
}

export const InviteOnly: Story = {
   args: {
      signupInviteOnly: true,
      pageAuthType: "signUp",
      email: "",
   },
}

export const WithGoogleAuth: Story = {
   args: {
      pageAuthType: "signIn",
      enableThirdPartyAuth: { useGoogle: true },
      email: "",
   },
}

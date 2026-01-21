import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SignInUpVerifyCode from "./SignInUpVerifyCode.vue"

const meta = {
   title: "SignInUp/SignInUpVerifyCode",
   component: SignInUpVerifyCode,
   tags: ["autodocs"],
   argTypes: {
      pageAuthType: { control: { type: "radio" }, options: ["signIn", "signUp"] },
      isSubmittingCode: { control: "boolean" },
      isResendingCode: { control: "boolean" },
      codeInputErrorMessage: { control: "text" },
   },
   args: {
      pageAuthType: "signIn",
      isSubmittingCode: false,
      isResendingCode: false,
      codeInputErrorMessage: "",
   },
} satisfies Meta<typeof SignInUpVerifyCode>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Submitting: Story = {
   args: {
      isSubmittingCode: true,
   },
}

export const Resending: Story = {
   args: {
      isResendingCode: true,
   },
}

// 1. Local invalid code (length < 6)
export const InvalidLength: Story = {
   args: {},
   parameters: {
      docs: {
         description: {
            story: "Shows error for code less than 6 characters (local validation).",
         },
      },
   },
   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const otpInputs = canvasElement.querySelectorAll('[data-test="auth-code-input"] input')
      const code = "123"
      otpInputs.forEach((input, idx) => {
         const el = input as HTMLInputElement
         if (el) {
            el.value = code[idx] || ""
            el.dispatchEvent(new Event("input", { bubbles: true }))
         }
      })
      const submitButton = canvasElement.querySelector(
         '[data-test="auth-verify-button"]'
      ) as HTMLButtonElement | null
      if (submitButton) {
         submitButton.click()
      }
   },
}

// 2. Server error (codeInputErrorMessage)
export const ServerError: Story = {
   args: {
      codeInputErrorMessage: "The code you entered is incorrect. You have 2 attempts left.",
   },
   parameters: {
      docs: {
         description: {
            story: "Shows backend/server error message for invalid code (codeInputErrorMessage).",
         },
      },
   },
   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const otpInputs = canvasElement.querySelectorAll('[data-test="auth-code-input"] input')
      const code = "123456"
      otpInputs.forEach((input, idx) => {
         const el = input as HTMLInputElement
         if (el) {
            el.value = code[idx] || ""
            el.dispatchEvent(new Event("input", { bubbles: true }))
         }
      })
      const submitButton = canvasElement.querySelector(
         '[data-test="auth-verify-button"]'
      ) as HTMLButtonElement | null
      if (submitButton) {
         submitButton.click()
      }
   },
}
// 3. Valid code (no error, 6 digits)
export const ValidCode: Story = {
   args: {
      codeInputErrorMessage: "",
   },
   parameters: {
      docs: {
         description: {
            story: "Valid code entered (6 digits, no error message).",
         },
      },
   },
   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const otpInputs = canvasElement.querySelectorAll('[data-test="auth-code-input"] input')
      const code = "123456"
      otpInputs.forEach((input, idx) => {
         const el = input as HTMLInputElement
         if (el) {
            el.value = code[idx] || ""
            el.dispatchEvent(new Event("input", { bubbles: true }))
         }
      })
      const submitButton = canvasElement.querySelector(
         '[data-test="auth-verify-button"]'
      ) as HTMLButtonElement | null
      if (submitButton) {
         submitButton.click()
      }
   },
}

export const SignUpMode: Story = {
   args: {
      pageAuthType: "signUp",
   },
}

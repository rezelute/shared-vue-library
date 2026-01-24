import type { Meta, StoryObj } from "@storybook/vue3-vite"
import FormField from "./FormField.vue"

const meta = {
   title: "FormField/FormField",
   component: FormField,
   tags: ["autodocs"],
   argTypes: {
      id: { control: "text" },
      label: { control: "text" },
      helper: { control: "text" },
      error: { control: "text" },
   },
   args: {
      id: "field-id",
      label: "Label",
      helper: "Helper text",
      error: "",
   },
} satisfies Meta<typeof FormField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      id: "field-id",
      label: "Label",
      helper: "Helper text",
      error: "",
   },
}

export const WithError: Story = {
   args: {
      error: "This is an error message.",
   },
}

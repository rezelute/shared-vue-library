import type { Meta, StoryObj } from "@storybook/vue3-vite"
import InputText from "primevue/inputtext"
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
   render: (args) => ({
      components: { FormField, InputText },
      setup: () => ({ args }),
      template: `<FormField v-bind="args">
         <InputText placeholder="Type here..." class="w-full" />
      </FormField>`,
   }),
}

export const WithError: Story = {
   args: {
      error: "This is an error message.",
   },
   render: (args) => ({
      components: { FormField, InputText },
      setup: () => ({ args }),
      template: `<FormField v-bind="args">
         <InputText placeholder="Type here..." class="w-full" />
      </FormField>`,
   }),
}

export const ShowSkeleton: Story = {
   args: {
      showSkeleton: true,
      skeletonHeight: "32px",
      label: "Loading Field",
      helper: "This field is loading...",
   },
   render: (args) => ({
      components: { FormField, InputText },
      setup: () => ({ args }),
      template: `<FormField v-bind="args">
        <InputText placeholder="Type here..." class="w-full" />
      </FormField>`,
   }),
}

export const CustomSkeletonHeight: Story = {
   args: {
      showSkeleton: true,
      skeletonHeight: "48px",
      label: "Custom Height Skeleton",
      helper: "Skeleton with custom height (48px)",
   },
   render: (args) => ({
      components: { FormField, InputText },
      setup: () => ({ args }),
      template: `<FormField v-bind="args">
        <InputText placeholder="Type here..." class="w-full" />
      </FormField>`,
   }),
}

import type { Meta, StoryObj } from "@storybook/vue3-vite"
import NameInput from "./NameInput.vue"

const meta = {
   title: "FormField/NameInput",
   component: NameInput,
   tags: ["autodocs"],
   argTypes: {
      label: { control: "text" },
      placeholder: { control: "text" },
      isSubmitClicked: { control: "boolean" },
      isRequired: { control: "boolean" },
      name: { control: "text" },
   },
   args: {
      label: "Name",
      placeholder: "Enter your name",
      isSubmitClicked: false,
      isRequired: true,
      name: "",
   },
} satisfies Meta<typeof NameInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      label: "Name",
      placeholder: "Enter your name",
      isSubmitClicked: false,
      isRequired: true,
      name: "",
   },
}

export const WithValue: Story = {
   args: {
      name: "John Doe",
   },
}

export const SubmitClicked: Story = {
   args: {
      isSubmitClicked: true,
      name: "",
   },
}

export const NotRequired: Story = {
   args: {
      isRequired: false,
      name: "",
   },
}
// --- Show Skeleton Story ---
export const ShowSkeleton = {
   render: (args) => ({
      components: { NameInput },
      setup() {
         return { args }
      },
      template: `<NameInput v-bind="args" />`,
   }),
   args: {
      label: "Name",
      placeholder: "Enter your name",
      showSkeleton: true,
      isRequired: true,
      isSubmitClicked: false,
      name: "",
   },
   parameters: {
      docs: {
         description: {
            story: "Displays the NameInput with the skeleton loader active.",
         },
      },
   },
}

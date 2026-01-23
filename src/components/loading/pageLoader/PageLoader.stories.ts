import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"
import PageLoader from "./PageLoader.vue"

const meta = {
   title: "Feedback/PageLoader",
   component: PageLoader,
   tags: ["autodocs"],
   argTypes: {
      showLoading: { control: "boolean" },
      showError: { control: "boolean" },
      loadingText: { control: "text" },
      // No controls for slots, but we can show usage in stories
   },
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Loading, please wait...",
   },
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Loading, please wait...",
   },
}

export const WithCustomText: Story = {
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Fetching your data...",
   },
}

export const ErrorState: Story = {
   args: {
      showLoading: false,
      showError: true,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args, onRetry: fn() }),
      template: `<PageLoader v-bind="args" @retry="onRetry" />`,
   }),
}

export const ErrorStateDark: Story = {
   args: {
      showLoading: false,
      showError: true,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args, onRetry: fn() }),
      template: `
         <div class="dark bg-surface-800">
            <PageLoader v-bind="args" @retry="onRetry" />
         </div>
      `,
   }),
   parameters: {
      backgrounds: { default: "dark" },
   },
}

export const LoadedState: Story = {
   args: {
      showLoading: false,
      showError: false,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args }),
      template: `<PageLoader v-bind="args"><template #default><div style='padding:2rem;text-align:center;'>Loaded content!</div></template></PageLoader>`,
   }),
}

export const WithPreloadSlot: Story = {
   args: {
      showLoading: true,
      showError: false,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args }),
      template: `<PageLoader v-bind="args"><template #preloader><div style='padding:2rem;text-align:center;'>Custom Preloader...</div></template></PageLoader>`,
   }),
}

export const SpinnerWithLoadingText: Story = {
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Loading spinner with text...",
   },
}

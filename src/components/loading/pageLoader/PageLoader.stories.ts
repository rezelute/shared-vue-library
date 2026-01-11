import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"
import PageLoader from "./PageLoader.vue"

const meta = {
   title: "Feedback/PageLoader",
   component: PageLoader,
   tags: ["autodocs"],
   argTypes: {
      isLoading: { control: "boolean" },
      isError: { control: "boolean" },
      loadingText: { control: "text" },
      showPreloadSlot: { control: "boolean" },
      // No controls for slots, but we can show usage in stories
   },
   args: {
      isLoading: true,
      isError: false,
      loadingText: "Loading, please wait...",
      showPreloadSlot: false,
   },
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isLoading: true,
      isError: false,
      loadingText: "Loading, please wait...",
      showPreloadSlot: false,
   },
}

export const WithCustomText: Story = {
   args: {
      isLoading: true,
      isError: false,
      loadingText: "Fetching your data...",
      showPreloadSlot: false,
   },
}

export const ErrorState: Story = {
   args: {
      isLoading: false,
      isError: true,
      loadingText: "",
      showPreloadSlot: false,
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args, onRetry: fn() }),
      template: `<PageLoader v-bind="args" @retry="onRetry" />`,
   }),
}

export const LoadedState: Story = {
   args: {
      isLoading: false,
      isError: false,
      loadingText: "",
      showPreloadSlot: false,
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args }),
      template: `<PageLoader v-bind="args"><template #default><div style='padding:2rem;text-align:center;'>Loaded content!</div></template></PageLoader>`,
   }),
}

export const WithPreloadSlot: Story = {
   args: {
      isLoading: true,
      isError: false,
      loadingText: "",
      showPreloadSlot: true,
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args }),
      template: `<PageLoader v-bind="args"><template #preloader><div style='padding:2rem;text-align:center;'>Custom Preloader...</div></template></PageLoader>`,
   }),
}

export const SpinnerWithLoadingText: Story = {
   args: {
      isLoading: true,
      isError: false,
      loadingText: "Loading spinner with text...",
      showPreloadSlot: true,
   },
}

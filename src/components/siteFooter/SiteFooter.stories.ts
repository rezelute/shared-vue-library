import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SiteFooter from "./SiteFooter.vue"

const meta = {
   title: "Layout/SiteFooter",
   component: SiteFooter,
   tags: ["autodocs"],
} satisfies Meta<typeof SiteFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

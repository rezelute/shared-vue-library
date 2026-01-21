import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SiteNavigation from "./SiteNavigation.vue"

const meta = {
   title: "Navigation/SiteNavigation",
   component: SiteNavigation,
   tags: ["autodocs"],
   argTypes: {
      items: { control: "object" },
      userSignedIn: { control: "boolean" },
   },
   args: {
      items: [
         { label: "Home", icon: "pi pi-home", to: "/home" },
         { label: "Profile", icon: "pi pi-user", to: "/profile" },
      ],
      userSignedIn: false,
   },
} satisfies Meta<typeof SiteNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const SignedOut: Story = {
   args: {
      userSignedIn: false,
   },
}

export const SignedIn: Story = {
   args: {
      userSignedIn: true,
   },
}

export const CustomLinks: Story = {
   args: {
      userSignedIn: true,
      items: [
         { label: "Dashboard", icon: "pi pi-chart-bar", to: "/dashboard" },
         { label: "Settings", icon: "pi pi-cog", to: "/settings" },
      ],
   },
}

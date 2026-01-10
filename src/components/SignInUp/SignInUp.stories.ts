import type { StoryFn } from "@storybook/vue3"
import type { Component } from "vue"
import SignInUp from "./SignInUp.vue"

export default {
   title: "Auth/SignInUp",
   component: SignInUp,
   argTypes: {
      signupInviteOnly: { control: "boolean" },
   },
}

// interface SignInUpArgs {
//    signupInviteOnly: boolean;
// }

// const Template: StoryFn<{ signupInviteOnly: boolean }> = (args: SignInUpArgs) => ({
//    components: { SignInUp: SignInUp as Component },
//    setup() {
//       return { args };
//    },
//    template: '<SignInUp v-bind="args" />',
// });

// export const Default = Template.bind({})
// Default.args = {
//    signupInviteOnly: true,
// }

// export const InviteOnlyOff = Template.bind({})
// InviteOnlyOff.args = {
//    signupInviteOnly: false,
// }

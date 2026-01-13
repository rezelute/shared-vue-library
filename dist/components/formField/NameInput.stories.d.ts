import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        name: string | null;
    } & {
        label?: string;
        placeholder?: string;
        isSubmitClicked?: boolean;
        isRequired?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:name": (value: string | null) => any;
    } & {
        "validity-changed": (value: boolean) => any;
    }, string, import('vue').PublicProps, Readonly<{
        name: string | null;
    } & {
        label?: string;
        placeholder?: string;
        isSubmitClicked?: boolean;
        isRequired?: boolean;
    }> & Readonly<{
        "onValidity-changed"?: ((value: boolean) => any) | undefined;
        "onUpdate:name"?: ((value: string | null) => any) | undefined;
    }>, {
        isSubmitClicked: boolean;
        isRequired: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        label: {
            control: string;
        };
        placeholder: {
            control: string;
        };
        isSubmitClicked: {
            control: string;
        };
        isRequired: {
            control: string;
        };
        name: {
            control: string;
        };
    };
    args: {
        label: string;
        placeholder: string;
        isSubmitClicked: boolean;
        isRequired: boolean;
        name: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const SubmitClicked: Story;
export declare const NotRequired: Story;

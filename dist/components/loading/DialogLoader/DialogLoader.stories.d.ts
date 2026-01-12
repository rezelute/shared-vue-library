import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        visible: boolean;
        headerText: string;
        loadingText?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        visible: boolean;
        headerText: string;
        loadingText?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        visible: {
            control: string;
        };
        headerText: {
            control: string;
        };
        loadingText: {
            control: string;
        };
    };
    args: {
        visible: boolean;
        headerText: string;
        loadingText: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Hidden: Story;
export declare const WithNoText: Story;
export declare const CustomHeader: Story;

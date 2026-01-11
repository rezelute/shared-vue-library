import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            email?: string;
        } & {
            isEmailSent: boolean;
            isLoading?: boolean;
        }> & Readonly<{
            "onUpdate:email"?: ((value: string) => any) | undefined;
            onRequestEmailChange?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            requestEmailChange: (...args: any[]) => void;
            "update:email": (value: string) => void;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            email?: string;
        } & {
            isEmailSent: boolean;
            isLoading?: boolean;
        }> & Readonly<{
            "onUpdate:email"?: ((value: string) => any) | undefined;
            onRequestEmailChange?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        email?: string;
    } & {
        isEmailSent: boolean;
        isLoading?: boolean;
    }> & Readonly<{
        "onUpdate:email"?: ((value: string) => any) | undefined;
        onRequestEmailChange?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        requestEmailChange: (...args: any[]) => void;
        "update:email": (value: string) => void;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {
                id: string;
            }): any;
        };
    });
    tags: string[];
    argTypes: {
        isEmailSent: {
            control: string;
        };
        loading: {
            control: string;
        };
    };
    args: {
        isEmailSent: boolean;
        email: string;
        loading: boolean;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const EmailSent: Story;
export declare const InvalidEmail: Story;

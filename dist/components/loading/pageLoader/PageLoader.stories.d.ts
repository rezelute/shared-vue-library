import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            isLoading: boolean;
            loadingText?: string;
            showPreloadSlot?: boolean;
            isError?: boolean;
        }> & Readonly<{
            onRetry?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            retry: () => any;
        }, import('vue').PublicProps, {
            isLoading: boolean;
            showPreloadSlot: boolean;
            isError: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            isLoading: boolean;
            loadingText?: string;
            showPreloadSlot?: boolean;
            isError?: boolean;
        }> & Readonly<{
            onRetry?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            isLoading: boolean;
            showPreloadSlot: boolean;
            isError: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        isLoading: boolean;
        loadingText?: string;
        showPreloadSlot?: boolean;
        isError?: boolean;
    }> & Readonly<{
        onRetry?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        retry: () => any;
    }, string, {
        isLoading: boolean;
        showPreloadSlot: boolean;
        isError: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            preloader?(_: {}): any;
            error?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        isLoading: {
            control: string;
        };
        isError: {
            control: string;
        };
        loadingText: {
            control: string;
        };
        showPreloadSlot: {
            control: string;
        };
    };
    args: {
        isLoading: boolean;
        isError: boolean;
        loadingText: string;
        showPreloadSlot: boolean;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithCustomText: Story;
export declare const ErrorState: Story;
export declare const LoadedState: Story;
export declare const WithPreloadSlot: Story;
export declare const SpinnerWithLoadingText: Story;

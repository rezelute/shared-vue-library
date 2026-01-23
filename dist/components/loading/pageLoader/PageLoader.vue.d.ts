type __VLS_Props = {
    showLoading: boolean;
    loadingText?: string;
    showError?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        preloader?(_: {}): any;
        error?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    retry: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRetry?: ((...args: any[]) => any) | undefined;
}>, {
    showLoading: boolean;
    showError: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

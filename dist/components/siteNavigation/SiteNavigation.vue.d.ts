interface InputMenuLink {
    label: string;
    icon: string;
    to: string;
    testId?: string;
}
type __VLS_Props = {
    items: InputMenuLink[];
    userSignedIn: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
    };
    refs: {
        tieredMenu: ({
            $props: import('primevue').TieredMenuProps & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $slots: import('primevue').TieredMenuSlots;
            $emit: ((e: "blur", event: Event) => void) & ((e: "focus", event: Event) => void) & ((e: "before-show") => void) & ((e: "before-hide") => void) & ((e: "show") => void) & ((e: "hide") => void);
        } & import('primevue').TieredMenuMethods) | null;
    };
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    signOutClick: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSignOutClick?: ((...args: any[]) => any) | undefined;
}>, {
    userSignedIn: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tieredMenu: ({
        $props: import('primevue').TieredMenuProps & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $slots: import('primevue').TieredMenuSlots;
        $emit: ((e: "blur", event: Event) => void) & ((e: "focus", event: Event) => void) & ((e: "before-show") => void) & ((e: "before-hide") => void) & ((e: "show") => void) & ((e: "hide") => void);
    } & import('primevue').TieredMenuMethods) | null;
}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

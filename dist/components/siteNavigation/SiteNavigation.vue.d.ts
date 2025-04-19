interface MenuItem {
    label: string;
    icon: string;
    to: string;
}
type __VLS_Props = {
    items: MenuItem[];
    userSignedIn: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
    };
    refs: {
        menu: ({
            $props: import('primevue/menu').MenuProps & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $slots: import('primevue/menu').MenuSlots;
            $emit: ((e: "blur", event: Event) => void) & ((e: "focus", event: Event) => void) & ((e: "show") => void) & ((e: "hide") => void);
        } & import('primevue/menu').MenuMethods) | null;
    };
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    userSignedIn: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    menu: ({
        $props: import('primevue/menu').MenuProps & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $slots: import('primevue/menu').MenuSlots;
        $emit: ((e: "blur", event: Event) => void) & ((e: "focus", event: Event) => void) & ((e: "show") => void) & ((e: "hide") => void);
    } & import('primevue/menu').MenuMethods) | null;
}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

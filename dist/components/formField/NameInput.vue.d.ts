type __VLS_Props = {
    label?: string;
    placeholder?: string;
    isSubmitClicked?: boolean;
    isRequired?: boolean;
    showSkeleton?: boolean;
};
type __VLS_PublicProps = {
    "name": string | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:name": (value: string | null) => any;
} & {
    "validity-changed": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onValidity-changed"?: ((value: boolean) => any) | undefined;
    "onUpdate:name"?: ((value: string | null) => any) | undefined;
}>, {
    showSkeleton: boolean;
    isSubmitClicked: boolean;
    isRequired: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

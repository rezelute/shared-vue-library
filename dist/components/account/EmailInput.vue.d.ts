type __VLS_Props = {
    isSubmitClicked: boolean;
    labelText?: string;
};
type __VLS_PublicProps = {
    "email": string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:email": (value: string) => any;
} & {
    "validity-changed": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onValidity-changed"?: ((value: boolean) => any) | undefined;
    "onUpdate:email"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

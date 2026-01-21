type __VLS_Props = {
    authType?: "sign-in" | "sign-up";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    signInClick: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSignInClick?: ((...args: any[]) => any) | undefined;
}>, {
    authType: "sign-in" | "sign-up";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;

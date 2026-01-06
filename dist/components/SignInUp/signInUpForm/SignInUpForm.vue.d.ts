type __VLS_Props = {
    pageAuthType: "Sign in" | "Sign up";
    apiDomain: string;
};
type __VLS_PublicProps = {
    "email": string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    googleSignInError: (...args: any[]) => void;
    sendCodeSuccess: (...args: any[]) => void;
    signupStartError: (...args: any[]) => void;
    "update:email": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:email"?: ((value: string) => any) | undefined;
    onGoogleSignInError?: ((...args: any[]) => any) | undefined;
    onSendCodeSuccess?: ((...args: any[]) => any) | undefined;
    onSignupStartError?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

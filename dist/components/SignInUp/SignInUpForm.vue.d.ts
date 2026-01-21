type __VLS_Props = {
    pageAuthType: "signIn" | "signUp";
    isSignUpLoading: boolean;
    signupInviteOnly?: boolean;
    enableThirdPartyAuth?: {
        useGoogle?: boolean;
    };
};
type __VLS_PublicProps = {
    "email": string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    signUpStart: (...args: any[]) => void;
    googleSignIn: (...args: any[]) => void;
    "update:email": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:email"?: ((value: string) => any) | undefined;
    onSignUpStart?: ((...args: any[]) => any) | undefined;
    onGoogleSignIn?: ((...args: any[]) => any) | undefined;
}>, {
    pageAuthType: "signIn" | "signUp";
    signupInviteOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

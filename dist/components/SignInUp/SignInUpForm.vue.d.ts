type __VLS_Props = {
    pageAuthType: "sign-in" | "sign-up";
    isSignupLoading: boolean;
    isSignupInviteOnly?: boolean;
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
    pageAuthType: "sign-in" | "sign-up";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

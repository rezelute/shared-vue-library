type __VLS_Props = {
    pageAuthType: "Sign in" | "Sign up";
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    notify: (...args: any[]) => void;
    verificationCodeSuccess: (...args: any[]) => void;
    resendCodeSuccess: (...args: any[]) => void;
    restartFlow: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onNotify?: ((...args: any[]) => any) | undefined;
    onVerificationCodeSuccess?: ((...args: any[]) => any) | undefined;
    onResendCodeSuccess?: ((...args: any[]) => any) | undefined;
    onRestartFlow?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

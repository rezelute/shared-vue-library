type __VLS_Props = {
    pageAuthType: "sign-in" | "sign-up";
    codeInputErrorMessage?: string;
    isSubmittingCode: boolean;
    isResendingCode: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    codeSubmit: (...args: any[]) => void;
    codeResendSubmit: (...args: any[]) => void;
    restartFlow: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCodeSubmit?: ((...args: any[]) => any) | undefined;
    onCodeResendSubmit?: ((...args: any[]) => any) | undefined;
    onRestartFlow?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

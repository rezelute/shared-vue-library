declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
        signupInviteOnly?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        googleSignInError: (...args: any[]) => void;
        signupStartError: (...args: any[]) => void;
        verificationCodeSuccess: (...args: any[]) => void;
        verificationCodeError: (...args: any[]) => void;
        resendCodeSuccess: (...args: any[]) => void;
        resendCodeError: (...args: any[]) => void;
        checkMagicLinkSentError: (...args: any[]) => void;
        googleCallbackSuccess: (...args: any[]) => void;
        googleCallbackError: (...args: any[]) => void;
    }, string, import('vue').PublicProps, Readonly<{
        signupInviteOnly?: boolean;
    }> & Readonly<{
        onGoogleSignInError?: ((...args: any[]) => any) | undefined;
        onSignupStartError?: ((...args: any[]) => any) | undefined;
        onVerificationCodeSuccess?: ((...args: any[]) => any) | undefined;
        onVerificationCodeError?: ((...args: any[]) => any) | undefined;
        onResendCodeSuccess?: ((...args: any[]) => any) | undefined;
        onResendCodeError?: ((...args: any[]) => any) | undefined;
        onCheckMagicLinkSentError?: ((...args: any[]) => any) | undefined;
        onGoogleCallbackSuccess?: ((...args: any[]) => any) | undefined;
        onGoogleCallbackError?: ((...args: any[]) => any) | undefined;
    }>, {
        signupInviteOnly: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    argTypes: {
        signupInviteOnly: {
            control: string;
        };
    };
};
export default _default;

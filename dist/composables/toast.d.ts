import { ToastServiceMethods } from 'primevue/toastservice';
export interface AddToast {
    type: string;
    severity: "info" | "warn" | "error" | "success";
    summary: string;
    detail?: string;
    life?: number;
    json?: any;
}
export default function useToasting(toast: ToastServiceMethods): {
    addToast: (toastParam: AddToast) => void;
    messages: {
        error: {
            somethingWentWrong: {
                summary: string;
                detail: string;
            };
        };
        email: {
            requestChange: {
                success: {
                    summary: string;
                    detail: string;
                };
                error: {
                    sameEmail: {
                        summary: string;
                        detail: string;
                    };
                };
            };
            updateEmail: {
                success: {
                    summary: string;
                    detail: string;
                };
                error: {
                    invalidToken: {
                        summary: string;
                        detail: string;
                    };
                };
            };
        };
        account: {
            delete: {
                error: {
                    summary: string;
                    detail: string;
                };
                success: {
                    summary: string;
                    detail: string;
                };
            };
        };
        captcha: {
            verification: {
                error: {
                    summary: string;
                    detail: string;
                };
            };
        };
    };
};

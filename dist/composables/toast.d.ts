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
            updateFailSameEmail: {
                summary: string;
                detail: string;
            };
            updateSuccess: {
                summary: string;
                detail: string;
            };
        };
        account: {
            deleteError: {
                summary: string;
                detail: string;
            };
        };
    };
};

declare const messages: {
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
export default messages;

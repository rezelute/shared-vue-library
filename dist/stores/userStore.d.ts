declare const useUserStore: import('pinia').StoreDefinition<"userStore", Pick<{
    isFetchingSession: import('vue').Ref<boolean, boolean>;
    isSignedIn: import('vue').Ref<boolean, boolean>;
    updateAuth: (doesSessionExist: boolean) => Promise<void>;
}, "isFetchingSession" | "isSignedIn">, Pick<{
    isFetchingSession: import('vue').Ref<boolean, boolean>;
    isSignedIn: import('vue').Ref<boolean, boolean>;
    updateAuth: (doesSessionExist: boolean) => Promise<void>;
}, never>, Pick<{
    isFetchingSession: import('vue').Ref<boolean, boolean>;
    isSignedIn: import('vue').Ref<boolean, boolean>;
    updateAuth: (doesSessionExist: boolean) => Promise<void>;
}, "updateAuth">>;
export { useUserStore };

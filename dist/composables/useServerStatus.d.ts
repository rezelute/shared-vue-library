import { Ref } from 'vue';
export default function useServerStatus(apiDomainUrl: string): {
    checkServer: (isLoading: Ref<boolean>) => Promise<void>;
    connectionReady: Ref<boolean, boolean>;
};

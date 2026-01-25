import { Ref } from 'vue';
export default function useServerStatus(apiUrl: string): {
    checkServerHealth: () => Promise<void>;
    isHealthy: Ref<boolean, boolean>;
    isLoading: Ref<boolean, boolean>;
};

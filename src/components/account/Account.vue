<!-- <template>
   <PageLoader :isLoading="isLoading">
      <template #loadingText>
         <span v-if="deleteToken">Deleting your account...</span>
         <span v-else-if="updateEmailToken">Updating your email...</span>
         <span v-else>Loading your account...</span>
      </template>
      <template #default>
         <div v-if="!deleteToken && !updateEmailToken" class="max-w-xl">
            <slot id="header">
               <h1 class="h1 text-color">Your account</h1>
            </slot>

            <div class="vstack-page">
               <UserAccountId :apiUrl="props.apiURL"/>
               <UserAccountEmail :apiUrl="props.apiURL"/>

               <UserAccountId
                  class="card-p-sm"
                  :apiDomain="apiDomain"
               />
               <ChangeEmailRequest
                  class="card-p-sm"
                  :apiDomain="apiDomain"
                  @changeEmailRequestError="(...args) => $emit('changeEmailRequestError', ...args)"
                  @changeEmailActionSuccess="onChangeEmailActionSuccess"
               />
               <DeleteAccountRequest
                  class="card-p-sm"
                  :apiDomain="apiDomain"
                  @deleteAccountRequestError="
                     (...args) => $emit('deleteAccountRequestError', ...args)
                  "
                  @deleteAccountRequestSuccess="
                     (...args) => $emit('deleteAccountRequestSuccess', ...args)
                  "
               />
            </div>
         </div>
      </template>
   </PageLoader>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue"
import { useDeleteAccount } from "../../composables/account/useDeleteAccount"
import { type EmitNotify } from "../../types"
import { API_DOMAIN_KEY } from "../../utils/injectionKeys"
import PageLoader from "../loading/pageLoader/PageLoader.vue"
import ChangeEmailRequest from "./ChangeEmailRequest.vue"
import DeleteAccountRequest from "./DeleteAccountRequest.vue"
import UserAccountInfo from "./UserAccountInfo.vue"

const apiDomain = inject(API_DOMAIN_KEY) as string

const emits = defineEmits([
   "deleteAccountRequestError",
   "deleteAccountRequestSuccess",
   "changeEmailRequestError",
   "changeEmailRequestSuccess",
   "changeEmailActionError",
   "changeEmailActionSuccess",
   "deleteAccountError",
   "deleteAccountSuccess",
])

const props = defineProps<{
   deleteToken?: string | undefined
   updateEmailToken?: string | undefined
   apiURL: {
      deleteAccount: string
      updateEmail: string
   }
}>()

// data
// -----------------------------------------
// this is used to tell the UserAccountInfo component to refresh the email after a successful email change
// updates to the latest date and time
const isLoading = ref(false) // page loader state

// lifecycle
// -----------------------------------------

const { deleteAccount } = useDeleteAccount()



// methods
// -----------------------------------------
// function onChangeEmailActionSuccess(payload: EmitNotify) {
//    // update the date to trigger a refresh in UserAccountInfo component
//    updatedEmailDate.value = new Date()

//    emits("changeEmailActionSuccess", payload)
// }
</script>

<style scoped></style> -->

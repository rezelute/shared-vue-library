<template>
   <div class="vstack-form">
      <FormField id="profile_name" :label="label" :error="showNameError ? nameInvalidText : ''">
         <Textbox
            id="profile_name"
            v-model="name"
            :invalid="showNameError"
            :placeholder="placeholder"
            :required="isRequired"
            class="w-full"
         />
      </FormField>
   </div>
</template>
<script setup lang="ts">
import Textbox from "primevue/inputtext"
import { computed, onMounted, watch } from "vue"
import { z } from "zod"
import FormField from "@/components/formField/FormField.vue"

// props / emits
// -----------------------------------------
const emit = defineEmits<{
   (e: "validity-changed", value: boolean): void
}>()
const props = withDefaults(
   defineProps<{
      label?: string
      placeholder?: string
      isSubmitClicked?: boolean
      isRequired?: boolean
   }>(),
   {
      isSubmitClicked: false,
      isRequired: true,
   }
)

// lifecycle
// -----------------------------------------
onMounted(() => {
   emit("validity-changed", isNameValid())
})

// constants
// -----------------------------------------
const nameInvalidText = "Name can be letters only, at least 2 characters and max 50 characters"

// models
// -----------------------------------------
const name = defineModel<string | null>("name", { required: true })

// validation
// -----------------------------------------
function isNameValid() {
   const val = name.value ?? ""
   // If not required and empty, it's valid
   if (!props.isRequired && val.trim() === "") return true
   // If required or not empty, validate
   // Disallow only spaces
   if (val.trim().length === 0) return false
   return z.string().min(2).max(50).safeParse(val).success
}

// watchers
// -----------------------------------------
watch(name, () => {
   emit("validity-changed", isNameValid())
})

// computed
// -----------------------------------------
const showNameError = computed(() => props.isSubmitClicked && !isNameValid())
</script>

<template>
   <div class="vstack-form">
      <FormField id="profile_name" :label="label" :error="showNameError ? nameInvalidText : ''">
         <Textbox
            id="profile_name"
            v-model="name"
            :invalid="showNameError"
            :placeholder="placeholder"
            required
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
const props = defineProps<{
   isSubmitClicked: boolean
   label: string
   placeholder?: string
}>()

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
   return z.string().min(2).max(50).safeParse(name.value).success
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

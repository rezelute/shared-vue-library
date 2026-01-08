<template>
   <div class="vstack-form">
      <FormField id="profile_name" :label="nameLabel" :error="showNameError ? nameInvalidText : ''">
         <Textbox
            id="profile_name"
            :modelValue="name"
            :invalid="showNameError"
            :placeholder="nameLabel"
            required
            class="w-full"
            @update:modelValue="onNameInput"
         />
      </FormField>
   </div>
</template>

<script setup lang="ts">
import Textbox from "primevue/inputtext"
import { computed, onMounted } from "vue"
import { z } from "zod"
import FormField from "@/components/formField/FormField.vue"

// Emit
const emit = defineEmits<{
   (e: "validity-changed", value: boolean): void
}>()

// Props
const props = defineProps<{
   isSubmitClicked: boolean
   nameType: "first" | "last"
}>()

// Data
// -----------------------------------------
const nameInvalidText = "Name can be letters only, at least 2 characters and max 50 characters"
// Two-way binding
const name = defineModel<string>("name", { required: true })

// lifecycle
// -----------------------------------------
onMounted(() => {
   // Emit initial validity
   emit("validity-changed", isnameValid())
})

// computed
// -----------------------------------------
const showNameError = computed(() => props.isSubmitClicked && !isnameValid())

const nameLabel = computed(() => {
   return props.nameType === "first" ? "First name" : "Last name"
})

// methods
// -----------------------------------------
function isnameValid() {
   return z.string().min(2).max(50).safeParse(name.value).success
}

function onNameInput(value: string | undefined) {
   const sanitizedValue = value ?? ""
   name.value = sanitizedValue
   emit("validity-changed", isnameValid())
}
</script>

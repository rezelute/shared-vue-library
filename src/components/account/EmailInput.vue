<template>
   <FormField id="email" :label="labelText" :error="showError ? emailInvalidText : undefined">
      <Textbox
         id="email"
         :modelValue="email"
         :invalid="showError"
         placeholder="Email"
         required
         class="w-full"
         @update:modelValue="onInput"
      />
   </FormField>
</template>

<script setup lang="ts">
import Textbox from "primevue/inputtext";
import { computed, onMounted } from "vue";
import { z } from "zod";
import FormField from "../formField/FormField.vue";

function isEmailValid(email: string): boolean {
   const emailSchema = z.string().email();
   return emailSchema.safeParse(email).success;
}

// Two-way binding
const email = defineModel<string>("email", { required: true });

// Props
const props = defineProps<{
   isSubmitClicked: boolean;
   labelText?: string;
}>();

// Emit
const emit = defineEmits<{
   (e: "validity-changed", value: boolean): void;
}>();

const emailInvalidText = "Please enter a valid email address";

// lifecycle
// -----------------------------------------
onMounted(() => {
   // Emit initial validity
   emit("validity-changed", isEmailValid(email.value));
});

// computed
// -----------------------------------------
const showError = computed(() => props.isSubmitClicked && !isEmailValid(email.value));

// methods
// -----------------------------------------
function onInput(value: string | undefined) {
   const sanitizedValue = value ?? "";
   email.value = sanitizedValue;
   emit("validity-changed", isEmailValid(sanitizedValue));
}
</script>

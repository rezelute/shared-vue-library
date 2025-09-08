<template>
   <div class="vstack-form">
      <FormField id="firstName" label="First name" :error="showFirstNameError ? nameInvalidText : ''">
         <Textbox
            id="firstName"
            :modelValue="firstName"
            :invalid="showFirstNameError"
            placeholder="First name"
            required
            class="w-full"
            @update:modelValue="onFirstNameInput"
         />
      </FormField>

      <FormField
         id="lastName"
         :label="`Last name ${!isLastNameRequired ? '(optional)' : ''}`"
         :error="showLastNameError ? nameInvalidText : ''"
      >
         <Textbox
            id="lastName"
            :modelValue="lastName"
            :invalid="showLastNameError"
            placeholder="Last name"
            :required="isLastNameRequired"
            class="w-full"
            @update:modelValue="onLastNameInput"
         />
      </FormField>
   </div>
</template>

<script setup lang="ts">
import Textbox from "primevue/inputtext";
import { computed, onMounted } from "vue";
import { z } from "zod";
import FormField from "@/components/formField/FormField.vue";

// Emit
const emit = defineEmits<{
   (e: "validity-changed", value: boolean): void;
}>();

// Props
const props = defineProps<{
   isLastNameRequired?: boolean; // false by default
   isSubmitClicked: boolean;
}>();

// Data
// -----------------------------------------
const nameInvalidText = "Name can be letters only, at least 2 characters and max 50 characters";
// Two-way binding
const firstName = defineModel<string>("firstName", { required: true });
const lastName = defineModel<string>("lastName", { required: true });

// lifecycle
// -----------------------------------------
onMounted(() => {
   // Emit initial validity
   emit("validity-changed", isFirstNameValid() && isLastNameValid());
});

// computed
// -----------------------------------------
const showFirstNameError = computed(() => props.isSubmitClicked && !isFirstNameValid());
const showLastNameError = computed(() => props.isSubmitClicked && !isLastNameValid());

// methods
// -----------------------------------------
function isFirstNameValid() {
   return z.string().min(2).max(50).safeParse(firstName.value).success;
}

function isLastNameValid() {
   // Empty is allowed when not required
   if (!props.isLastNameRequired && (!lastName.value || lastName.value === "")) {
      return true;
   }

   return z.string().min(2).max(50).safeParse(lastName.value).success;
}

function onFirstNameInput(value: string | undefined) {
   const sanitizedValue = value ?? "";
   firstName.value = sanitizedValue;
   emit("validity-changed", isFirstNameValid() && isLastNameValid());
}

function onLastNameInput(value: string | undefined) {
   const sanitizedValue = value ?? "";
   lastName.value = sanitizedValue;
   emit("validity-changed", isFirstNameValid() && isLastNameValid());
}
</script>

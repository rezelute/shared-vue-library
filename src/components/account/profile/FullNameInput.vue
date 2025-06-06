<template>
   <div class="spacing-form">
      <label for="firstName">First name</label>
      <div>
         <Textbox
            id="firstName"
            :modelValue="firstName"
            :invalid="showFirstNameError"
            placeholder="First name"
            required
            class="w-full"
            @update:modelValue="onFirstNameInput"
         />
         <Message v-if="showFirstNameError" severity="error" size="small" variant="simple">
            {{ nameInvalidText }}
         </Message>
      </div>

      <label for="lastName"> Last name <span v-if="!isLastNameRequired">(optional)</span> </label>
      <div>
         <Textbox
            id="lastName"
            :modelValue="lastName"
            :invalid="showLastNameError"
            placeholder="Last name"
            :required="isLastNameRequired"
            class="w-full"
            @update:modelValue="onLastNameInput"
         />
         <Message v-if="showLastNameError" severity="error" size="small" variant="simple">
            {{ nameInvalidText }}
         </Message>
      </div>
   </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import Textbox from "primevue/inputtext";
import Message from "primevue/message";
import { z } from "zod";

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

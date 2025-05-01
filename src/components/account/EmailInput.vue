<template>
   <div>
      <Textbox
         :modelValue="model"
         @update:modelValue="onInput"
         :invalid="showError"
         placeholder="Email"
         required
         class="w-full"
      />
      <Message v-if="showError" severity="error" size="small" variant="simple">
         {{ emailInvalidText }}
      </Message>
   </div>
</template>

<script setup lang="ts">
import Textbox from "primevue/inputtext";
import Message from "primevue/message";
import { validateEmail } from "../../utils/validation";

// Two-way binding
const model = defineModel<string>({ required: true });

const props = defineProps<{
   isSubmitClicked: boolean;
}>();

const emit = defineEmits<{
   (e: "validity-changed", isValid: boolean): void;
}>();

const emailInvalidText = "Please enter a valid email address";
const hasBeenSubmitted = ref(false);

// Computed validity - always up to date
const isValid = computed(() => validateEmail(model.value));

// Show error only after submit has been triggered
const showError = computed(() => hasBeenSubmitted.value && !isValid.value);

// React to submit click
watch(
   () => props.isSubmitClicked,
   (clicked) => {
      if (clicked) {
         hasBeenSubmitted.value = true;
         emit("validity-changed", isValid.value);
      }
   }
);

// Emit validity on input, but don't show error until submitted
function onInput(value: string | undefined) {
   model.value = value ?? "";
   emit("validity-changed", isValid.value);
}
</script>

<script setup lang="ts">
console.log("login.vue")
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import { inject } from 'vue'

definePageMeta({
  layout: 'empty',
  title: 'Login',
  preview: {
    title: 'Login 3',
    description: 'For authentication and sign in',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-login-3.png',
    srcDark: '/img/screens/auth-login-3-dark.png',
    order: 153,
  },
})

const strings = inject('strings')
console.log(strings)
const config = useRuntimeConfig()
const client = useNuxtApp().$client

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_REQUIRED: 'A password is required',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  email: '',
  password: '',
  trustDevice: false,
} satisfies FormInput

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useToaster()

const API = config.public.API
const PROTOCOL = config.public.PROTOCOL

const loginWithGoogle = () => {
  loginWithProvider('google')
}

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  // here you have access to the validated form values
console.log('here')
  try {
    window.localStorage.setItem('userSettings', JSON.stringify({username: values.email, password: values.password}))
    // const { success: request, client } = await authenticateUser({ email: values.email, password: values.password })

    const request = await client.login(values.email, values.password)
    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Welcome back!`,
      color: 'success',
      icon: 'ph:user-circle-fill',
      closable: true,
    })
    window.location.href = '/'
  }
  catch (error: any) {
    setFieldError('password', 'Invalid credentials')
  }
})

</script>

<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
  >
    <div
      class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      />
      <div>
        <BaseThemeToggle />
      </div>
    </div>
    <div class="flex w-full items-center justify-center">
      <div class="relative mx-auto w-full max-w-2xl">
        <!--Form-->
        <div class="me-auto ms-auto mt-4 w-full">
          <form
            method="POST"
            action=""
            class="me-auto ms-auto mt-4 w-full max-w-md"
            novalidate
            @submit.prevent="onSubmit"
          >
            <div class="px-8">
              <div class="mb-8 flex w-full max-w-xs items-center justify-start">
                <NuxtLink
                  to="/"
                  class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
                >
                  <AppLogo />
                </NuxtLink>
                <div />
              </div>
              <BaseHeading
                as="h2"
                size="2xl"
                weight="medium"
              >
                {{ strings.login.form.title }}
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mb-6">
                {{ strings.login.form.subtitle }}
              </BaseParagraph>
            </div>
            <div class="px-8 pb-4">
              <div class="mb-4 space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="email"
                    :label="strings.login.form.email"
                    :placeholder="strings.login.form.email"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="password"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    :label="strings.login.form.password"
                    :placeholder="strings.login.form.password"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
              <!-- <div class="mb-6">
                <div class="mt-6 flex items-center justify-between">
                  <Field
                    v-slot="{ field, handleChange, handleBlur }"
                    name="trustDevice"
                  >
                    <BaseCheckbox
                      :model-value="field.value"
                      :disabled="isSubmitting"
                      rounded="sm"
                      label="Trust this device for 60 days"
                      color="primary"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </Field>
                </div>
              </div> -->
              <div class="mb-6">
                <BaseButton
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                  type="submit"
                  color="primary"
                  class="!h-12 w-full"
                >
                  {{ strings.login.form.submit }}
                </BaseButton>
              </div>
              <!-- <div class="mb-6 grid gap-0 sm:grid-cols-3">
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                >
                <span
                  class="bg-muted-100 dark:bg-muted-900 text-muted-400 relative top-0.5 text-center font-sans text-sm"
                >
                  {{ strings.login.form.orContinueWith }}
                </span>
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                >
              </div> -->
              <!--Social signup-->
              <!-- <div class="grid grid-cols-3 gap-2">
                <a
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
                  :href="`${config.public.PROTOCOL}${config.public.API}/auth/login/google?redirect=https://ai.intellectoapp.com/auth/callback`"
                >
                  <Icon name="fa6-brands:google" class="size-5" />
                </a>
                <a
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
                  :href="`${config.public.PROTOCOL}${config.public.API}/auth/login/facebook`"
                >
                  <Icon name="fa6-brands:facebook" class="size-5" />
                </a>
                <a
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
                  :href="`${config.public.PROTOCOL}${config.public.API}/auth/login/linkedin`"
                >
                  <Icon name="fa6-brands:linkedin-in" class="size-5" />
                </a>
              </div> -->

              <!--No account link-->
              <!-- <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <span>{{ strings.login.form.noAccount }}</span>
                <NuxtLink
                  to="/signup"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  {{ strings.login.form.signup }}
                </NuxtLink>
              </p>
              <p>
                <NuxtLink
                  to="/recover-password"
                  class="text-primary-600 hover:text-primary-500 text-xs underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  {{ strings.login.form.forgotPassword }}
                </NuxtLink>
              </p> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

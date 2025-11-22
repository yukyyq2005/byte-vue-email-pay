<template>
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block"><button @click="onClickOk" type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0"><span class="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button></div>
                <div class="sm:flex sm:items-start m-6">
                    <div class="mt-3 text-center sm:mt-0 sm:text-left">
                        <h3 class="text-lg font-medium leading-6 text-gray-900" id="headlessui-dialog-title-:r4p:" data-headlessui-state="open" data-open="">Compare Editions</h3>
                        <div class="mt-2"><div class="flex flex-col my-0"><div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"><div class="inline-block min-w-full py-2 align-middle px-6">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead><tr><th scope="col" class="py-3.5 pl-0 pr-3 text-left text-sm font-semibold text-gray-900 min-w-[20em]">&nbsp;</th><th scope="col" class="py-3.5 px-3 text-center text-sm font-semibold text-gray-900">Standard Edition</th><th scope="col" class="py-3.5 px-3 text-center text-sm font-semibold text-gray-900">Enterprise Edition</th></tr></thead>
                                <tbody class="divide-y divide-gray-200">
                                    <tr v-for="(row, index) in rows" :key="index" class="font-normal">
                                      <td class="py-4 pl-1 pr-3 text-sm text-gray-500">{{ row.title }}</td>
                                      <td class="py-4 px-3 text-sm text-gray-500">
                                        <div v-if="row.plan1 === '✓' || row.plan1 === '✗'" class="text-center">
                                          <span :class="{'text-blue-500 font-semibold': row.plan1 === '✓', 'text-red-500 font-medium': row.plan1 === '✗'}">{{ row.plan1 }}</span>
                                        </div>
                                        <span v-else>{{ row.plan1 }}</span>
                                      </td>
                                      <td class="py-4 px-3 text-sm text-gray-500">
                                        <div v-if="row.plan2 === '✓' || row.plan2 === '✗'" class="text-center">
                                          <span :class="{'text-blue-500 font-semibold': row.plan2 === '✓', 'text-red-500 font-medium': row.plan2 === '✗'}">{{ row.plan2 }}</span>
                                        </div>
                                        <span v-else>{{ row.plan2 }}</span>
                                      </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div></div></div></div>
                    </div>
                </div>

                <div class="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" @click="onClickOk" class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm">Close Window</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
    
  <script setup>
  // https://tailwindui.com/components/application-ui/overlays/modal-dialogs
  import { ref } from 'vue'
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

  const rows = [
  { title: "Sent via branding removed from email footer", plan1: "✓", plan2: "✓" },
  { title: "Daily Email Sending Limit", plan1: "Send up to 400 email recipients per day", plan2: "Send up to 1500 email recipients per day" },
  { title: "Maximum number of Email sending rules", plan1: "5 rules", plan2: "Unlimited rules" },
  { title: "Notify form respondents via email", plan1: "✓", plan2: "✓" },
  { title: "Send email notifications from a different email alias", plan1: "✓", plan2: "✓" },
  { title: "Send emails to multiple recipients in CC and BCC", plan1: "✓", plan2: "✓" },
  { title: "Send multiple emails per form submission", plan1: "✓", plan2: "✓" },
  { title: "Send conditional email notifications based on form answers", plan1: "✓", plan2: "✓" },
  { title: "Send different emails to recipients based on conditions", plan1: "✓", plan2: "✓" },
  { title: "Write emails in your HTML code editor", plan1: "✓", plan2: "✓" },
  { title: "Manually resend email notifications to old responses", plan1: "✗", plan2: "✓" },
  { title: "Add dynamic QRCode images in emails", plan1: "✗", plan2: "✓" },
  { title: "Add dynamic Barcode images in emails", plan1: "✗", plan2: "✓" },
  { title: "Add file attachments from Google Drive in notifications", plan1: "✗", plan2: "✓" },
  { title: "Send emails from a generic no-reply email address in Google Workspace", plan1: "✗", plan2: "✓" },
  { title: "Send form notifications to Discord servers", plan1: "✗", plan2: "✓" },
  { title: "Send form notifications to external Webhooks", plan1: "✗", plan2: "✓" },
  { title: "Send push notifications to mobile App", plan1: "✗", plan2: "✓" },
  { title: "Send form notifications to Google Chat channels", plan1: "✗", plan2: "✓" },
  { title: "Customer Care", plan1: "Email support", plan2: "Priority support over email, WhatsApp, schedule video calls for 1:1 help" }
];

  const open = ref(false)
 
  function setIsOpen(value, item) {
    open.value = value
  }
  function onClickOk(){
    open.value = false
  }
  
  defineExpose({
    setIsOpen
  })
  </script>
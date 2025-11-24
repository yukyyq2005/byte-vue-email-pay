<!-- https://docs.stripe.com/checkout/custom/quickstart?client=js -->
<style scoped>
.modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
}
.modal-container {
  background-color: white;
  border-radius: 4px;
  width: 90%;
  max-width: 750px;
  height: 90%;
}
.modal-container2{
    margin-left: 30px;
    margin-top: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    height: calc(100% - 50px);
    overflow-y: auto;
}
</style>
<template>
<div class="modal-overlay">
    <div class="modal-container relative">
        <button @click="closeModal" class="close-btn absolute top-0 right-0 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#535353">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </button>
        <div v-if="loading" ><svg class="animate-spin absolute inset-0 m-auto h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="rgb(29, 78, 216)" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>
        <div class="modal-container2">
            <div id="payment-element"></div>

            <div v-if="!isHasEmail && loadingSuccess" class="relative mt-5">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex h-12 items-center pl-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6" style="color: rgb(177, 184, 195);"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></div>
              <input v-model="inputEmailValue" name="email" maxlength="250" autocomplete="email" type="email" placeholder="you@example.com" class="w-full pl-11 p-3 mb-2 border-2 border-gray-200 border-solid rounded-md leading-3 text-base bg-white cursor-auto text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-400 transition duration-300 ease-in-out">
            </div>

            <!-- Secured by strpe -->
            <div v-show="loadingSuccess" class="text-sm leading-3 mt-3 text-gray-400 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 14px; margin-right: 5px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>Secured by <a target="_blank" rel="noreferrer" href="https://stripe.com/docs/security/stripe" class="ml-1 text-gray-500 hover:text-blue-400">Stripe</a></div>
            <div id="confirm-errors" class="text-center text-sm text-red-600 mt-3"></div>
            <button v-show="loadingSuccess" id="pay-button" @click="startSubscriptionClick" type="button" class="w-full rounded-lg bg-blue-600 py-2.5 text-center text-lg font-medium leading-6 text-white transition duration-150 ease-in-out flex items-center justify-center gap-2" :disabled="paying" :class="{'hover:bg-blue-500': !paying, 'bg-gray-400': paying}">
                <span>{{ paying ? 'Processing...' : 'Start subscription' }}</span>
                <svg v-if="paying" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </button>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
const isHasEmail = ref(true)
const loading = ref(true)
const loadingSuccess = ref(false)
const paying = ref(false)
const inputEmailValue = ref('')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


import { loadStripe } from '@stripe/stripe-js';
let stripe = null
let m_checkout = null

const props = defineProps({
  payPriceId: {
    type: String
  },
  url: {
    type: String,
  },
  app_pk:{
    type: String,
  }
});

const emit = defineEmits(['confirmed', 'paymentSuccessNofi']);

const closeModal = () => {
    emit('confirmed');
};

onMounted(async () =>{
  await initPay()
})
async function initPay(){
  const pk = props.app_pk
  stripe = await loadStripe(pk, {betas: ['custom_checkout_beta_5']})
  // console.log(new Date().getTime()/1000 + " 1 request token")
  // console.log(props.payPriceId)
  const body = {price:props.payPriceId}
  if(body.price=='price_1QrxVMFEwe44ge5wW0c2UQnX' || body.price=='price_1QrxVwFEwe44ge5wJ7miRd5H'){
    body.is_test = true
  }else if (props.url.startsWith('https://sandbox.stripe')){
    body.is_test = true
  }
  const licenseKeyInput = document.getElementById('licenseKey');
  let my_email = ''

  const params = new URLSearchParams(window.location.search);
  const email = params.get('email'); 
  if (email?.trim()){
    my_email = email.trim()
  }else{
    if (licenseKeyInput && licenseKeyInput.placeholder) {
      if (licenseKeyInput.placeholder != "<?= myEmail ?>") {
        my_email = licenseKeyInput.placeholder
      }
    }
  }
  if (my_email?.trim()){
    body.customer_email = my_email
  }else{
    isHasEmail.value = false
  }
  await initiateCheckout(body)
}
// 使用该异步函数
async function initiateCheckout(body) {
    const clientSecret = await createCheckoutSession(body);
    const checkout = await stripe.initCheckout({ clientSecret });
    finishCheckOut(checkout);
}
async function createCheckoutSession(body) {
  let aurl = props.url
  try {
    const response = await fetch(aurl, {
      method: 'POST', body: JSON.stringify(body), headers: {'Content-Type': 'application/json'},
    });
    const json = await response.json();
    if (json.error) {
      throw new Error(json.error);
    }
    return json.clientSecret;
  } catch (error) {
    setErrorMessage(error.message);
    loading.value = false;
    throw error;
  }
}
function finishCheckOut(checkout){
  m_checkout = checkout
  const paymentElement = checkout.createElement('payment');
  const payDiv = document.getElementById('payment-element');
  if(payDiv){
    paymentElement.mount('#payment-element');
    // console.log(new Date().getTime()/1000 + " end initcheckout")
    setTimeout(() => {
      loading.value = false
      loadingSuccess.value = true
    }, 80)
  }
}
async function startSubscriptionClick(){
  console.log('Start Subscription...')
  setErrorMessage('')
  if(!isHasEmail.value){
    let curEmail = inputEmailValue.value?.trim()
    if(!curEmail){
      setErrorMessage('Please enter your email address.')
      return
    }else if(!emailRegex.test(curEmail)){
      setErrorMessage('Please enter a valid email address.')
      return 
    }
    await setEmail(curEmail)
  }
  await checkoutConfirm()
}
async function checkoutConfirm(){
  setIsReadOnly(true)
  paying.value = true
  try{
    //docs https://docs.stripe.com/js/custom_checkout/confirm
    const res = await m_checkout.confirm({redirect: "if_required"})
    paying.value = false
    setIsReadOnly(false)
    if(res?.success?.status?.paymentStatus == 'paid'){
      console.log("...success...")
      emit('paymentSuccessNofi', res?.success?.email);
      closeModal()
    }else if (res.type === 'error') {
        setErrorMessage(res.error.message)
    }
  }catch(e){
    paying.value = false
    setIsReadOnly(false)
    setErrorMessage(e.message)
  }
}
async function setEmail(addr){
  const result = await m_checkout.updateEmail(addr)
  if (result.error) {
    setErrorMessage(result.error.message)
  }
}
function setIsReadOnly(readOnly) {
  const paymentElement = m_checkout.getElement('payment')
  if (paymentElement) {
    paymentElement.update({ readOnly: readOnly });
  }
}
function setErrorMessage(errMsg) {
  const errors = document.getElementById('confirm-errors');
  if (errors){
    if (errMsg){
      errors.textContent = errMsg;
    }else{
      errors.textContent = '';
    }
  }
}
</script>


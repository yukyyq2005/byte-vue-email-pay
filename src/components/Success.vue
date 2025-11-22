<template>
      <div class="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999999]">
        <div class="bg-white rounded-md p-10 flex flex-col items-center">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none" class="injected-svg" data-src="/images/icons/payment-success.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="accent fill" fill-rule="evenodd" clip-rule="evenodd" d="M87.033 45C87.033 68.2142 68.2142 87.033 45 87.033C21.7858 87.033 2.96703 68.2142 2.96703 45C2.96703 21.7858 21.7858 2.96703 45 2.96703C68.2142 2.96703 87.033 21.7858 87.033 45ZM90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM66.3237 33.6864C66.9031 33.107 66.9031 32.1677 66.3237 31.5884C65.7444 31.009 64.8051 31.009 64.2257 31.5884L37.5824 58.2317L24.7853 45.4345C24.2059 44.8552 23.2666 44.8552 22.6873 45.4345C22.1079 46.0139 22.1079 46.9532 22.6873 47.5325L36.5334 61.3787C37.1128 61.958 38.0521 61.958 38.6314 61.3787L66.3237 33.6864Z" fill="#00AB43"></path></svg></div>
            <p class="mt-10 text-center" style="color: #1A1A1AE6; max-width: 400px; font-size: 15px;">Your transaction has been completed successfully. We have emailed your order details to <span class="text-gray-600 font-bold">{{customerEmail}}</span>.</p>
            <div class="footer flex flex-col items-center">
                <a href="https://stripe.com" target="_blank" rel="noopener" class="flex items-center justify-center">
                  <span>Powered by</span>
                  <span class="ml-1"><svg class="InlineSVG Icon Footer-PoweredBy-Icon Icon--md" focusable="false" width="33" height="15" role="img" aria-labelledby="stripe-title"><title id="stripe-title">Stripe</title><g fill-rule="evenodd"><path d="M32.956 7.925c0-2.313-1.12-4.138-3.261-4.138-2.15 0-3.451 1.825-3.451 4.12 0 2.719 1.535 4.092 3.74 4.092 1.075 0 1.888-.244 2.502-.587V9.605c-.614.307-1.319.497-2.213.497-.876 0-1.653-.307-1.753-1.373h4.418c0-.118.018-.588.018-.804zm-4.463-.859c0-1.02.624-1.445 1.193-1.445.55 0 1.138.424 1.138 1.445h-2.33zM22.756 3.787c-.885 0-1.454.415-1.77.704l-.118-.56H18.88v10.535l2.259-.48.009-2.556c.325.235.804.57 1.6.57 1.616 0 3.089-1.302 3.089-4.166-.01-2.62-1.5-4.047-3.08-4.047zm-.542 6.225c-.533 0-.85-.19-1.066-.425l-.009-3.352c.235-.262.56-.443 1.075-.443.822 0 1.391.922 1.391 2.105 0 1.211-.56 2.115-1.39 2.115zM18.04 2.766V.932l-2.268.479v1.843zM15.772 3.94h2.268v7.905h-2.268zM13.342 4.609l-.144-.669h-1.952v7.906h2.259V6.488c.533-.696 1.436-.57 1.716-.47V3.94c-.289-.108-1.346-.307-1.879.669zM8.825 1.98l-2.205.47-.009 7.236c0 1.337 1.003 2.322 2.34 2.322.741 0 1.283-.135 1.581-.298V9.876c-.289.117-1.716.533-1.716-.804V5.865h1.716V3.94H8.816l.009-1.96zM2.718 6.235c0-.352.289-.488.767-.488.687 0 1.554.208 2.241.578V4.202a5.958 5.958 0 0 0-2.24-.415c-1.835 0-3.054.957-3.054 2.557 0 2.493 3.433 2.096 3.433 3.17 0 .416-.361.552-.867.552-.75 0-1.708-.307-2.467-.723v2.15c.84.362 1.69.515 2.467.515 1.879 0 3.17-.93 3.17-2.548-.008-2.692-3.45-2.213-3.45-3.225z" fill="#1A1A1A80"></path></g></svg></span> 
                </a>
                <p class="mt-2"><a href="https://stripe.com/legal/end-users" target="_blank" rel="noopener">Terms</a>&nbsp;&nbsp;<span class="gray-color">|</span>&nbsp;&nbsp;<a href="https://stripe.com/privacy" target="_blank" rel="noopener">Privacy</a></p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.footer {
    margin-top: 20px;
    font-size: 12px;
    color: #666;
}
.footer a {
    text-decoration: none;
    color: #1A1A1A80;
}
.gray-color{
    color: #1A1A1A80;
}
</style>
<script setup>
defineProps({
    customerEmail: String
});

</script>


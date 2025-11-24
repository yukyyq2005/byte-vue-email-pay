<template>

    <ComparePage ref="fmDialog" />
    <div v-if="isLoading">
        <DashLoading/>
    </div>
    <div v-else class="p-5 max-w-3xl mx-auto mt-5">
         <!-- Title -->
         <div class="text-center mb-8">
             <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Upgrade to Pro</h2>
         </div>
         <!-- license begin -->
          
         <div id="headlessui-radiogroup-:ri:" role="radiogroup" aria-labelledby="headlessui-label-:rj:">
        <div class="flex justify-between items-end">
            <!-- <div class="text-sm font-medium text-gray-600" id="headlessui-label-:rj:" data-headlessui-state="">Who are you buying a license for?</div> -->
        </div>

        <div v-show="showLicenseDialog" class="mx-0 mt-2.5 grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-x-4">
            <div v-for="(option, index) in options1" :key="index"
                class="relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none" role="radio"
                tabindex="0" @click="selectOptionTop(index)">
                <!-- 覆盖绝对定位的边框层 -->
                <span class="pointer-events-none absolute -inset-px rounded-lg"
                    :class="selectedIndex1 === index ? 'border-2 border-indigo-500' : 'border border-gray-300'"
                    aria-hidden="true"></span>

                <span class="flex flex-1 relative">
                    <span class="flex flex-col">
                        <span class="block text-sm font-medium text-gray-900">{{ option.title }}</span>
                        <span class="mt-4 flex items-center text-xs text-gray-500 font-medium">{{ option.description
                            }}</span>
                    </span>
                </span>

                <!-- 选中时显示的图标 -->
                <svg v-if="selectedIndex1 === index" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" class="h-5 w-5 text-indigo-600">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
         </div>
         <!-- license end -->
     
         <!-- 线 beign -->
         <!-- <div v-if="selectedIndex1!=null" class="w-full border-t border-gray-200 my-8"></div> -->
         <!-- 线 end -->

        <!-- 上间隙 -->
         <div class="mt-10"></div>
     
         <div v-if="selectedIndex1==0">
        <!-- personal license begin -->
        <div class="flex items-center justify-center">
            <div class="relative bg-gray-100 rounded-lg p-0.5 flex mb-5">
              <button type="button" :class="buttonClass1('Y')" @click="billingBind1 = 'Y'" :disabled="billingBind1 === 'Y'">
                yearly
              </button>
              <button type="button" :class="buttonClass1('M')" @click="billingBind1 = 'M'" :disabled="billingBind1 === 'M'">
                monthly
              </button>
            </div>
        </div>
        <div id="headlessui-radiogroup-:r9d:" role="radiogroup">
            <div class="mt-2.5 grid grid-cols-2 gap-x-4 mb-8">
                <div v-for="(option, index) in personalPrices" :key="index"
                    class="mx-0 relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none"
                    role="radio" tabindex="0" @click="selectOptionPersonal(index)">
                    <!-- 动态边框 -->
                    <span class="pointer-events-none absolute -inset-px rounded-lg"
                        :class="selectedEdition1 === index ? 'border-2 border-indigo-500' : 'border border-gray-300'"
                        aria-hidden="true"></span>

                    <span class="flex flex-1">
                        <span class="flex flex-col">
                            <span class="block text-sm font-medium text-gray-900">
                                {{ index==0? "Standard Edition":"Enterprise Edition" }}
                                <span v-if="index==1"
                                    class="ml-2 inline-flex items-center rounded-xl bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-600">
                                    Popular
                                </span>
                            </span>
                            <span class="mt-4 text-sm font-medium text-gray-900">
                                <span class="text-xl text-gray-600">$</span>
                                <span v-if="billingBind1 == 'Y'">
                                    <span class="text-xl text-gray-800">{{ parseInt(option.yprice.split('.')[0]).toLocaleString("en-US") }}</span>
                                    <sup class="text-xs text-gray-600">{{ option.yprice.split('.')[1] }}</sup>
                                </span>
                                <span v-else>
                                    <span class="text-xl text-gray-800">{{ parseInt(option.mprice.split('.')[0]).toLocaleString("en-US") }}</span>
                                    <sup class="text-xs text-gray-600">{{ option.mprice.split('.')[1] }}</sup>
                                </span> 
                                &nbsp;
                                <span class="text-gray-500">per
                                    <span v-if="billingBind1 == 'Y'">year</span>
                                    <span v-else>month</span>
                                </span>
                            </span>
                        </span>
                    </span>

                    <!-- 选中时显示的图标 -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        class="h-5 w-5 text-indigo-600" :class="selectedEdition1 === index ? 'visible' : 'invisible'">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- personal license begin end -->
         </div>
         <div v-else-if="selectedIndex1==1">
        <!-- team license begin-->
        <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-600">How many people in the team&nbsp;would need the license?</h3>
        </div>
        <div class="mt-2" id="headlessui-radiogroup-:rc2:" role="radiogroup">
            <div class="grid gap-4 grid-cols-5">
                <div v-for="(option, index) in teamOptions" :key="index"
                    class="bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-2.5 px-2 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1"
                    :aria-checked="selectedUserTeam === index ? 'true' : 'false'" role="radio" tabindex="0"
                    @click="userOptionTeam(index)">
                    <span class="pointer-events-none absolute -inset-px rounded-md"
                        :class="selectedUserTeam === index ? 'border-2 border-indigo-500' : 'border-2 border-transparent'"
                        aria-hidden="true"></span>
                    <span>{{ option }}</span>
                </div>
                <button @click="moreUsersClick" title="More than 10 users? Switch to the site license"
                    class="bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-2.5 px-2 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1"
                    type="button">More users</button>
            </div>
        </div>
        <!-- 线 begin -->
        <div v-show="selectedUserTeam!=null" class="w-full border-t border-gray-200 my-8"></div>
        <!-- 线 end -->
        <div v-show="selectedUserTeam!=null" class="flex items-center justify-center">
            <div class="relative bg-gray-100 rounded-lg p-0.5 flex mb-5">
              <button type="button" :class="buttonClass2('Y')" @click="billingBind2 = 'Y'" :disabled="billingBind2 === 'Y'">
                yearly
              </button>
              <button type="button" :class="buttonClass2('M')" @click="billingBind2 = 'M'" :disabled="billingBind2 === 'M'">
                monthly
              </button>
            </div>
        </div>
        <div id="headlessui-radiogroup-:r9d:" role="radiogroup">
            <div class="mt-2.5 grid grid-cols-2 gap-x-4 mb-8">
                <div v-for="(option, index) in teamPrices[selectedUserTeam]" :key="index"
                    class="mx-0 relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none"
                    role="radio" tabindex="0" @click="selectOptionTeam(index)">
                    <!-- 动态边框 -->
                    <span class="pointer-events-none absolute -inset-px rounded-lg"
                        :class="selectedEdition2 === index ? 'border-2 border-indigo-500' : 'border border-gray-300'"
                        aria-hidden="true"></span>

                    <span class="flex flex-1">
                        <span class="flex flex-col">
                            <span class="block text-sm font-medium text-gray-900">
                                {{ index==0? "Standard Edition":"Enterprise Edition" }}
                                <span v-if="index==1"
                                    class="ml-2 inline-flex items-center rounded-xl bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-600">
                                    Popular
                                </span>
                            </span>
                            <span class="mt-4 text-sm font-medium text-gray-900">
                                <span class="text-xl text-gray-600">$</span>
                                <span v-if="billingBind2 == 'Y'">
                                    <span class="text-xl text-gray-800">{{ parseInt(option.yprice.split('.')[0]).toLocaleString("en-US") }}</span>
                                    <sup class="text-xs text-gray-600">{{ option.yprice.split('.')[1] }}</sup>
                                </span>
                                <span v-else>
                                    <span class="text-xl text-gray-800">{{ parseInt(option.mprice.split('.')[0]).toLocaleString("en-US") }}</span>
                                    <sup class="text-xs text-gray-600">{{ option.mprice.split('.')[1] }}</sup>
                                </span> 
                                &nbsp;
                                <span class="text-gray-500">per
                                    <span v-if="billingBind2 == 'Y'">year</span>
                                    <span v-else>month</span>
                                </span>
                            </span>
                        </span>
                    </span>

                    <!-- 选中时显示的图标 -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        class="h-5 w-5 text-indigo-600" :class="selectedEdition2 === index ? 'visible' : 'invisible'">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- team license end -->
         </div>
         <div v-else-if="selectedIndex1==2">
        <!-- Site License begin-->
        <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-600">How many people in the organization&nbsp;would need the
                license?
            </h3>
        </div>
        <div class="mt-2" id="headlessui-radiogroup-:re5:" role="radiogroup">
            <div class="grid gap-4 grid-cols-4">
                <div v-for="(option, index) in siteOptions" :key="index"
                    class="bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-2.5 px-2 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1"
                    role="radio" tabindex="0" :aria-checked="selectedUserSite === index ? 'true' : 'false'"
                    @click="userOptionSite(index)">
                    <span>{{ option }}</span>
                    <!-- 边框层 -->
                    <span class="pointer-events-none absolute -inset-px rounded-md"
                        :class="selectedUserSite === index ? 'border-2 border-indigo-500' : 'border border-transparent'"
                        aria-hidden="true"></span>
                </div>
            </div>
        </div>
        <!-- 线 begin -->
        <div class="w-full border-t border-gray-200 my-8"></div>
        <!-- 线 end -->
        <div id="headlessui-radiogroup-:r9d:" role="radiogroup">
            <div class="mt-2.5 grid grid-cols-2 gap-x-4 mb-8">
                <div v-for="(option, index) in sitePrices[selectedUserSite]" :key="index"
                    class="mx-0 relative flex cursor-pointer rounded-lg bg-white p-4 shadow-sm focus:outline-none"
                    role="radio" tabindex="0" @click="selectOptionSite(index)">
                    <!-- 动态边框 -->
                    <span class="pointer-events-none absolute -inset-px rounded-lg"
                        :class="selectedEdition3 === index ? 'border-2 border-indigo-500' : 'border border-gray-300'"
                        aria-hidden="true"></span>

                    <span class="flex flex-1">
                        <span class="flex flex-col">
                            <span class="block text-sm font-medium text-gray-900">
                                {{ index==0? "Standard Edition":"Enterprise Edition" }}
                                <span v-if="index==1"
                                    class="ml-2 inline-flex items-center rounded-xl bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-600">
                                    Popular
                                </span>
                            </span>
                            <span class="mt-4 text-sm font-medium text-gray-900">
                                <span class="text-xl text-gray-600">$</span>
                                <span class="text-xl text-gray-800">{{ parseInt(option.yprice.split('.')[0]).toLocaleString("en-US") }}</span>
                                <sup class="text-xs text-gray-600">{{ option.yprice.split('.')[1] }}</sup>
                                &nbsp;
                                <span class="text-gray-500">per <span>year</span></span>
                            </span>
                        </span>
                    </span>

                    <!-- 选中时显示的图标 -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        class="h-5 w-5 text-indigo-600" :class="selectedEdition3 === index ? 'visible' : 'invisible'">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- Site License end-->
         </div>
     
     
         <!-- 底部线 + 按钮 -->
         <div v-if="selectedIndex1!=null" class="w-full border-t border-gray-200 my-8"></div>
         <div v-if="selectedIndex1==0 || (selectedIndex1==1&&selectedUserTeam!=null) || (selectedIndex1==2&&selectedUserSite!=null)" class="flex justify-between items-center">
        <button @click="compareClick"
            class="group inline-flex text-sm font-medium text-blue-500 hover:text-blue-700 tracking-tight" type="button"
            title="Compare Standard and Enterprise editions"><span class="hidden sm:block">Compare Standard and
                Enterprise →</span><span class="block sm:hidden">Compare Editions →</span></button>
        <div class="flex items-center justify-center">
            <button @click="continueButtonClick" type="button" class="relative ml-6 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" :disabled="loading">
                <span v-if="!loading" >Continue</span>
                <svg v-else class="animate-spin absolute inset-0 m-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <span v-if="loading" class="invisible">Continue</span>
            </button>
        </div>
         </div>
         <div v-if="selectedIndex1!=null" class="text-gray-600 py-4">
             <div class="flex flex-start items-center"><div class="flex-shrink-0"></div><span class="text-sm font-normal text-gray-600">No commitment and no cancellation fees. You can <span class="font-semibold">cancel anytime</span>.</span></div>
             <!-- <div class="flex flex-start items-center py-0.5"><div class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5 text-blue-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd"></path></svg></div>
                 <span class="ml-3 text-sm font-normal text-gray-600">The license key and invoice will be sent to the email address provided on the payment page.</span>
            </div> -->
         </div>
    </div>

    <StriplePay v-if="stripePayShow" @confirmed="handleConfirm2" @paymentSuccessNofi="paymentSuccessNofi"  :payPriceId="payPriceId" :url="url" :app_pk="app_pk"/>
    <Success  v-if="userEmail" :customerEmail="userEmail"/>
</template>

<script setup>
import ComparePage from './ComparePage.vue';
import DashLoading from './DashLoading.vue';
// import { desDecrypt } from '@/desService';
import { ref, onMounted} from 'vue';
import Success from './Success.vue';
import StriplePay from './StriplePay.vue';
// import axios from "axios";

const stripePayShow = ref(false)
const userEmail = ref('')
const loading = ref(false);
const showLicenseDialog = ref(false);
const fmDialog = ref(null)
const activateEmail = ref('')
const isLoading = ref(false)

let app_pk = ref('')
let url = ref('')    
const payPriceId = ref("")

const is_test_mode = false

onMounted(() => {

    //for 生产环境 begin  price_1SWDGLKI2wvxceBv3ngC2NJX 价格1.03元
    app_pk.value = 'pk_live_51Rj7JcKI2wvxceBvr3OqEyAbkjX7tlsWj2MLntSMbpkb0vuC7iRF0AiML38jr30FfUXZhsb0FcCMo9JrkBrcn4xL00KBmYCKFh'
    url.value = 'https://stripe.my-addon.com/create-checkout-session'
    personalPrices.value = [
        { yprice: '49.90', mprice: '19.90', yid: "price_1SWDBYKI2wvxceBvrZwkHlU3", mid: "price_1SWD9AKI2wvxceBvexINnH9Q" },
        { yprice: '79.90', mprice: '29.90', yid: "price_1SWDC7KI2wvxceBvti6hgv9z", mid: "price_1SWDAGKI2wvxceBvldO3VfGH" }
    ];
    //for 生产环境 end

    if (is_test_mode) {
        app_pk.value = 'pk_test_51Rj7JcKI2wvxceBvi0rfcA5nZHmAYIA0W6oMJV2GK0NLLYb4woCCZBXRNLD5PAaSREwKdOPe5dXBNQiTGrD2lAe900fwYhMc5F'
        url.value = 'https://sandbox.stripe.my-addon.com/create-checkout-session' 
        personalPrices.value = [  
            { yprice: '49.90', mprice: '19.90', yid: "price_1SWHHPKI2wvxceBvUGKDrAoA", mid: "price_1SWHGZKI2wvxceBvc0wveM31" },
            { yprice: '79.90', mprice: '29.90', yid: "price_1SWHHmKI2wvxceBvogApN164", mid: "price_1SWHGtKI2wvxceBvAMtlsPsX" }
        ];
    }
    payPriceId.value = personalPrices.value[0].yid;//默认是包年

    const licenseKeyInput = document.getElementById('licenseKey');
    if (licenseKeyInput) {
        activateEmail.value = licenseKeyInput.placeholder;
    }
});

// 定义选项数据
const options1 = [
    { title: 'Personal License', description: 'For your own use or for your coworker' },
    { title: 'Team License', description: 'For smaller teams of up to 10 users' },
    { title: 'Site License', description: 'For everyone in your company or school' }
];
// 当前选中选项的索引
const selectedIndex1 = ref(0);

const personalPrices = ref([])
const teamPrices = ref([])
const sitePrices = ref([])

const teamOptions = ref(['2 users','3 users','4 users','5 users','6 users','7 users','8 users','9 users','10 users']);
const siteOptions = ref(['25 users', '50 users', '100 users', '200 users', '500 users', '1000 users', '2000 users', 'Unlimited users']);

// 当前选中选项的索引，初始为 null 表示未选中任何选项
const selectedUserTeam = ref(null);
const selectedUserSite = ref(null);
const selectedEdition1 = ref(1);
const selectedEdition2 = ref(1);
const selectedEdition3 = ref(1);
const billingBind1 = ref('Y');  // 默认选择 Yearly
const billingBind2 = ref('Y');  // 默认选择 Yearly


const buttonClass1 = (type) => {
  return [
    "relative border-transparent rounded-md py-2 w-1/2 text-sm leading-5 font-medium whitespace-nowrap focus:outline-none focus:z-10 select-none transition ease-in-out duration-150 sm:w-auto px-8 capitalize",
    billingBind1.value === type
      ? "bg-white shadow-sm text-gray-700"
      : "text-gray-500 hover:text-gray-700",
  ];
};

const buttonClass2 = (type) => {
  return [
    "relative border-transparent rounded-md py-2 w-1/2 text-sm leading-5 font-medium whitespace-nowrap focus:outline-none focus:z-10 select-none transition ease-in-out duration-150 sm:w-auto px-8 capitalize",
    billingBind2.value === type
      ? "bg-white shadow-sm text-gray-700"
      : "text-gray-500 hover:text-gray-700",
  ];
};

const selectOptionTop = (index) => {
    console.log(index + " top")
    selectedIndex1.value = index;
};
function selectOptionPersonal(index){
    console.log(index+" edit person")
    selectedEdition1.value = index
}
function selectOptionTeam(index){
    console.log(index+" edit team")
    selectedEdition2.value = index;
}
function selectOptionSite(index){
    console.log(index+" edit site")
    selectedEdition3.value = index;
}
const userOptionTeam = (index) => {
    console.log(index+" user team")
  selectedUserTeam.value = index;
};
const userOptionSite = (index) => {
    console.log(index+" user site")
  selectedUserSite.value = index;
};

function moreUsersClick(){
    selectedIndex1.value = 2
}
function compareClick(){
    fmDialog.value.setIsOpen(true)
    console.log('compareClick')
}

function continueButtonClick(){
    let priceId = ''
    if (selectedIndex1.value == 0){
        // console.log(selectedEdition1.value)
        // console.log(personalPrices.value)
        if (billingBind1.value == 'Y'){
            priceId = personalPrices.value[selectedEdition1.value].yid
        }else{
            priceId = personalPrices.value[selectedEdition1.value].mid
        }
    }else if (selectedIndex1.value == 1){
        console.log(selectedEdition2.value)
        console.log(teamPrices.value)
        if (billingBind2.value == 'Y'){
            priceId = teamPrices.value[selectedUserTeam.value][selectedEdition2.value].yid
        }else{
            priceId = teamPrices.value[selectedUserTeam.value][selectedEdition2.value].mid
        }
    }else{
        console.log(selectedUserSite.value)
        console.log(sitePrices.value)
        priceId = sitePrices.value[selectedUserSite.value][selectedEdition3.value].yid
    }
    console.log(priceId)
    openCheckout(priceId)
}
function openCheckout(priceId){
    payPriceId.value = priceId
    stripePayShow.value = true
}
function handleConfirm2(){
  stripePayShow.value = false
}
function paymentSuccessNofi(email){
  userEmail.value = email
}
</script>
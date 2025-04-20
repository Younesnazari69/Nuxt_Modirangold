<template>
  <Layout :LoginPage="true">
    <div class="service">
      <div class="container">
        <h3>پروفایل</h3>
          <div class="edit-profile">
            <Toast />
        <form @submit.prevent="updateProfile">
          <!-- فیلد نام -->
          <div class="field">
            <label for="persianName">نام</label>
            <input v-model="Profile.persianName" id="persianName" :style="{ width: '100%' }" required />
          </div>
  
          <!-- فیلد شماره تماس -->
          <div class="field">
            <label for="phoneNumber">شماره تماس</label>
            <input v-model="Profile.phoneNumber" id="phoneNumber" :style="{ width: '100%' }" disabled required />
          </div>

         <!-- فیلد شماره تماس -->
          <div class="field">
            <label for="homeNumber">تلفن ثابت</label>
            <input v-model="Profile.homeNumber" id="homeNumber" :style="{ width: '100%' }"  />
          </div>
  
          <!-- فیلد آدرس -->
          <div class="field">
            <label for="address">آدرس</label>
            <input v-model="Profile.address" id="address" :style="{ width: '100%' }" required />
          </div>

          <!-- فیلد نام شرکت -->
         <div class="field">
            <label for="companyName">نام شرکت یا پیمانکاری</label>
            <input v-model="Profile.companyName" id="companyName" :style="{ width: '100%' }" required />
          </div>

             <!-- فیلد توضیحات کوتاه درباره خود یا شرکت  -->
         <div class="field">
            <label for="companyName">توضیحات کوتاه درباره خود یا شرکت</label>
            <textarea v-model="Profile.addressCo" id="companyName" :style="{ width: '100%' }" rows="3" required />
          </div>


  


          <!-- دکمه ذخیره -->
          <Button icon="pi pi-check" type="submit" class="btn btn-success">
            ذخیره
            </Button>
        </form>
      </div>
        <div class="section-header text-center">
       
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";
import { useToast } from "primevue/usetoast";
import { ref,onBeforeMount, onServerPrefetch,onMounted } from "vue";
import { useRouter } from 'vue-router'
const store = useDataStore();
const Router = useRouter();
const loading = ref(false);
const toast = useToast();

const Profile = ref({
  persianName: '',
  phoneNumber: '',
  address: '',
  companyName : '',
  addressCo:'',
  homeNumber:'',
  id:''
});

onServerPrefetch(async () => { 

});
onMounted(async () => {
  debugger
  if (store.currentUser() == null) {
    Router.push({ name: "Login" });
  };
  await store.FetchUserByParam(store.CurrentUserData.UserId).then((res: any) => {
    if (res.isSuccess == true) {
      debugger
      Profile.value = { 
        persianName: res.data[0].persianName || '',
        phoneNumber: res.data[0].phoneNumber || '',
        address: res.data[0].address || '',
        companyName : res.data[0].companyName || '',
        addressCo: res.data[0].addressCo || '',
        homeNumber: res.data[0].homeNumber || '',
        id: res.data[0].id || ''
      };
    }
    loading.value = false;
  })

});

const updateProfile = () => {
debugger
loading.value = true;
store.UpdateProfileForUser(Profile.value).then((res) => {


if (res.isSuccess === true) {
  toast.add({
        severity: "success",
        summary: "مدیران گلد",
        detail:
          "با موفقیت ویرایش شد",
        life: 5000,
      });
}


});

};
</script>

<style scoped>
.input{
  width: 200px;
}
</style>

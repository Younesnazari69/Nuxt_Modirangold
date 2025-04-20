<template>
  <Layout :LoginPage="true" v-if="store.CurrentUserData != null && store.CurrentUserData.UserType === '1'">
    <div class="service">
      <div class="container">
        <div class="section-header text-center">
          <h3>لیست رزومه طلا بندان</h3>
        </div>

        <DataTable :value="ScaffoldersAllList" :dataKey="'id'" :loading="loading" paginator :rows="30"
          :rowsPerPageOptions="[5, 10, 20, 50]" v-model:filters="filters" filterDisplay="row"
          :globalFilterFields="['name', 'phoneNumber']">
          <template #header>
            <div class="flex justify-content-between">
              <span class="p-input-icon-left">
                <CoSearch></CoSearch>
                <InputText v-model="filters['global'].value" placeholder="جستجو کنید" />
              </span>
            </div>
          </template>
         
          <Column field="name" header="نام"></Column>
          <Column field="lastName" header="نام خانوادگی"></Column>
          <Column field="job" header="شغل"></Column>
          <Column field="yearsOfWorkExperience" header="تعداد سال سابقه کار"></Column>
          <Column field="email" header="ایمیل"></Column>
          <Column field="cv" header="رزومه">
            <template #body="{ data }">
              <ShowFile :guid="data.cv" :Type="'Grid'">
              </ShowFile>
            </template>
          </Column>
          <Column field="country" header="کشور"></Column>
          <Column field="city" header="شهر"></Column>
          <Column field="phoneNumber" header="تلفن همراه"></Column>
          <Column field="description" header="توضیحات"></Column>
          <Column field="enable" header="وضعیت" class="p-2"></Column>
          <Column field="insertDateTime" header="تاریخ ثبت" class="p-2">
            <template #body="{ data }">
              <span> {{ new Date(data.insertDateTime).toLocaleDateString('fa-IR',{ year: 'numeric', month: 'numeric', day: 'numeric' ,hour:'numeric',minute:'numeric'}) }}</span>
            </template>
          </Column>
          <Column field="Opartion" header="">
            <template #header="{ }">
              <Button class="btn btn-primary  m-1 pb-0" @click="">
                افزودن
                <CgAddR class="h5">
                </CgAddR>
              </Button>
            </template>
            <template #body="{ data }">
              <!-- <Button class="btn btn-success m-1 pb-0" @click="editItem(data.tcmId)">
                <BIconPencilSquare />
              </Button> -->

              <Button  class="btn btn-danger m-1 pb-0">
                <BIconTrash />
              </Button>
            </template>
          </Column>
          <!-- <template #footer> In total there are {{ products ? products.length : 0 }} products. </template> -->
        </DataTable>

      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">

import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";
import { onBeforeMount, onServerPrefetch,ref } from "vue";
import { FilterMatchMode } from '@primevue/core/api'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import { useRouter } from 'vue-router'
import ShowFile from '../components/ShowFile.vue'

const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      companyName: { value: null, matchMode: FilterMatchMode.CONTAINS },
      phoneNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })
const store = useDataStore();
const Router = useRouter();
const ScaffoldersAllList = ref<any>([])
const loading = ref(false);
onServerPrefetch(async () => { });
onBeforeMount(() => {
  debugger
  if (store.currentUser() == null) {
    Router.push({ name: "Login" });
  };
  FetchData("")
});

const FetchData = async (ResultType: string) => {
      loading.value = true;
      store.GetScaffolderRegisterAdmin().then(() => {
        ScaffoldersAllList.value = store.ScaffoldersRegisterAdminData.List
        loading.value = false;
      })
    }


</script>

<style>

.p-virtualscroller::-webkit-scrollbar {
  display: none;
}

.p-virtualscroller-content {
  position: relative !important;
}
</style>

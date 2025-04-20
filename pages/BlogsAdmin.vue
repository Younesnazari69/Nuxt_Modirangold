<template>
  <Layout :LoginPage="true" v-if="store.CurrentUserData != null && store.CurrentUserData.UserType === '1'">
    <div class="service">
      <div class="container">
        <div class="section-header text-center">
          <h3>مدیریت وبلاگ</h3>
        </div>

        <DataTable :value="BlogsAllList" :dataKey="'id'" :loading="loading" paginator :rows="30"
          :rowsPerPageOptions="[5, 10, 20, 50]" v-model:filters="filters" filterDisplay="row"
          :globalFilterFields="['pageTitle', 'pageId']">
          <template #header>
            <div class="flex justify-content-between">
              <span class="p-input-icon-left">
                <CoSearch></CoSearch>
                <InputText v-model="filters['global'].value" placeholder="جستجو کنید" />
              </span>
            </div>
          </template>
         
          <Column field="pageTitle" header="نام صفحه"></Column>
          <Column field="pageIsActive" header="وضعیت"></Column>
          <Column field="pageId" header="کد"></Column>
          <Column field="pageDate" header="تاریخ ثبت" class="p-2">
            <template #body="{ data }">
              <span> {{ new Date(data.pageDate).toLocaleDateString('fa-IR',{ year: 'numeric', month: 'numeric', day: 'numeric' ,hour:'numeric',minute:'numeric'}) }}</span>
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
              <Button 
              class="btn btn-success m-1 pb-0" 
             @click="editItem(data.pageId)" 
                label="ویرایش"
                    />
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

const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      pageTitle: { value: null, matchMode: FilterMatchMode.CONTAINS },
      pageId: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })
const store = useDataStore();
const Router = useRouter();
const BlogsAllList = ref<any>([])
const loading = ref(false);
onServerPrefetch(async () => { });
onBeforeMount(() => {
  if (store.currentUser() == null) {
    Router.push({ name: "Login" });
  };
  FetchData("")
});

const FetchData = async (ResultType: string) => {
      loading.value = true;
      store.GetBlogsAdmin().then(() => {
        BlogsAllList.value = store.BlogsAdminData.List
        loading.value = false;
      })
    }

const editItem = (blogId: number) => {
  Router.push({ name: 'EditBlog', params: { id: blogId } });
};


</script>

<style>

.p-virtualscroller::-webkit-scrollbar {
  display: none;
}

.p-virtualscroller-content {
  position: relative !important;
}
</style>

<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="section-header text-center">
          <h3>لیست مقالات</h3>
        </div>

        <DataTable :value="BlogsAllList" :dataKey="'id'" :loading="loading" :paginator="false" :rows="100"
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

           <!-- ستونی برای نمایش شماره ردیف -->
        <Column header="ردیف">
          <template #body="{ data, index }">
          {{ index + 1 }} <!-- شماره ردیف (شمارش 1-based) -->
         </template>
         </Column>
         
          <Column field="pageTitle" header="نام صفحه">
            <template #body="{ data }">
        <RouterLink
          :to="{
            name: 'Blog',
            params: { 
              pageId: data.pageId,
              name: data.pageTitle.replaceAll(' ', '-')
            }
          }"
          class="page-link"
        >
          {{ data.pageTitle }}
        </RouterLink>
      </template>
          </Column>
          <Column field="pageDate" header="تاریخ ثبت" class="p-2">
            <template #body="{ data }">
              <span> {{ new Date(data.pageDate).toLocaleDateString('fa-IR',{ year: 'numeric', month: 'numeric', day: 'numeric' ,hour:'numeric',minute:'numeric'}) }}</span>
            </template>
          </Column>
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
onServerPrefetch(async () => {
  await FetchData("")
 });
onBeforeMount(async() => {
  await FetchData("")
});

const FetchData = async (ResultType: string) => {
      loading.value = true;
      await store.GetBlogsAdmin().then(() => {
        BlogsAllList.value = store.BlogsAdminData.List
        loading.value = false;
      })
    }

</script>

<style>

</style>

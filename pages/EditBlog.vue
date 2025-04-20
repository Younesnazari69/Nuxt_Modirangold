<template>
    <Layout :LoginPage="true" v-if="store.CurrentUserData != null && store.CurrentUserData.UserType === '1'">
    <div class="edit-blog">
      <h3>ویرایش وبلاگ</h3>
      <form @submit.prevent="updateBlog">
        <div class="field">
          <label for="pageTitle">نام صفحه</label>
          <InputText v-model="blog.pageTitle" id="pageTitle" :style="{ width: '100%' }" required />
        </div>
        
        <div class="field">
          <label for="pageText">محتوای صفحه (HTML)</label>
          <Editor v-model="blog.pageText" id="pageText" :style="{ height: '300px', border: '1px solid #ccc', backgroundColor: '#f9f9f9',align : 'right' }"   />
        </div>
  
        <div class="field">
          <label for="pageDate">تاریخ ثبت</label>
          <p-calendar v-model="blog.pageDate" id="pageDate" :dateFormat="'yyyy/mm/dd'" :showTime="true" :hourFormat="'24'" />
        </div>
  
        <div class="field">
          <label for="pageIsActive">وضعیت</label>
          <Checkbox v-model="blog.pageIsActive" id="pageIsActive" />
        </div>
  
        <Button label="ذخیره" icon="pi pi-check" type="submit" class="btn btn-success" />
      </form>
     </div>
    </Layout>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useDataStore } from '../stores/data';
  import InputText from 'primevue/inputtext';
  import Checkbox from 'primevue/checkbox';
  import Button from 'primevue/button';
  import Layout from '../containers/Layout.vue'
  import Editor from 'primevue/editor'; // Import Editor component
  import { Calendar } from 'primevue/calendar'; // Import Calendar component
  import moment from 'moment-jalaali'; // Import moment-jalaali for Persian date
  
  const store = useDataStore();
  const router = useRouter();
  const route = useRoute();
  
  const blog = ref<any>({});
  
  onMounted(async () => {
    debugger
    const blogId = route.params.id;

  

    if (blogId) {

    await store.FetchPage(Number(blogId)).then(() => {
        debugger
      blog.value = store.PagesData.Page
      blog.value.pageText = blog.value.pageText.replaceAll('/Images/','https://darbastan.org/Images/')
    })
    debugger
    //   const foundBlog = store.BlogsAdminData.List.find((blog: any) => blog.id === blogId);
    //   if (foundBlog) {
    //     // Convert the saved Gregorian date to Persian date
    //     foundBlog.pageDate = moment(foundBlog.pageDate).format('jYYYY/jMM/jDD');
    //     blog.value = { ...foundBlog };
    //   }
    }
  });
  
  const updateBlog = () => {
    // Convert Persian date back to Gregorian date before saving
    blog.value.pageDate = moment(blog.value.pageDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
    // store.UpdateBlog(blog.value).then(() => {
    //   router.push({ name: 'BlogManagement' });
    // });
  };
  </script>
  
  <style scoped>
  .edit-blog {
    padding: 20px;
  }
  
  .field {
    margin-bottom: 15px;
  }



  </style>
  
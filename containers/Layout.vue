<script setup lang="ts">
import TopBar from './TopBar.vue'
import MainNavbar from './MainNavbar.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Content from './Content.vue'
import PWA_InstallButton from './PWA_InstallButton.vue'


const props = defineProps(['ShowPageHeader', 'PageTitle', 'LoginPage'])

</script>

<template>
  <div class="wrapper">
    <TopBar></TopBar>
    <MainNavbar></MainNavbar>
    <Navbar></Navbar>
    <Content :ShowPageHeader="ShowPageHeader" :PageTitle="PageTitle" :LoginPage="LoginPage">
      <slot> </slot>
    </Content>
    <Footer></Footer>
    <PWA_InstallButton></PWA_InstallButton>
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  </div>
</template>

<style scoped></style>

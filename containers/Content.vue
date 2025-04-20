<script setup lang="ts">
import { ref, onBeforeMount, onServerPrefetch } from "vue"
import { useDataStore } from "@/stores/data"
const store = useDataStore();
const props = defineProps(['children', 'ShowPageHeader', 'PageTitle', 'LoginPage'])
const sidebar = ref<HTMLButtonElement | null>(null)

const ontoggle = () => {
    if (sidebar.value.classList.contains("active")) {
        sidebar.value.classList.remove("active")
    } else {
        sidebar.value.classList.add("active")
    }
}

onBeforeMount(() => {
    store.currentUser();
})

const SetMenuActive = (MenuTitle: string, ParentTitle: any) => {
    store.SetMenuActive({ MenuTitle, ParentTitle })
}
</script>

<template>
        <div v-if="ShowPageHeader == true" class="page-header" style="margin-top: 0px;">
            <div id="content">

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{{ PageTitle }}</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div v-if="LoginPage == true">
            <div class="wrapper">
                <nav ref="sidebar" id="sidebar">
                    <div class="sidebar-header ">
                        <h4 v-if="store.CurrentUserData != null">{{ store.CurrentUserData.UserName }}</h4>
                    </div>

                    <ul class="list-unstyled components">
                        <li :class="[(store.MenuActive != null && store.MenuActive == 'LoginHome') ? 'active' : '']">
                            <router-link :to="{ name: 'LoginHome' }"
                                @click="SetMenuActive('LoginHome', null)">پروفایل</router-link>
                        </li>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle">آگهی ها</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">لیست آگهی ها</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="#">درخواست ها</a>
                        </li>
                        <li>
                            <a href="#NewsSubmenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle">وبلاگ</a>
                            <ul class="collapse list-unstyled" id="NewsSubmenu">
                                <li>
                                    <a href="#">لیست خبرها</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">تماس با ما</a>
                        </li>
                        <li>
                            <a href="#">تغییر کلمه عبور</a>
                        </li>
                        <li v-if="store.CurrentUserData != null && store.CurrentUserData.UserType === '1'">
                            <a href="#SiteManagement" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle">مدیریت سایت</a>
                            <ul :class="[(store.MenuActive != null && store.MenuActive.ParentTitle == 'SiteManagement') ? 'collapse list-unstyled show' : 'collapse list-unstyled']"
                                id="SiteManagement">
                                <li
                                    :class="[(store.MenuActive != null && store.MenuActive.MenuTitle == 'UsersManagement') ? 'active' : '']">
                                    <router-link :to="{ name: 'UsersManagement' }"
                                        @click="SetMenuActive('UsersManagement', 'SiteManagement')">فهرست ثبت نام
                                        کنندگان</router-link>
                                </li>
                                <li
                                    :class="[(store.MenuActive != null && store.MenuActive.MenuTitle == 'ScaffoldersRegister') ? 'active' : '']">
                                    <router-link :to="{ name: 'ScaffoldersRegister' }"
                                        @click="SetMenuActive('ScaffoldersRegister', 'SiteManagement')">لیست طلا بندان 
                                    </router-link>
                                </li>
                                <li
                                    :class="[(store.MenuActive != null && store.MenuActive.MenuTitle == 'BlogsAdmin') ? 'active' : '']">
                                    <router-link :to="{ name: 'BlogsAdmin' }"
                                        @click="SetMenuActive('BlogsAdmin', 'SiteManagement')">مدیریت وبلاگ   
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <button type="button" id="sidebarCollapse" class="btn btn-info" @click="ontoggle">
                        <i class="fa fa-align-justify">
                        </i>
                    </button>
                    <slot> </slot>
                </div>
            </div>
        </div>
        <div v-else>
            <slot> </slot>
        </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

.wrapper #content {
    width: 100%;
}

#sidebar {
    background-color: #fdbe33;
    margin: 45px 0 15px 0;
    min-width: 250px;
    max-width: 250px;
    min-height: 100vh;
}
#content {
    margin: 45px 0 15px 0;
}


#sidebar.active {
    margin-right: -250px;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
}


#sidebar .sidebar-header {
    padding: 20px;
    background: #030f27;
    color: #fff;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #efb330;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #efb330;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #efb330;
}

a:active,
a:focus {
    color: #080808;
    background: #eca304;
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #efb330;
}


#sidebarCollapse {
    display: block;
}

@media (max-width: 768px) {
    #sidebar {
        margin-right: -250px;
    }

    #sidebar.active {
        margin-right: 0;
        position: absolute;
        z-index: 9;
    }

    #sidebarCollapse {
        display: block;
    }
}
</style>

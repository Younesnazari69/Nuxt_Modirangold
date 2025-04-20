<template>
  <div v-if="Type == null || Type == 'Form'">
    <div v-if="File != null">
      <div v-if="File.fileType.includes('image')" class="d-flex flex-column align-items-center">
        <img :src="File.url" width="100px" height="100px" />
        <div class="btn btn-md btn-success m-2" @click="VisibleShowFile = true">نمایش</div>
        <div
          class="btn btn-md btn-danger m-2" @click="RemoveFile($event)">
          <ConfirmDialog group="templating" class="bg-light">
            <template #container="{ acceptCallback, rejectCallback }">
              <div class="border-round p-3">
                <AnFilledWarning class="fs-1 text-danger"></AnFilledWarning>
                <p class="text-dark">آیا از حذف فایل مورد نظر اطمینان دارید؟</p>
                <div class="flex align-items-center gap-2 mt-3">
                  <Button class="btn btn-danger m-1 pb-0" @click="acceptCallback"> تایید</Button>
                  <Button class="btn btn-success m-1 pb-0" @click="rejectCallback" severity="secondary">لغو</Button>
                </div>
              </div>
            </template>
          </ConfirmDialog>
          حذف
        </div>
        <Dialog v-model:visible="VisibleShowFile" maximizable modal class="pdf"
          :pt="{ mask: { style: 'backdrop-filter: blur(2px)' } }">
          <img :src="File.url" />
        </Dialog>
      </div>
      <div v-else-if="File.fileType.includes('pdf')" class="d-flex flex-column align-items-center">
        <embed :src="File.url" type="application/pdf" width="150px" height="150px" />
        <div class="btn btn-md btn-success m-2" @click="VisibleShowFile = true">نمایش</div>
        <div 
          class="btn btn-md btn-danger m-2" @click="RemoveFile($event)">
          <ConfirmDialog group="templating" class="bg-light">
            <template #container="{ acceptCallback, rejectCallback }">
              <div class="border-round p-3">
                <AnFilledWarning class="fs-1 text-danger"></AnFilledWarning>
                <p class="text-dark">آیا از حذف فایل مورد نظر اطمینان دارید؟</p>
                <div class="flex align-items-center gap-2 mt-3">
                  <Button class="btn btn-danger m-1 pb-0" @click="acceptCallback"> تایید</Button>
                  <Button class="btn btn-success m-1 pb-0" @click="rejectCallback" severity="secondary">لغو</Button>
                </div>
              </div>
            </template>
          </ConfirmDialog>
          حذف
        </div>
        <Dialog v-model:visible="VisibleShowFile" maximizable modal class="pdf" >
          <embed :src="File.url" type="application/pdf" width="100%" height="810px" />
        </Dialog>
      </div>
      <div v-else-if="File.url != ''" class="d-flex flex-column align-items-center">
        <a class="btn btn-md btn-success m-2" :href="File.url" target="_blank"> نمایش </a>
        <div class="btn btn-md btn-danger m-2" @click="RemoveFile($event)">
          <ConfirmDialog group="templating" class="bg-light">
            <template #container="{ acceptCallback, rejectCallback }">
              <div class="border-round p-3">
                <AnFilledWarning class="fs-1 text-danger"></AnFilledWarning>
                <p class="text-dark">آیا از حذف فایل مورد نظر اطمینان دارید؟</p>
                <div class="flex align-items-center gap-2 mt-3">
                  <Button class="btn btn-danger m-1 pb-0" @click="acceptCallback"> تایید</Button>
                  <Button class="btn btn-success m-1 pb-0" @click="rejectCallback" severity="secondary">لغو</Button>
                </div>
              </div>
            </template>
          </ConfirmDialog>
          حذف
        </div>
      </div>

    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </div>
  <div v-else>
    <a v-if="File != null" class="btn btn-md btn-success m-2" :href="File.url" target="_blank">
      نمایش
    </a>
    <Loading v-else></Loading>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeMount, onBeforeUpdate, watch } from 'vue'
import Dialog from 'primevue/dialog'
import ConfirmDialog from 'primevue/confirmdialog';

import { useDataStore } from '../stores/data'
import { useConfirm } from 'primevue/useconfirm'

export default defineComponent({
  name: 'ShowFile',
  props: ['guid', 'Type', 'access'],
  components: {
    Dialog,
    ConfirmDialog
  },
  setup(props) {
    const store = useDataStore()
    const confirm = useConfirm()

    const File = ref<any>(null)
    const VisibleShowFile = ref(false)

    onBeforeMount(() => {
      FetchFile()
    })

    watch([() => props.guid], () => {
      FetchFile()
    })
    const FetchFile = () => {
      File.value = null
      if (props.guid != null) {
 
        store.fetchFileByGUIDFile(props.guid).then((res) => {
          debugger
          File.value = res
          console.log("File URL:", File.value.url);
        })

      } else {
        File.value = {
          FileType: '',
          Url: ''
        }
      }
    }
    const RemoveFile = (event: any) => {
      debugger
      confirm.require({
        target: event.currentTarget,
        group: 'templating',
        accept: () => {
          store.deleteFileByGUID(props.guid).then((res) => {
            File.value = res
          })
        },
        reject: () => { }
      })

    }

    return {
      store,
      RemoveFile,
      File,
      VisibleShowFile
    }
  }
})
</script>

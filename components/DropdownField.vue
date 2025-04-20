<template>
    <Dropdown :show-clear="true" v-model="model.Selected" :options="model.Items" :data-key="dataKey"
      :option-label="optionLabel" placeholder="انتخاب کنید" :name="name" class="w-full md:w-12rem w-100"
      :filter="filter != null ? filter : true">
      <template #clearicon="slotProps">
        <BIconX @click="RemoveItem" class="m-2 fs-3"></BIconX>
      </template>
    </Dropdown>
    <Field v-if="model.Selected != null" class="form-control p-inputtext" type="text" placeholder="" :name="name"
      autocomplete="off" v-model="FieldValue" hidden="true" />
    <div class="fv-plugins-message-container">
      <div class="fv-help-block">
        <ErrorMessage :name="name" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { Field, ErrorMessage } from 'vee-validate'
  import Dropdown from 'primevue/dropdown'
  
  export default defineComponent({
    name: 'DropdownField',
    props: ['model', 'dataKey', 'optionLabel', 'name', 'FieldValue', 'filter'],
    components: {
      Field,
      ErrorMessage,
      Dropdown,
    },
    setup(props) {
      const RemoveItem = () => {
        props.model.Selected = { id: null, name: "" }
      }
      return {
        RemoveItem
      }
    }
  })
  </script>
  
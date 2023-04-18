<template>
  <div>

    <template v-for="typeItem, i in types">
      <div>------------</div>
      <template v-for="statusItem, i2 in status">
        <c-button @click="cbtnClick" :type="typeItem" :shape="shapeFn(i2)" :status="statusItem">{{
          `${typeItem}+${statusItem}` }}</c-button>
      </template>
    </template>

  </div>
</template>

<script lang="ts" setup>
let types = ['primary', 'secondary', 'outline', 'dashed', 'text']
let status = ['normal', 'warning', 'danger']
const shapeFn = (i: number) => {
  if (i > 2) {
    return 'circle'
  }
  if (i > 1) {
    return 'round'
  }
  return 'square'
}
const cbtnClick = () => {
  console.log('cbtnClick');
}
</script>
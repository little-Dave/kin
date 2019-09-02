<template>
  <div>
    <Yo></Yo>
    <router-view/>
  </div>
</template>

<script>
  import Yo from "./components/HelloWorld.vue"

export default {
  components: {
    Yo
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <tool-bar></tool-bar>
    <Transition name="page">
      <router-view></router-view>
    </Transition>
  </div>
</template>
<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>
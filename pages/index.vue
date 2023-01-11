<template>
  <div class="app">
    <app-header />
    <nuxt-child></nuxt-child>
    <app-footer />
  </div>
</template>

<script>
import appHeader from "~/components/appHeader.vue";
import appFooter from "~/components/appFooter.vue";
export default {
  head: () => ({
    titleTemplate: "[重制版]Team:USTC-Software%s",
  }),
  components: {
    appHeader,
    appFooter,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style scope>
</style>


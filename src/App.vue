<template>
  <div id="app">
    <div id="nav" class="back_acc color_white text_center">
      <router-link class="color_white" to="/">Home</router-link> |
      <router-link class="color_white" to="/about">About</router-link> |
      <router-link class="color_white" to="/cms">CMS</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

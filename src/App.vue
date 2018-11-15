<template>
  <div id="app" class="">
    <div class="grid-y grid-frame">
      <div id="nav" class="back_acc-n4 color_white text_center cell shrink">
        <router-link class="color_white" to="/">Home</router-link> |
        <router-link class="color_white" to="/about">About</router-link> |
        <router-link class="color_white" to="/cms">CMS</router-link>
      </div>
      <router-view class="cell auto"/>
    </div>
  </div>
</template>

<style>
</style>

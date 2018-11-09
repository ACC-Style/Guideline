<template>
  <div id="cms" class="cms grid-y cell auto">
    <div class="cell shrink border_solid border-bottom-width_2 border_secondary-4">
      <AppHeader></AppHeader>
    </div>
    <div class="body cell auto grid-x ">
      <div class="cell small-2 back_primary-n2 border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Guidelines'"/>
        <SearchFilter></SearchFilter>&nbsp;</div>
      <div class="cell small-2 back_primary-n1 border-right-width_1 border_solid border_primary-n4">
         <ColumnHeader :title="'Sections'"/>
        <SearchFilter></SearchFilter>&nbsp;</div>
      <div class="cell small-2 back_primary border-right-width_1 border_solid border_primary-n4">
         <ColumnHeader :title="'Objects'"/>
        <SearchFilter></SearchFilter>&nbsp;</div>
      <div class="cell auto back_secondary_2 texture_light padding_5">
        <div class="card shadow_2 cell small-6 large-4">
          <div class=" font_slab border-top-left-square color_white font-size_3 padding_4 texture_dust back_secondary">
            This is a header
          </div>
          <div class="card-section">
            <h4>This is a card.</h4>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../components/appheader.vue";
  import SearchFilter from "../components/searchfilter.vue";
  import ColumnHeader from "../components/columnheader.vue";
  export default {
    data() {
      return {};
    },
    components: {
      AppHeader,
      SearchFilter,
      ColumnHeader
    }
  };
</script>

<style scoped>
  
</style>
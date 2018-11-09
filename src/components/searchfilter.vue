<template>
  <div class="padding_2">
      <form @submit.prevent="runSearch">
          <div class="input-group margin-bottom_0">
          <input class="input-group-field border_white-6" type="text" v-model="searchTerm" placeholder="Search...">
          <div class="input-group-button">
            <button type="submit" class="color_primary-4 hover:primary-n3 border_white-6 border_solid border-width_1 padding_3"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
         name: 'SearchFilter',
    }
</script>

<style scoped>
 input[type="text"]{
     background-color: transparent;
     border:rgba(255, 255, 255, 0.4) 1px solid;
     color:white;

 }
</style>
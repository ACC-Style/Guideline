<template>
        <div class="font_1 text_uppercase back_white-8 padding_2 color_white padding-right_4 border-bottom-width_1 border_solid border_primary-n4 font_n1 grid-x full">
            <div class="cell shrink"><i class="fas fa-file"></i>&nbsp;</div>
            <div class="cell auto">{{title}}</div>
            <div class="cell shrink"><i class="fas icon-toggle_plus-minus"></i></div>
          
        </div>
</template>

<script>
    export default {
         name: 'ColumnHeader',
         props: {
             title: {
                 type: String,
                 default: "missing"
             },
         },
    }
</script>

<style scoped>
 input[type="text"]{
     background-color: transparent;
     border:rgba(255, 255, 255, 0.4) 1px solid;
     color:white;

 }
</style>
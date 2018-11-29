<template>
        <div class="font_1 text_uppercase color_white 4 bw-b_1 br_solid bg_primary-n3 br_primary-n4 font_n1 grid-x full">
            <div class="cell p_3 shrink"><i class="fas" v-bind:class="icon"></i>&nbsp;</div>
            <div class="cell p_3 p-x_0 auto" v-if="!iscollapsed">{{title}}</div>
            <div @click="$emit('toggleCollapse')" class="hover:back-color_acc-n5 cell p_3 shrink br-r_1 br_white br_solid" v-bind:class="{'is-active':iscollapsed}"><i class="fas icon-toggle_chevron-double-left-right"></i></div>
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
             icon:{
                 type:String,
                 default: "fa-file"
             },
             iscollapsed:{
                 type: Boolean,
                 default: false
             }
         }
    }
</script>

<style scoped>
 input[type="text"]{
     background-color: transparent;
     border:rgba(255, 255, 255, 0.4) 1px solid;
     color:white;

 }
</style>
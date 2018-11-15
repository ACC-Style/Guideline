<template>
 <div class="ListItems overflow scrollbar-mini shadow_n3">
        <ul class="m_0 p_0">
        <li v-for="item in items" v-bind:class="{'bg_info-n3': item.selected}" class="hover:back_primary-n3 color_white grid-x border_solid bw-b_1 border_white-7" @click="$emit('itemSelected')" v-bind:key="item.id">
            <div class="cell shrink p-x_3 p-y_2 align-self-middle"><i class="fas fa-fw" v-bind:class="item.type"></i></div>
            <div class="cell auto p_2 p-x_3 border_white-9 bw-r_1 bw-l_1 border_solid">{{ item.title }}</div>
            <div class="cell shrink p-x_2 align-self-middle"><i class="fas fa-grip-vertical"></i></div>
        </li>
    </ul>
 </div>
</template>

<script>
    export default {
         name: 'ListItems',
         data () {
             return {
             }
         },
            props:{
                 items:{
                    type:Array,
                    default:function(){return [{id:0, title:'Nothing', type:'fa-question'},{id:0, title:'Nothing', type:'fa-question'}]; }
                    },
                 icon:{
                     type:String,
                     default:"fa-question"
                     }
            }

    }
</script>

<style >
.overflow{overflow-y: scroll; height: 100%;
}


</style>
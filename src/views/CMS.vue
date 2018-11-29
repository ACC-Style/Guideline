<template>
  <div id="cms" class="cms grid-y cell auto">
    <div class="cell shrink border_solid border-bottom-width_2 border_acc-n2">
      <AppHeader></AppHeader>
    </div>
    <div class="body cell auto grid-x ">
      <div v-bind:class="{'small-2':!guidelineColumnCollapsed,'shrink':guidelineColumnCollapsed}" class="cell back_primary-n2 border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Guidelines'" :icon="'fa-book'" :iscollapsed="guidelineColumnCollapsed" v-on:toggleCollapse="guidelineColumnCollapsed = !guidelineColumnCollapsed"/>
        <SearchFilter :iscollapsed="guidelineColumnCollapsed"></SearchFilter>
        <ListItems :items="guidelines" :icon="'fa-file'" :iscollapsed="guidelineColumnCollapsed" ></ListItems>
        </div>
      <div  v-bind:class="{'small-2':!sectionColumnCollapsed,'shrink':sectionColumnCollapsed}"  class="cell back_primary-n1 border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Sections'" :icon="'fa-heading'" :iscollapsed="sectionColumnCollapsed"  v-on:toggleCollapse="sectionColumnCollapsed = !sectionColumnCollapsed"/>
        <SearchFilter :iscollapsed="sectionColumnCollapsed" ></SearchFilter>
        <ListItems :items="sections" :icon="'fa-file'" :iscollapsed="sectionColumnCollapsed"  ></ListItems>
        </div>
      <div  v-bind:class="{'small-2':!objectColumnCollapsed,'shrink':objectColumnCollapsed}"  class="cell back_primary border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Objects'" :icon="'fa-cubes'" :iscollapsed="objectColumnCollapsed"  v-on:toggleCollapse="objectColumnCollapsed = !objectColumnCollapsed"/>
        <SearchFilter :iscollapsed="objectColumnCollapsed"  v-on:toggleFilterCollapse="filterObjectCollapsed = !filterObjectCollapsed"></SearchFilter>
        <div class="bg_secondary-n4 " v-if="!filterObjectCollapsed && !objectColumnCollapsed">
          <div class="grid-container p_2 ">

            <div class="grid-x m-b_3 p_2 p-x_3">
              <div class="switch tiny round cell shrink m-b_0">
                <input class="switch-input" id="recFilter" type="checkbox" name="recFilter">
               <label class="switch-paddle" for="recFilter">
                <span class="show-for-sr">Reccomendation</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white"><i class="fas fa-badge-check"></i>   Reccomendation</div>
          </div>
          <div class="grid-x m-b_3 p_2 p-x_3">
              <div class="switch tiny round cell shrink m-b_0">
                        <input class="switch-input" id="tableFilter" type="checkbox" name="tableFilter">
              <label class="switch-paddle" for="tableFilter">
                <span class="show-for-sr">tableFilter</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white"><i class="fas fa-table"></i> Tables</div>
          </div>
            <div class="grid-x m-b_3 p_2 p-x_3">
              <div class="switch tiny round cell shrink m-b_0">
              <input class="switch-input" id="figureFilter" type="checkbox" name="figureFilter">
              <label class="switch-paddle" for="figureFilter">
                <span class="show-for-sr">figureFilter</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white"><i class="fa fa-sitemap"></i> Figures</div>
          </div>
          <div class="grid-x m-b_3 p_2 p-x_3">
            <div class="switch tiny round cell shrink m-b_0">
              <input class="switch-input" id="refFilter" type="checkbox" name="refFilter">
              <label class="switch-paddle" for="refFilter">
                <span class="show-for-sr">refFilter</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white"><i class="fas fa-project-diagram"></i> References</div>
          </div>
        </div>
        </div>
        <ListItems :items="objects" :icon="'fa-file'"  :iscollapsed="objectColumnCollapsed" ></ListItems>
        </div>
      <div class="cell auto back_secondary_2 texture_light bg_primary-n4 padding_4  overflow scrollbar-mini">
        <div class="card shadow_2 cell small-6 large-4">
          <div class=" font_slab border-top-left-square color_white font-size_3 padding_4 texture_dust back_secondary">
            <i class="fas fa-badge-check"></i>   References
          </div>
          <div class="card-section">
            <FormRec class="p_4"></FormRec>

            <div class="clearfix border_solid b_primary-4  bw-t_1 p_4 p-b_0">
              <a href="" class="button success float-right"><i class="fas fa-save"></i> Save</a>
              <a href="" class="button hollow secondary float-right m-x_3">Cancel</a>
            </div>
            <div class="clearfix p_4 p-t_5">
                <h5 class="font_0 font_bold is-active c_secondary-2"><i class="fa icon-toggle_plus-minus"></i> Version History</h5>
                <ul class="no-bullet border_solid bw-t_1 border_black-5">
                  <li class="hover:back_primary-3 c_secondary-3 hover:color_black border_solid bw-b_1 border_black-7 font_n1">
                    <div class="grid-x p_2">
                      <div class="cell auto p-l_4 font_bold">Name of Editor</div>
                      <div class="cell auto font_secondary-2">Date:xx/xx/xxxx</div>
                      <div class="cell auto text-right p-r_4"><i class="fas fa-clock"></i> Revert</div>
                    </div>
                  </li>
                </ul>
              </div>
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
  import ListItems from "../components/listItems.vue";
  import { mapState } from 'vuex';
  import FormRec from "../components/formRecommendation.vue";
  export default {
    data() {
      return {
        guidelineColumnCollapsed:false,
        sectionColumnCollapsed:false,
        objectColumnCollapsed:false,
        filterObjectCollapsed:true,
      };
    },
    components: {
      AppHeader,
      SearchFilter,
      ColumnHeader,
      ListItems,
      FormRec
    },
    computed:{
      ...mapState([ 'objects','guidelines','sections' ])
    }
  };
</script>

<style scoped>
  
</style>
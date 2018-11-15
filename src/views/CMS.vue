<template>
  <div id="cms" class="cms grid-y cell auto">
    <div class="cell shrink border_solid border-bottom-width_2 border_secondary-4">
      <AppHeader></AppHeader>
    </div>
    <div class="body cell auto grid-x ">
      <div class="cell small-2 back_primary-n2 border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Guidelines'" :icon="'fa-book'"/>
        <SearchFilter></SearchFilter>
        <ListItems :items="guidelines" :icon="'fa-file'" ></ListItems>
        </div>
      <div class="cell small-2 back_primary-n1 border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Sections'" :icon="'fa-heading'"/>
        <SearchFilter></SearchFilter>
        <ListItems :items="sections" :icon="'fa-file'" ></ListItems>
        </div>
      <div class="cell small-2 back_primary border-right-width_1 border_solid border_primary-n4">
        <ColumnHeader :title="'Objects'" :icon="'fa-cubes'"/>
        <div class="m-b_2 bg_secondary-1 display_none">
          <div class="border_solid bw-t_3 b_acc-0 color_white"><a href="" class="color_white back_acc p_2 float-right p-x_3"><i class="fas fa-times"></i></a></div>
          <div class="grid-container p_2 ">

            <div class="grid-x m-b_3 p_2 p-x_3">
              <div class="switch tiny round cell shrink m-b_0">
                <input class="switch-input" id="smallSwitch" type="checkbox" name="recFilter">
              <label class="switch-paddle" for="smallSwitch">
                <span class="show-for-sr">Small Portions Only</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white">Reccomendation</div>
          </div>
          <div class="grid-x m-b_3 p_2 p-x_3">
                      <div class="switch tiny round cell shrink m-b_0">
                        <input class="switch-input" id="smallSwitch" type="checkbox" name="tableFilter">
              <label class="switch-paddle" for="smallSwitch">
                <span class="show-for-sr">Small Portions Only</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white">Tables</div>
          </div>
                    <div class="grid-x m-b_3 p_2 p-x_3">
                      <div class="switch tiny round cell shrink m-b_0">
                        <input class="switch-input" id="smallSwitch" type="checkbox" name="figureFilter">
              <label class="switch-paddle" for="smallSwitch">
                <span class="show-for-sr">Small Portions Only</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white">Figures</div>
          </div>
          <div class="grid-x m-b_3 p_2 p-x_3">
            <div class="switch tiny round cell shrink m-b_0">
              <input class="switch-input" id="smallSwitch" type="checkbox" name="refFilter">
              <label class="switch-paddle" for="smallSwitch">
                <span class="show-for-sr">Small Portions Only</span>
              </label>
            </div>
            <div class="cell auto p-l_4 color_white">References</div>
          </div>
        </div>
        </div>
        <SearchFilter></SearchFilter>
        <ListItems :items="objects" :icon="'fa-file'" ></ListItems>
        </div>
      <div class="cell auto back_secondary_2 texture_light padding_4  overflow scrollbar-mini">
        <div class="card shadow_2 cell small-6 large-4">
          <div class=" font_slab border-top-left-square color_white font-size_3 padding_4 texture_dust back_secondary">
            <i class="fas fa-badge-check"></i>   References
          </div>
          <div class="card-section">
            <FormRec></FormRec>
              <div class="border_solid b_primary-4  bw-t_1 p_4">
                <h5 class="font_1"><i class="fa icon-toggle_plus-minus"></i> Version History</h5>
                <ul class="no-bullet border_solid bw-t_1 border_black-5">
                  <li class="hover:back_primary-3 color_secondary hover:color_black border_solid bw-b_1 border_black-7">
                    <div class="grid-x p_2">
                      <div class="cell auto p-l_4">Name of Editor</div>
                      <div class="cell auto font_secondary-2">Date:xx/xx/xxxx</div>
                      <div class="cell auto text-right p-r_4"><i class="fas fa-clock"></i> Revert</div>
                    </div>
                  </li>
                </ul>
              </div>
            <div class="border_solid b_primary-4  bw-t_1 p_4">
              <a href="" class="button success float-right"><i class="fas fa-save"></i> Save</a>
              <a href="" class="button hollow secondary float-right m-x_3">Cancel</a>
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
      return {};
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
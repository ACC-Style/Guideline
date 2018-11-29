<template>
    <form @submit.prevent="runSearch" class="padding_2 FormRec">
    <div class="grid-x grid-margin-x">
        <div class="question cell small-12 medium-9 required m-b_3" v-bind:class="state">
            <label for="input-x" class="font_bold grid-x font_1">     
                <span class="text cell shrink">Title</span>
                <span class="required-holder cell shrink">
                    <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
                </span>
            </label>
            <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
                <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                    <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
                </div>
                <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                    <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
                </div>
                <div class="input-space cell auto">
                    <input id="input-x" type="text" class="margin-bottom_0 " value="Other mid forceps operation" v-bind:class="'border_'+state+'-3' " />   
                </div>
            </div>
            <div class="message-holder font_n1">    
                <div class="alert padding_2 back_alert-n1 color_white"><i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
                <div class="warning padding_2 back_warning-n1 color_white"><i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
                <div class="info padding_2 back_info-n1 color_white"><i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
            <div class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0">This is some hint text</div>
        </div>
        <div class="question required m-b_3 cell small-12 medium-3" v-bind:class="state">
            <label for="input-x" class="font_bold grid-x font_1">     
                <span class="text cell shrink">ID</span>
                <span class="required-holder cell shrink">
                    <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
                </span>
            </label>
            <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
                <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                    <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
                </div>
                <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                    <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
                </div>
                <div class="input-space cell auto">
                    <input id="input-x" type="text" class="margin-bottom_0 " value="123432" v-bind:class="'border_'+state+'-3' " />   
                </div>
            </div>
            <div class="message-holder font_n1">    
                <div class="alert padding_2 back_alert-n1 color_white"><i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
                <div class="warning padding_2 back_warning-n1 color_white"><i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
                <div class="info padding_2 back_info-n1 color_white"><i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
            <div class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0">This is some hint text</div>
        </div>   
    </div>
    <div class="question m-b_3" v-bind:class="state">
        <label for="input-x" class="font_bold grid-x font_1">     
            <span class="text cell shrink">Content</span>
            <span class="required-holder cell shrink">
                <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
            </span>
        </label>
        <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
            <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
            </div>
            <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
            </div>
            <div class="input-space cell auto">
                <textarea id="input-x" type="text" class="margin-bottom_0 " v-bind:class="'border_'+state+'-3' " />   
            </div>
        </div>
        <div class="message-holder font_n1">    
            <div class="alert padding_2 back_alert-n1 color_white">    
                <i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
            <div class="warning padding_2 back_warning-n1 color_white">                        <i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
            <div class="info padding_2 back_info-n1 color_white">
                <i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
        <div class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0">This is some hint text</div>
    </div>
    <div class="grid-margin-x grid-x">
        <div class="cell auto">
            <div class="question required m-b_3" v-bind:class="state">
        <label for="input-x" class="font_bold grid-x font_1">     
            <span class="text cell shrink">LOE</span>
            <span class="required-holder cell shrink">
                <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
            </span>
        </label>
        <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
            <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
            </div>
            <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
            </div>
            <div class="input-space cell auto">
            <select class="m-b_0" name="" id="">
                <option class="p_2 line-height_3" style='background:green; height:2rem;'>I</option>
                <option  class="p_2 line-height_3" style='background:yellow; height:2rem;'>IIa</option>
                <option  class="p_2 line-height_3" style='background:Orange; height:2rem;'>IIIa</option>
                <option  class="p_2 line-height_3" style='background:Red; height:2rem;'>III</option>
            </select>   
            </div>
        </div>
        <div class="message-holder font_n1">    
            <div class="alert padding_2 back_alert-n1 color_white">    
                <i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
            <div class="warning padding_2 back_warning-n1 color_white">                        <i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
            <div class="info padding_2 back_info-n1 color_white">
                <i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
        <div class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0">This is some hint text</div>
    </div></div>
        <div class="cell auto">
            <div class="question required m-b_3" v-bind:class="state">
        <label for="input-x" class="font_bold grid-x font_1">     
            <span class="text cell shrink">COR</span>
            <span class="required-holder cell shrink">
                <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
            </span>
        </label>
        <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
            <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
            </div>
            <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
            </div>
            <div class="input-space cell auto">
                <select class="m-b_0"  name="" id="">
                    <option>I</option>
                    <option>II</option>
                </select>     
            </div>
        </div>
        <div class="message-holder font_n1">    
            <div class="alert padding_2 back_alert-n1 color_white">    
                <i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
            <div class="warning padding_2 back_warning-n1 color_white">                        <i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
            <div class="info padding_2 back_info-n1 color_white">
                <i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
        <div class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0">This is some hint text</div>
    </div>
    </div>
    </div>
    <div class="grid-x grid-margin-x">
        <div class="cell auto small-6">
        <div class="question required m-b_3" v-bind:class="state">
        <label for="input-x" class="font_bold grid-x font_1">     
            <span class="text cell shrink">Associated Content</span>
            <span class="required-holder cell shrink">
                <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
            </span>
        </label>
        <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
            <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
            </div>
            <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
            </div>
            <div class="input-space cell auto">
                <ul class="m_0 m-b_3 border_solid bw-t_1 border_black-7">
                    <li class="hover:back_primary-3 color_secondary hover:color_black grid-x border_solid bw-b_1 border_black-7"><div class="cell shrink p-x_3 p-y_2 align-self-middle"><i class="fas fa-fw fa-project-diagram"></i></div><div class="cell auto p_2 p-x_3 border_white-9 bw-r_1 bw-l_1 border_solid">Sphenoidotomy</div><div class="cell shrink p-x_2 align-self-middle"><i class="fas fa-times"></i></div></li>
                    <li class="hover:back_primary-3 color_secondary hover:color_black grid-x border_solid bw-b_1 border_black-7"><div class="cell shrink p-x_3 p-y_2 align-self-middle"><i class="fas fa-fw fa-project-diagram"></i></div><div class="cell auto p_2 p-x_3 border_white-9 bw-r_1 bw-l_1 border_solid">Repair of esophageal fistula, not elsewhere classified</div><div class="cell shrink p-x_2 align-self-middle"><i class="fas fa-times"></i></div></li>
                </ul>
                <a href="" class="button tiny"><i class="fas fa-plus"></i> Add Association</a>   
            </div>
        </div>
        <div class="message-holder font_n1">    
            <div class="alert padding_2 back_alert-n1 color_white">    
                <i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
            <div class="warning padding_2 back_warning-n1 color_white">                        <i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
            <div class="info padding_2 back_info-n1 color_white">
                <i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
    </div>
        </div>
        <div class="cell auto small-6">
        <div class="question required m-b_3" v-bind:class="state">
        <label for="input-x" class="font_bold grid-x font_1">     
            <span class="text cell shrink">Associated Refferences</span>
            <span class="required-holder cell shrink">
                <i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
            </span>
        </label>
        <div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
            <div class="alert border_alert-3  back_alert-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_alert padding_2"><i class="fas fa-fw fa-exclamation-square"></i></span>
            </div>
            <div class="warning border_warning-3  back_warning-4  value-space cell shrink  border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light">
                <span class="color_warning padding_2"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
            </div>
            <div class="input-space cell auto">
                <a href="" class="button tiny"><i class="fas fa-plus"></i> Add Refference</a>   
            </div>
        </div>
        <div class="message-holder font_n1">    
            <div class="alert padding_2 back_alert-n1 color_white">    
                <i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message</div> 
            <div class="warning padding_2 back_warning-n1 color_white">                        <i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message</div>
            <div class="info padding_2 back_info-n1 color_white">
                <i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input</div>
            </div>
        </div>
        </div>
    </div>
    </form>
</template>

<script>
export default {
  name: "FormRec",
  data() {
    return {
      state: "secondary"
    };
  }
};
</script>

<style scoped>
</style>
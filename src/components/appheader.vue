<template>
    <div class="AppHeader grid-x padding_1 bg_acc">
            <div class="cell auto">
                <nav aria-label="You are here:" class="margin_4 padding-left_4 color_white" role="navigation">
                <ul class="breadcrumbs">
                    <li  class="hover:underline"><a href="#"  class="padding_2 c_primary-3"><i class="fas fa-home"></i></a></li>
                    <li  data-toggle="example-dropdown">
                    <button class="text_uppercase hover:underline c_primary-3" type="button" > <i class="fas fa-book"></i>  Guideline A</button>

                    </li>
                    <li class="hover:underline"><a class="padding_2 c_primary-3" @click="$emit('gotoSection','sectionX')"><i class="fas fa-heading"></i> Esophagectomy, not otherwise specified</a></li>
                    <li  class="hover:underline c_primary-3">
                    <span class="padding_2"><span class="show-for-sr">Current: <i class="fas fa-fw fa-badge-check"></i> </span> Other mid forceps operation</span>
                    </li>
                </ul>
                </nav>
                <div class="dropdown-pane padding_0 font_0 back_secondary-5" id="example-dropdown" data-position="bottom" data-close-on-click="true" data-alignment="right"  data-dropdown data-auto-focus="true">
                    <nav>
                        <ul class="vertical menu font_n1">
                            <li><a  class="hover:back_primary hover:white" @click="$emit('gotoGuideline', 'Guideline A')">Guideline A <i class="float-right fal fa-arrow-right"></i></a></li>
                            <li><a  class="hover:back_primary hover:white" @click="$emit('gotoGuideline', 'Guideline B')">Guideline B <i class="float-right fal fa-arrow-right"></i></a></li>
                            <li><a  class="hover:back_primary hover:white" @click="$emit('gotoGuideline', 'Guideline C')">Guideline C <i class="float-right fal fa-arrow-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        <div class="cell shrink">
            <a href="" class="br_radius button clear display_inline-block font_n1 hover:back_primary hover:color_white m-y_2 margin-right_4 small">Export <i class="fas fa-download"></i></a>
            <a href="" class="br_radius button clear display_inline-block font_n1 hover:back_primary hover:color_white m-y_2 margin-right_4 small">logout <i class="fas fa-sign-out"></i></a>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        mounted() {
            this.dropdown = new Foundation.Dropdown($("#example-dropdown"), {
            // These options can be declarative using the data attributes
            animationIn: "scale-in-up"
            });
        },
    }
</script>

<style scoped>

</style>
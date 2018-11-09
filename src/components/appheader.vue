<template>
    <div class="AppHeader grid-x padding_1">
            <div class="cell auto">
                <nav aria-label="You are here:" class="margin_4 padding-left_4" role="navigation">
                <ul class="breadcrumbs">
                    <li  class="hover:underline"><a href="#"  class="padding_2"><i class="fas fa-book-heart"></i></a></li>
                    <li  class="hover:underline" data-toggle="example-dropdown">
                    <button class="text_uppercase" type="button" > <i class="fas fa-file"></i>  Guideline A</button>

                    </li>
                    <li class="hover:underline"><a class="padding_2" @click="$emit('gotoSection','sectionX')">Section X</a></li>
                    <li  class="hover:underline">
                    <span class="padding_2"><span class="show-for-sr">Current: </span> Figure Z</span>
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
        <div class="cell shrink"><a href="" class="hover:underline hover:back_primary hover:color_white display_inline-block clear padding_4 font_n1 margin-right_4">logout <i class="fas fa-sign-out"></i></a></div>
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
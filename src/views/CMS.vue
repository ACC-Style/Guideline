<template>
	<div id="cms" class="cms grid-y cell auto">
		<div class="cell shrink border_solid border-bottom-width_2 border_acc-n2">
			<AppHeader></AppHeader>
		</div>
		<div class="body cell auto grid-x">
			<div
				v-bind:class="{'small-2 ':!guidelineColumnCollapsed,'shrink ':guidelineColumnCollapsed}"
				class="cell back_primary-n2 border-right-width_1 border_solid border_primary-n4"
			>
				<ColumnHeader
					:title="'Guidelines'"
					:icon="'fa-book'"
					:iscollapsed="guidelineColumnCollapsed"
					v-on:toggleCollapse="guidelineColumnCollapsed = !guidelineColumnCollapsed"
				/>
				<SearchFilter :iscollapsed="guidelineColumnCollapsed"></SearchFilter>
				<ListItems :items="guidelines" :icon="'fa-file'" :iscollapsed="guidelineColumnCollapsed"></ListItems>
			</div>
			<div
				v-bind:class="{'small-2':!sectionColumnCollapsed,'shrink':sectionColumnCollapsed}"
				class="cell back_primary-n1 border-right-width_1 border_solid border_primary-n4"
			>
				<ColumnHeader
					:title="'Sections'"
					:icon="'fa-heading'"
					:iscollapsed="sectionColumnCollapsed"
					v-on:toggleCollapse="sectionColumnCollapsed = !sectionColumnCollapsed"
				/>
				<SearchFilter
					:iscollapsed="sectionColumnCollapsed"
					v-on:toggleFilterCollapse="filterSectionCollapsed = !filterSectionCollapsed"
				></SearchFilter>
				<FilterSection v-if="!filterSectionCollapsed && !sectionColumnCollapsed"></FilterSection>
				<ListItems :items="sections" :icon="'fa-file'" :iscollapsed="sectionColumnCollapsed"></ListItems>
			</div>
			<div
				v-bind:class="{'small-2':!objectColumnCollapsed,'shrink':objectColumnCollapsed}"
				class="cell back_primary border-right-width_1 border_solid border_primary-n4"
			>
				<ColumnHeader
					:title="'Objects'"
					:icon="'fa-cubes'"
					:iscollapsed="objectColumnCollapsed"
					v-on:toggleCollapse="objectColumnCollapsed = !objectColumnCollapsed"
				/>
				<SearchFilter
					:iscollapsed="objectColumnCollapsed"
					v-on:toggleFilterCollapse="filterObjectCollapsed = !filterObjectCollapsed"
				></SearchFilter>
				<FilterObject v-if="!filterObjectCollapsed && !objectColumnCollapsed"></FilterObject>
				<ListItems :items="objects" :icon="'fa-file'" :iscollapsed="objectColumnCollapsed"></ListItems>
			</div>
			<div
				class="cell auto back_secondary_2 texture_light bg_primary-n4 padding_4 overflow scrollbar-mini"
			>
				<FormGuideline></FormGuideline>
				<FormRef></FormRef>
				<FormTable></FormTable>
				<FormFigure></FormFigure>
			</div>
		</div>
	</div>
</template>

<script>
import AppHeader from "../components/appheader.vue";
import SearchFilter from "../components/searchfilter.vue";
import ColumnHeader from "../components/columnheader.vue";
import ListItems from "../components/listItems.vue";
import FilterObject from "../components/FilterObject.vue";
import FilterSection from "../components/FilterSection.vue";
import { mapState } from "vuex";
import FormRef from "../components/formReferences.vue";
import FormTable from "../components/formTable.vue";
import FormGuideline from "../components/formGuideline.vue";
import FormFigure from "../components/formFigure.vue";
export default {
	data() {
		return {
			guidelineColumnCollapsed: false,
			sectionColumnCollapsed: false,
			objectColumnCollapsed: false,
			filterObjectCollapsed: true,
			filterSectionCollapsed: true
		};
	},
	components: {
		AppHeader,
		SearchFilter,
		ColumnHeader,
		ListItems,
		FormRef,
		FormTable,FormFigure,
		FormGuideline,
		FilterObject,
		FilterSection
	},
	computed: {
		...mapState(["objects", "guidelines", "sections"])
	}
};
</script>

<style scoped>
</style>
<template>
	<div class="padding_2">
		<form @submit.prevent="runSearch">
			<div class="input-group margin-bottom_0">
				<input
					v-if="!iscollapsed"
					class="input-group-field border_white-6"
					type="text"
					v-model="searchTerm"
					placeholder="Search..."
				>
				<div v-if="!iscollapsed" class="input-group-button">
					<button
						type="submit"
						class="color_primary-4 hover:primary-n3 border_white-6 border_solid bw_1"
					>
						<i class="fas fa-search line-height_5 m_2"></i>
					</button>
				</div>
				<div v-if="!iscollapsed" class="input-group-button">
					<button
						v-bind:class="{'bg_acc-5 c_acc':filterOn,'color_primary-4':!filterOn}"
						@click="$emit('toggleFilterCollapse');filterOn=!filterOn"
						type="submit"
						class="hover:primary-n3 border_white-6 border_solid bw_1"
					>
						<i class="fas fa-filter line-height_5 m_2"></i>
					</button>
				</div>
				<div class="input-group-button" v-bind:class="{'w_100':iscollapsed}">
					<button
						type="submit"
						v-bind:class="{'w_100':iscollapsed}"
						class="color_primary-4 p-x_3 bg_success hover:back_success-n3 border_white-6 border_solid bw_1"
					>
						<i class="fas fa-plus line-height_5 m_2"></i>
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "SearchFilter",
	props: {
		iscollapsed: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			filterOn: false,
			searchTerm: ""
		};
	},
	methods: {}
};
</script>

<style scoped>
input[type="text"] {
	background-color: transparent;
	border: rgba(255, 255, 255, 0.4) 1px solid;
	color: white;
}
.w_100 {
	width: 100%;
}
</style>
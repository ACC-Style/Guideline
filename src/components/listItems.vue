<template>
	<div v-bind:class="{'scrollbar-mini overflow':!iscollapsed}" class="ListItems shadow_n3">
		<ul class="m_0 p_0" v-if="!iscollapsed">
			<draggable v-model="list">
				<transition-group name="list-change">
					<div
						v-for="item in list"
						v-bind:class="{'bg_info-n3': item.selected}"
						class="hover:back_primary-n3 color_white grid-x border_solid bw-b_1 border_white-7"
						@click="$emit('itemSelected')"
						v-bind:key="item.id"
					>
						<div class="cell shrink p-x_3 p-y_2 align-self-middle">
							<i class="fas fa-fw" v-bind:class="item.type"></i>
						</div>
						<div
							class="cell auto p_4 line-height_2 p-x_3 border_white-9 bw-r_1 bw-l_1 border_solid overflow-x_hidden"
						>{{ item.title }}</div>
						<div class="cell shrink align-self-middle p-x_3 handle">
							<i class="fas fa-grip-vertical"></i>
						</div>
					</div>
				</transition-group>
			</draggable>
		</ul>
	</div>
</template>

<script>
import draggable from "vuedraggable";
export default {
	name: "ListItems",
	components: {
		draggable
	},
	props: {
		items: {
			type: Array,
			default: function() {
				return [
					{ id: 0, title: "Nothing", type: "fa-question" },
					{ id: 0, title: "Nothing", type: "fa-question" }
				];
			}
		},
		icon: {
			type: String,
			default: "fa-question"
		},
		iscollapsed: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			list: this.items
		};
	}
};
</script>

<style >
.overflow {
	overflow: auto;
}
.overflow-x_hidden {
	overflow-x: hidden;
}
.ListItems {
	height: 100%;
}
.list-complete-item {
	transition: all 0.25s;
}
@supports (-ms-ime-align: auto) and (not (object-fit: cover)) {
	.overflow {
		overflow-y: scroll;
	}
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.overflow {
		overflow-y: scroll;
	}
}
</style>
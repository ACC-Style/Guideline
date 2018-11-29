<template>
	<div class="bg_secondary-n4 filterSection" >
		<div class="grid-container p_2">
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="majorFilter" type="checkbox" name="majorFilter">
					<label class="switch-paddle" for="majorFilter">
						<span class="show-for-sr">Major Sections</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-fw fa-h1"></i> Major Sections
				</div>
			</div>
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="minorSection" type="checkbox" name="minorSection">
					<label class="switch-paddle" for="minorSection">
						<span class="show-for-sr"> Minor Section</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-fw fa-h2"></i> Minor Section
				</div>
			</div>
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="subSection" type="checkbox" name="subSection">
					<label class="switch-paddle" for="subSection">
						<span class="show-for-sr">Sub Section</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-fw fa-h3"></i> Sub Section
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "filterSection"
};
</script>

<style scoped>
</style>
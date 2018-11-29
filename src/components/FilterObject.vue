<template>
	<div class="bg_secondary-n4 filterObject" >
		<div class="grid-container p_2">
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="recFilter" type="checkbox" name="recFilter">
					<label class="switch-paddle" for="recFilter">
						<span class="show-for-sr">Reccomendation</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-badge-check"></i> Reccomendation
				</div>
			</div>
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="tableFilter" type="checkbox" name="tableFilter">
					<label class="switch-paddle" for="tableFilter">
						<span class="show-for-sr">tableFilter</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-table"></i> Tables
				</div>
			</div>
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="figureFilter" type="checkbox" name="figureFilter">
					<label class="switch-paddle" for="figureFilter">
						<span class="show-for-sr">figureFilter</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fa fa-sitemap"></i> Figures
				</div>
			</div>
			

			
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="contentFilter" type="checkbox" name="contentFilter">
					<label class="switch-paddle" for="contentFilter">
						<span class="show-for-sr">contentFilter</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-align-left"></i> Text Content
				</div>
			</div>
			<div class="grid-x m-b_3 p_2 p-x_3">
				<div class="switch tiny radius cell shrink m-b_0">
					<input class="switch-input" id="refFilter" type="checkbox" name="refFilter">
					<label class="switch-paddle" for="refFilter">
						<span class="show-for-sr">refFilter</span>
					</label>
				</div>
				<div class="cell auto p-l_4 color_white">
					<i class="fas fa-project-diagram"></i> References
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "filterObject"
};
</script>

<style scoped>
</style>
<template>
	<div class="card shadow_2 cell small-6 large-4">
		<div
			class="font_slab border-top-left-square color_white font-size_3 padding_4 texture_dust back_secondary"
		>
			<i class="fas fa-book"></i> Guideline
		</div>
		<div class="card-section">
			<form @submit.prevent="runSearch" class="padding_2 FormRec">
				<div class="grid-x grid-padding-x">
					<div class="div cell small-12 large-9">
						<div class="grid-x grid-margin-x">
							<div class="question cell small-12 medium-9 required m-b_3" v-bind:class="state">
								<label for="input-x" class="font_bold grid-x font_1">
									<span class="text cell shrink">Title</span>
									<span class="required-holder cell shrink">
										<i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
									</span>
								</label>
								<div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
									<div
										class="alert border_alert-3 back_alert-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_alert padding_2">
											<i class="fas fa-fw fa-exclamation-square"></i>
										</span>
									</div>
									<div
										class="warning border_warning-3 back_warning-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_warning padding_2">
											<i class="fas fa-fw fa-exclamation-triangle"></i>
										</span>
									</div>
									<div class="input-space cell auto">
										<input
											id="input-x"
											type="text"
											class="margin-bottom_0"
											value="Other mid forceps operation"
											v-bind:class="'border_'+state+'-3' "
										>
									</div>
								</div>
								<div class="message-holder font_n1">
									<div class="alert padding_2 back_alert-n1 color_white">
										<i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message
									</div>
									<div class="warning padding_2 back_warning-n1 color_white">
										<i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message
									</div>
									<div class="info padding_2 back_info-n1 color_white">
										<i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input
									</div>
								</div>
								<div
									class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0"
								>This is some hint text</div>
							</div>
							<div class="question required m-b_3 cell small-12 medium-3" v-bind:class="state">
								<label for="input-x" class="font_bold grid-x font_1">
									<span class="text cell shrink">ID</span>
									<span class="required-holder cell shrink">
										<i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
									</span>
								</label>
								<div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
									<div
										class="alert border_alert-3 back_alert-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_alert padding_2">
											<i class="fas fa-fw fa-exclamation-square"></i>
										</span>
									</div>
									<div
										class="warning border_warning-3 back_warning-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_warning padding_2">
											<i class="fas fa-fw fa-exclamation-triangle"></i>
										</span>
									</div>
									<div class="input-space cell auto">
										<input
											id="input-x"
											type="text"
											class="margin-bottom_0"
											value="123432"
											v-bind:class="'border_'+state+'-3' "
										>
									</div>
								</div>
								<div class="message-holder font_n1">
									<div class="alert padding_2 back_alert-n1 color_white">
										<i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message
									</div>
									<div class="warning padding_2 back_warning-n1 color_white">
										<i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message
									</div>
									<div class="info padding_2 back_info-n1 color_white">
										<i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input
									</div>
								</div>
							</div>
							<div class="question m-b_3 cell small-12" v-bind:class="state">
								<label for="input-x" class="font_bold grid-x font_1">
									<span class="text cell shrink">Synopsis</span>
									<span class="required-holder cell shrink">
										<i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
									</span>
								</label>
								<div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
									<div
										class="alert border_alert-3 back_alert-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_alert padding_2">
											<i class="fas fa-fw fa-exclamation-square"></i>
										</span>
									</div>
									<div
										class="warning border_warning-3 back_warning-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_warning padding_2">
											<i class="fas fa-fw fa-exclamation-triangle"></i>
										</span>
									</div>
									<div class="input-space cell auto">
										<textarea
											id="input-x"
											rows="6"
											type="text"
											class="margin-bottom_0"
											v-bind:class="'border_'+state+'-3' "
										/>
									</div>
								</div>
								<div class="message-holder font_n1">
									<div class="alert padding_2 back_alert-n1 color_white">
										<i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message
									</div>
									<div class="warning padding_2 back_warning-n1 color_white">
										<i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message
									</div>
									<div class="info padding_2 back_info-n1 color_white">
										<i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input
									</div>
								</div>
								<div
									class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0"
								>Use the @ symbol to quickly insert reference links into the content.</div>
							</div>
							<div class="question required cell auto m-b_3" v-bind:class="state">
								<label for="input-x" class="font_bold grid-x font_1">
									<span class="text cell shrink">Published Date</span>
									<span class="required-holder cell shrink">
										<i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
									</span>
								</label>
								<div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
									<div
										class="alert border_alert-3 back_alert-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_alert padding_2">
											<i class="fas fa-fw fa-exclamation-square"></i>
										</span>
									</div>
									<div
										class="warning border_warning-3 back_warning-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_warning padding_2">
											<i class="fas fa-fw fa-exclamation-triangle"></i>
										</span>
									</div>
									<div class="input-space cell auto">
										<input class="m-b_0" type="date" name id>
									</div>
								</div>
								<div class="message-holder font_n1">
									<div class="alert padding_2 back_alert-n1 color_white">
										<i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message
									</div>
									<div class="warning padding_2 back_warning-n1 color_white">
										<i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message
									</div>
									<div class="info padding_2 back_info-n1 color_white">
										<i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input
									</div>
								</div>
								<div
									class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0"
								>This is some hint text</div>
							</div>

							<div class="question required m-b_3 cell auto" v-bind:class="state">
								<label for="input-x" class="font_bold grid-x font_1">
									<span class="text cell shrink">Last Renovation</span>
									<span class="required-holder cell shrink">
										<i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
									</span>
								</label>
								<div class="input-holder grid-x color_{$modifiers}" v-bind:class="'color_'+state">
									<div
										class="alert border_alert-3 back_alert-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_alert padding_2">
											<i class="fas fa-fw fa-exclamation-square"></i>
										</span>
									</div>
									<div
										class="warning border_warning-3 back_warning-4 value-space cell shrink border_solid border-width_1 padding_3 padding-bottom_2 border_secondary-4 texture_light"
									>
										<span class="color_warning padding_2">
											<i class="fas fa-fw fa-exclamation-triangle"></i>
										</span>
									</div>
									<div class="input-space cell auto">
										<input class="m-b_0" type="date" name id>
									</div>
								</div>
								<div class="message-holder font_n1">
									<div class="alert padding_2 back_alert-n1 color_white">
										<i class="fas fa-fw fa-exclamation-square margin-right_3 margin-left_2"></i> Error message
									</div>
									<div class="warning padding_2 back_warning-n1 color_white">
										<i class="fas fa-fw fa-exclamation-triangle margin-right_3 margin-left_2"></i> Warning message
									</div>
									<div class="info padding_2 back_info-n1 color_white">
										<i class="fas fa-fw fa-lightbulb-exclamation margin-right_3 margin-left_2"></i> Informational message about your input
									</div>
								</div>
								<div
									class="hint margin-top_2 font_n1 color_secondary padding_2 padding-top_0"
								>This is some hint text</div>
							</div>
						</div>
					</div>
					<div class="cell small-12 large-3 p_3 texture_light">
						<div class="question">
							<label for="input-x" class="font_bold grid-x font_0">
								<span class="text cell shrink">Tags &amp; Keywords</span>
								<span class="required-holder cell shrink">
									<i class="fas fa-asterisk color_warning font_n3 vertical-align_top"></i>
								</span>
							</label>
							<div class="input-holder input-group color_{$modifiers} m-b_3" v-bind:class="'color_'+state">
								<input
									class="input-group-field border_secondary-4"
									type="text"
									placeholder="tag or keyword"
								>
								
								<a
									href
									class="button input-group-button button bw_1 font_n1 input-group-button line-height_0 line-height_4 p-y_3"
								>
									<i class="fas fa-plus"></i> tag
								</a>
							</div>
							<div class="input-holder">
								<ul class="m_0 border_solid bw-t_1 border_black-7">
									<li
										class="hover:back_primary-3 color_secondary hover:color_black grid-x border_solid bw-b_1 border_black-7"
									>
										<div class="cell shrink p-x_3 p-y_2 align-self-middle">
											<i class="fas fa-fw fa-tag"></i>
										</div>
										<div class="cell auto p_2 p-x_3 border_white-9 bw-r_1 bw-l_1 border_solid">Esophageal</div>
										<div class="cell shrink p-x_2 align-self-middle">
											<i class="fas fa-times m-x_2"></i>
										</div>
									</li>
									<li
										class="hover:back_primary-3 color_secondary hover:color_black grid-x border_solid bw-b_1 border_black-7"
									>
										<div class="cell shrink p-x_3 p-y_2 align-self-middle">
											<i class="fas fa-fw fa-tag"></i>
										</div>
										<div class="cell auto p_2 p-x_3 border_white-9 bw-r_1 bw-l_1 border_solid">Fistula</div>
										<div class="cell shrink p-x_2 align-self-middle">
											<i class="fas fa-times m-x_2"></i>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div class="clearfix border_solid b_primary-4 bw-t_1 p_4 p-b_0">
				<a href class="button success float-right">
					<i class="fas fa-save"></i> Save
				</a>
				<a href class="button hollow secondary float-right m-x_3">Cancel</a>
			</div>
			<div class="clearfix p_4 p-t_5">
				<h5
					class="font_0 font_bold c_secondary-2"
					@click="showHistory = !showHistory"
					v-bind:class="{'is-active':showHistory}"
				>
					<i class="fa icon-toggle_plus-minus"></i> Version History
				</h5>
				<ul class="no-bullet border_solid bw-t_1 border_black-5" v-if="showHistory">
					<li
						class="hover:back_primary-3 c_secondary-3 hover:color_black border_solid bw-b_1 border_black-7 font_n1"
					>
						<div class="grid-x p_2">
							<div class="cell auto p-l_4 font_bold">Name of Editor</div>
							<div class="cell auto font_secondary-2">Date:xx/xx/xxxx</div>
							<div class="cell auto text-right p-r_4">
								<i class="fas fa-clock"></i> Revert
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FormRec",
	data() {
		return {
			state: "secondary",
			showHistory: true
		};
	}
};
</script>

<style scoped>
</style>
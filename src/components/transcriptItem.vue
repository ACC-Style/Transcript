<template>
	<section
		class="h:bg_black-1 bg_white"
		:class="{'is-active':IsActive}"
		@click="function(){ IsActive = !IsActive }"
	>
		<div class="a:bg_primary-5">
			<header class="font_ui p_3 p-x_4 p-b_0 print-p_0 relative">
				<div class="flex_auto font_n2 absolute t_0 r_0 opacity_5 display_none">
					<span class="font_bold">Product ID:</span>
					<span class="font_italic c_primary font_n2">{{ID}}</span>
				</div>
				<section id="label" class="print-flex_row max-w_3">
					<div class="block self_baseline m-b_3" v-if="selectedSort == 'Product' && ProductTitle">
						<span
							class="font_0 font_n1:md font_bold bg_accent-4 c_black-7 p_2 p-x_3 br_radius"
						>{{ProductTitle}}</span>
					</div>
					<div
						class="inline-block c_secondary-3 font_n2:lg font_n1 uppercase font_bold print-display_none"
						:class="{'bg_warning-2 c_black-7 p-l_3 p-y_2 br_radius':External}"
					>
						<span v-if="External">Non ACC &nbsp;</span>
						<span>Activity</span>
						<div
							v-if="External"
							class="font_n2:lg m-l_3 m-r_n1 font_n1 uppercase font_bold c_black inline-block"
						>
							<span
								class="print-display_none p-y_2 p-x_4 br-l_1 br_solid br_black-3 bg_secondary-4 h:bg_secondary-n5 h:c_white"
							>
								<i class="fas fa-edit"></i>
								<span class="display_none inline:md">&nbsp;Edit</span>
							</span>
							<span
								class="print-display_none p-y_2 p-x_4 br-l_1 br_solid br_black-3 bg_secondary-4 h:bg_secondary-n5 h:c_white br-tr_radius br-br_radius"
							>
								<i class="fas fa-trash"></i>
								<span class="display_none inline:md">&nbsp;Delete</span>
							</span>
						</div>
					</div>

					<div class="block c_secondary-n4 m-t_2  font_1:md font_0">
						<span
							v-if="External"
							class="font_n4 print-br_black display_none print-display_inline-block p_1 p-x_2 m-r_3 m-t_n2 vertical-align_middle"
						>External</span>

						<span>
							<span v-if="Course">{{Course}} -</span>
							{{Activity}}
						</span>
					</div>
					<div
						class="font_n2 font_n1:md font_bold c_accent self_baseline m-r_3"
						v-if="selectedSort != 'Product'"
					>
						<span>{{ProductTitle}}</span>
					</div>
				</section>
			</header>
			<div class="br-b_1 br_primary-3 br_dotted font_ui print-p_0 p-y_3 p-x_4 relative flex">
				<div class="flex_auto self_end">
					<div class="font_italic font_n3">
						<div class="m-t_n3 m-b_2 print-m_0">
							<span>Date Claimed:</span>&nbsp;
							<span>{{DateClaimed}}</span>
						</div>
					</div>
					<div class="download font_n2 c_primary undecorated h:underline print-display_none sm_button">
						<i class="fas fa-badge-check m-r_2"></i> Download Certificate
					</div>
				</div>
				<div class="flex_shrink w-grid_4 w-grid_3:md self_end">
					<ul class="ul_none flex flex_wrap flex_row-reverse:md flex_column font_n1 font_0:md self_end">
						<li
							v-for="(credit, credit_index) in Credits"
							v-bind:key="credit_index"
							:class="creditDecoration(credit.Type)"
							class="br_radius p-y_1 p-x_2 p-y_2:md p-x_3:md block inline-block:md m-x_2 flex_shrink text_center m-t_2 transition_2"
						>
							<span>{{credit.Type}}</span>
							<span class="font_bold m-l_3 p-l_3 br-l_1 br_solid br_white">{{credit.Amount}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		ID: { type: Number, default: -1 },
		External: { type: Boolean, default: false },
		ProductTitle: { type: String, default: undefined },
		Course: { type: String, default: undefined },
		Activity: { type: String, default: "activity" },
		DateCompleted: { type: String, default: "0/0/00" },
		DateClaimed: { type: String, default: "1/1/00" },
		Credits: { type: Array },
		selectedCreditFilter: { type: Array },
		selectedSort: { type: String, default: "Date" }
	},
	data: function() {
		return {
			IsActive: false
		};
	},
	methods: {
		creditDecoration: function(type) {
			var decorationClasses =
				this.selectedCreditFilter.indexOf(type) != -1 ||
				this.selectedCreditFilter.length == 1 ? "order_0 c_white bg_" + type + " br_solid br_1 print-display_block br_" + type : "order_last br_secondary-4 bg_secondary-5  c_secondary-3 br_1 br_dashed print-display_none";
			return decorationClasses;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
<template>
	<div id="CreditType" class="text_right:md flex_end flex_auto p-l_4:md p-l_0 p-t_3 p-t_0:md">
		<span
			class="uppercase c_secondary font_bold font_n2 m-x_2"
			@click="$emit('showModal_LegendEvent')"
		>
			Filter Credit Types
			<i class="fas fa-question-circle"></i>
		</span>
		<ul
			class="flex flex_row flex_wrap flex_nowrap:md flex_row-reverse:md text_left font_bold font_n2 font_ui ul_none"
		>
			<li
				class="flex_shrink:md flex_auto flex_shrink w_100 w_auto:md"
				:class="{'is-active': selectedFilter.length == 1}"
			>
				<div
					@click="filterReset()"
					class="button br_1 bg_primary-4 p-x_3 p-x_4:lg p-y_3 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_primary-n2 block a:bg_primary a:c_white br_solid"
				>All</div>
			</li>
			<li
				class="flex_shrink w_50 w_auto:md br_1 br_solid br_white-7"
				v-for="(credit, index) in creditUsed"
				v-bind:key="index+'creditFilter'"
			>
				<div
					@click="filterClick(credit.styleCode)"
					class="button br_1 br-t_0 br-b_0 bg_secondary-3 p-x_3 p-x_4:lg p-y_3 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 block a:bg_primary a:c_white"
					:class="{['c_white bg_'+credit.styleCode]: selectedFilter.indexOf(credit.styleCode) != -1}"
				>
					<span class="lh_0" v-html="credit.shortName"></span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		creditTypes: { type: Array, default: () => [] },
		creditsInList: { type: Array, default: () => [] }
	},
	data: function() {
		return {
			selectedFilter: ["All"]
		};
	},
	methods: {
		filterClick: function(type) {
			if (this.selectedFilter.indexOf(type) == -1) {
				this.selectedFilter.push(type);
			} else {
				this.selectedFilter.splice(this.selectedFilter.indexOf(type), 1);
			}
			this.emitFilter();
		},
		filterReset: function() {
			this.selectedFilter = ["All"];
			this.emitFilter();
		},
		emitFilter: function() {
			this.$emit("updatefitler", this.selectedFilter);
		}
	},
	computed: {
		creditUsed: function() {
			var arr = [];
			for (const credit in this.creditTypes) {
				if (this.creditTypes.hasOwnProperty(credit)) {
					const creditObject = this.creditTypes[credit];
					if (this.creditsInList.indexOf(creditObject.styleCode) != -1) {
						arr.push(creditObject);
					}
				}
			}
			return arr;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
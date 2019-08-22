<template>
	<div id="app" class="viewport z_0 bg_acc texture_light">
		<div class="max-w_4 m_auto shadow_3 p_4 bg_white">
			<header id="transcript_header" class="relative">
				<h1 class="font_display lh_0 m_0 relative p-t_4 p-b_2 text_center text_left:md">
					My Transcript
					<span
						class="print-display_none c_secondary-2 font_n1 inline-block m-b_2 vertical-align_middle w_100"
					>
						Total Credits in Transcript:
						<span>{{fullCreditCount}}</span>
					</span>
				</h1>
				<div class="absolute:md t_0 r_0 b_0 text_center text_right:md font_ui print-display_none">
					<div id="dateRange" class="font_0:md font_n1 m-y_2 c_secondary m-b_3:md">
						<span class="block inline:md m-b_2 m-b_0:md m-r_3">Date Claimed:</span>
						<input
							type="date"
							class="lh_0 p_2 font_0 text_center br_solid br_secondary-3 br_1"
							name
							id
							v-model="filterStartDate"
						/> -
						<input
							type="date"
							class="lh_0 p_2 font_0 text_center br_solid br_secondary-3 br_1"
							name
							id
							v-model="filterEndDate"
						/>
						<i
							class="bg_secondary-3 br-b_1 br_secondary-3 br_solid fa-calendar fas font_n1 p-l_3 p-r_3 p-t_3 p_3 vertical-align_bottom"
						></i>
					</div>
					<div
						class="button bg_primary text_center font_n1:md br_radius p-y_3 m-b_3 p-x_4 block inline-block:md m-t_3 m-t_0:md c_white undecorated h:bg_secondary h:c_white"
						@click="showModal_TranscriptDataInput = true"
					>
						<i class="fas fa-plus m-r_3"></i> Add Non ACC Activity
					</div>
				</div>
			</header>

			<div
				id="fiterAndSortContainer"
				class="z_5 b_0 br-t_1 br_primary br_solid bg_black-6 fixed font_ui l_0 t_0 p-x_0:md p_4 p_0:md print-display_none r_0 relative:md block:md"
				:class="{'display_none': !sortFilterBarShowSmall}"
			>
				<div class="bg_white p-y_4:md p-x_0:md p_4 flex flex_column flex_row:md">
					<sortBar
						:sortTypes="sortTypes"
						:selectedSort="selectedSort"
						v-on:updateselectedsort="selectedSort = $event"
					></sortBar>
					<filterCreditTypeBar
						:creditTypes="creditTypes"
						:creditsInList="creditsInList"
						v-on:updatefitler="selectedCreditFilter = $event"
						v-on:showModal_LegendEvent="showModal_Legend=true"
					></filterCreditTypeBar>
					<div
						class="flex_grow w_100 text_center block w_100 display_none:md m-t_3"
						v-if="sortFilterBarShowSmall"
					>
						<div
							class="button bg_secondary text_center inline-block font_n2 br_solid br_2 br_black-3 shadow_1 font_bold font_ui m_auto br_radius p-y_2 p-x_5 c_white-7 undecorated h:bg_secondary h:c_white"
							v-on:click="sortFilterBarShowSmallToggle()"
						>
							<i class="fas fa-filter m-r_3"></i>Close Filter/Sort
						</div>
					</div>
				</div>
			</div>
			<div id="summaryView" class="z_0 bg_secondary-5 m-b_4 font_ui m-x_n4 m-x_3:md m-x_0:lg">
				<div
					class="flex bg_secondary-2 font_n2 font_n1:md c_white p_2 p-x_4 font_bold print-display_none"
				>
					<div class="flex_auto uppercase">
						list summary:
						<span
							class="c_secondary-n3 m-l_3 font_bold font_italic"
							v-if="filterStartDate == '1949-01-01' && filterEndDate==''"
						>None</span>
						<span v-else class="c_white font_bold m-l_3">
							{{filterStartDate}} to
							<span v-if="filterEndDate == ''">Today</span>
							<span v-if="filterEndDate !== ''">{{filterEndDate}}</span>
						</span>
					</div>
					<div class="flex_shrink p-l_4 uppercase">
						<span class="c_secondary-n3 m-l_3">
							<span class="p-r_3">Filtered:</span>

							<span class="c_secondary-n3" v-if="filterStartDate != '1949-01-01' || filterEndDate==''">Date</span>
							<span
								class="m-x_3"
								v-if="(selectedCreditFilter.length > 1 && selectedCreditFilter[1] != 'All' ) && (filterStartDate != '1949-01-01' || filterEndDate=='')"
							>&amp;</span>
							<span v-if="(selectedCreditFilter.length > 1 && selectedCreditFilter[1] != 'All' )">Credit</span>
						</span>
					</div>
				</div>
				<div class="flex print-br_black">
					<div class="flex_auto w_70:md w_60:md flex_column flex">
						<transition-group
							v-if="selectedCreditFilter.length != 1"
							name="crossfade"
							tag="ul"
							class="ul_none flex bg_secondary-n1 flex_auto"
							:class="{'flex_row flex_wrap':creditsFilteredList.length>4,'flex_column ':creditsFilteredList.length<=4}"
						>
							<li
								class="p-x_4 p-y_3 flex lh_0 font_bold print-br_black"
								v-for="(credit, index) in creditsFilteredList"
								v-bind:key="index+'_credit'"
								:class="creditCounterDecorator(credit,creditsFilteredList.length)"
							>
								<span class="flex_auto p-r_4">{{credit}}</span>
								<span
									class="flex_shrink print-c_black"
									v-if="filteredCreditCount[credit]"
								>{{filteredCreditCount[credit]}}</span>
								<span class="flex_shrink print-c_black" v-if="!filteredCreditCount[credit]">~</span>
							</li>
						</transition-group>
					</div>
					<div
						class="flex_shrink:md w_30:lg w_40:lg print-br_black flex_column flex br-l_2 br_solid br_white-3"
					>
						<div class="p-x_4 p-y_3 bg_primary c_white text_center lh_0 flex_auto flex_strech">
							<span
								v-if="selectedCreditFilter.length == 1"
								class="block font_4"
							>{{filteredCreditCount['All']}}</span>
							<span
								v-if="selectedCreditFilter.length != 1"
								class="block font_4"
							>{{selectedFilteredCreditTotal}}</span>

							<span class="block font_n2 font_bold c_primary-4 uppercase">Credits</span>
						</div>

						<div
							class="text_center bg_secondary-1 c_white uppercase h:bg_secondary-n1 p-y_2 font_ui font_n2 flex_auto"
							v-on:click="showModal_Legend = true"
						>
							<span>
								<i class="fas fa-list-alt"></i>&nbsp;Credit Legend
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="z_0 m-x_n4 m-x_n2:md m-x_0">
				<transition-group tag="div" name="crossFade">
					<transcriptItem
						v-for="(activity) in transcriptFiltered"
						v-bind:key="activity.ID+'_activity'"
						v-bind="activity"
						:selectedSort="selectedSort"
						:selectedCreditFilter="selectedCreditFilter"
					/>
				</transition-group>
			</div>
			<div
				id="loadMore "
				class="c_white-8 text_center p-y_3 font_slab br-t_2 br_solid br_primary-1 bg_primary-1 m-x_n4 print-display_none"
			>
				Showing First 20 Results
				<a
					href
					class="transition_1 button br_radius font_bold inline-block br_solid br_2 br_white-8 c_white-8 undecorated p-x_4 p-y_3 h:bg_white-8 h:c_primary h:br_white m-x_3"
				>Load All Activities</a>
			</div>
			<div
				class="z_5 b_3 l_0 r_0 text_center fixed block w_100 display_none:md"
				v-if="!sortFilterBarShowSmall"
			>
				<div
					class="button bg_primary text_center inline-block font_n1 br_solid br_2 br_black-3 shadow_4 font_bold font_display m_auto br_round p-y_2 p-x_5 c_white-9 undecorated h:bg_secondary h:c_white"
					v-on:click="sortFilterBarShowSmallToggle()"
				>
					<i class="fas fa-filter m-r_3"></i> Filter/Sort
				</div>
			</div>
			<div id="foooter" class="bg_secondary-4 p_5 m-x_n4 m-b_n4">
				<ol class="font_n2 c_secondary lh_2">
					<li>The American College of Cardiology Foundation (ACCF) is accredited by the Accreditation Council for Continuing Medical Education to provide continuing medical education for physicians.</li>
					<li>The American College of Cardiology Foundation (ACCF) is accredited as a provider of continuing education by the American Nurses Credentialing Center's Commission on Accreditation.</li>
				</ol>
			</div>

			<modal id="Legend" v-if="showModal_Legend" @close="showModal_Legend = false">
				<h3 slot="header" class>Credit Type Legend</h3>
				<div slot="body">
					<ul class="ul_none m-b_4 lh_4">
						<li
							class="flex flex_row flex_nowrap"
							v-for="(credit, index) in creditTypes"
							v-bind:key="'legendkey_'+index"
						>
							<div
								class="br_1 br_white-3 br_solid w_30 c_white p-x_3 p-y_2 text_center font_bold"
								:class="['bg_'+credit.styleCode]"
								v-html="credit.shortName"
							></div>
							<div class="w_70 p-x_3 p-y_2 br-t_1 br-r_1 br-b_1 br_solid br_black-2">
								<p
									class="font_0 c_secondary-n4 lh_1 font_copy vertical-align_middle inline-block"
									v-html="credit.fullName"
								></p>
							</div>
						</li>
					</ul>
				</div>
				<div
					slot="footer"
					class="text_right br-t_1 br_primary br_solid p_3 p-x_4 bg_secondary-5 shadow_n2 texture_light"
				>
					<button
						class="font_ui bg_secondary h:bg_secondary-n2 c_white br_none br_radius p-x_4 p-y_2 text_center inline-block font_0"
						@click="showModal_Legend = false"
					>Close Legend</button>
				</div>
			</modal>
			<modal
				id="ExternalEdit_TranscriptDataInput"
				v-if="showModal_TranscriptDataInput"
				@close="showModal_TranscriptDataInput = false"
			>
				<h3 slot="header" class>Add External Activity</h3>
				<div slot="body">
					<ul class="ul_none m-b_4 lh_4">
						<li
							class="flex flex_row flex_nowrap"
							v-for="(question, index) in TranscriptDataInput"
							v-bind:key="'input_'+index"
						>
							<div class="flex flex_column font_ui w_100 max-w_2 m_auto">
								<div class="flex_auto font_0 font_bold c_acc m-b_2 m-t_4">
									<label class="block" :for="'input_'+index">
										{{question.label}}
										<i
											class="c_warning m-t_2 vertical-align_top fas fa-asterisk font_n3"
											v-if="question.required"
										></i>
									</label>
								</div>
								<div class="flex_auto relative flex_row flex_nowrap br_secondary-4 br_solid br_1">
									<input
										class="box_border-box inline-block flex_auto font_1 br_none lh_2 p_2 p-x_3"
										:class="{'w-grid_10':!question.required,'w-grid_12 ':question.required}"
										:name="'input_'+index"
										:type="question.type"
										:placeholder="question.placeholder"
									/>
									<div
										class="box_border-box inline-block w-grid_2 flex_shrink c_primary-1 font_italic font_n1 br_secondary-4 br_none lh_2 p_2 p-x_3 m-l_n1 text_right"
										v-if="!question.required"
									>(optional)</div>
								</div>
							</div>
						</li>
						<li class="flex flex_row flex_nowrap">
							<div class="flex flex_column font_ui w_100 max-w_2 m_auto">
								<div class="flex_auto font_0 font_bold c_acc m-b_2 m-t_4">
									<label class="block" for="creditAmount">
										Credit
										<i class="c_warning m-t_2 vertical-align_top fas fa-asterisk font_n3"></i>
									</label>
								</div>
								<div
									class="flex_auto relative flex flex_row p_2 flex_nowrap"
									:class="{'bg_acc-5':!isOdd(n)}"
									v-for="n in creditAmountRepeats"
									:key="n+'creditloops'"
								>
									<select
										class="box_border-box inline-block flex_auto font_1 br_none lh_2 m-b_1 p_2 p-x_3 br_secondary-4 br_solid br_1"
										v-bind:name="creditAmount+'n'"
									>
										<option disabled value>Please select one</option>
										<option
											value="credit.styleCode"
											v-for="(credit, index) in creditTypes"
											v-bind:key="'creditoption_'+index"
										>{{credit.fullName}}</option>
									</select>
									<input
										class="box_border-box inline-block flex_auto font_1 br_none lh_2 p_2 p-x_3 br_secondary-4 br_solid br_1 m-l_3"
										type="number"
										name
										placeholder="Amount"
										id
									/>
									<button
										class="br_radius bg_primary-2 br_primary box_border-box inline-block flex_auto br_none lh_1 p_4 p-y_2 font_0 br_solid br_1 m-l_3 c_white-6 h:c_white h:bg_primary text_center"
										v-on:click="++creditAmountRepeats"
									>
										<i class="fas fa-plus"></i>
									</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div
					slot="footer"
					class="text_right br-t_1 br_primary br_solid p_3 p-x_4 bg_secondary-5 shadow_n2 texture_light"
				>
					<button
						class="font_ui font_1 bg_secondary-3 h:bg_secondary-n2 shadow_1 br_black-2 br_1 br_solid h:bg_white c_secondary-n3 br_none br_radius p-x_4 p-y_2 text_center inline-block font_0 m-r_2"
						@click="showModal_TranscriptDataInput = false"
					>Cancel</button>
					<button
						class="font_ui font_1 bg_success h:bg_success-n2 shadow_1 br_black-2 br_1 br_solid c_white br_none br_radius p-x_4 p-y_2 text_center inline-block font_0 m-r_2"
						@click="showModal_TranscriptDataInput = false"
					>Save</button>
				</div>
			</modal>
		</div>
	</div>
</template>

<script>
import transcriptItem from "./components/transcriptItem.vue";
import filterCreditTypeBar from "./components/filterCreditTypeBar.vue";
import sortBar from "./components/sortBar.vue";
import modal from "./components/modal.vue";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
	name: "app",
	data: function() {
		return {
			filterStartDate: "2019-01-01",
			filterEndDate: "",
			selectedCreditFilter: ["All"],
			sortTypes: ["Date", "Activity", "Product", "Amount"],
			selectedSort: "Date",
			sortFilterBarShowSmall: false,
			showModal_Legend: false,
			showModal_TranscriptDataInput: false,
			inputSelectCredit: "",
			creditAmountRepeats: 1
		};
	},
	props: {},
	components: {
		transcriptItem,
		filterCreditTypeBar,
		sortBar,
		modal
	},
	computed: {
		...mapState(["transcript", "creditTypes", "TranscriptDataInput"]),
		fullCreditCount: function() {
			var creditCount = 0;
			this.transcript.forEach(activity => {
				activity.Credits.forEach(credit => {
					creditCount += Number.parseFloat(credit.Amount);
				});
			});
			return creditCount.toFixed(1);
		},
		selectedFilteredCreditTotal: function() {
			var counter = 0;
			for (const key in this.creditsFilteredList) {
				if (this.creditsFilteredList.hasOwnProperty(key)) {
					const element = this.filteredCreditCount[
						this.creditsFilteredList[key]
					];
					counter += element == undefined ? 0 : element * 10;
				}
			}
			return counter / 10;
		},
		filteredCreditCount: function() {
			var creditCount = {};
			creditCount["All"] = 0;
			this.transcriptFiltered.forEach(activity => {
				activity.Credits.forEach(credit => {
					creditCount["All"] += credit.Amount * 10;
					if (!creditCount.hasOwnProperty(credit.Type)) {
						creditCount[credit.Type] = 0;
					}
					creditCount[credit.Type] += credit.Amount * 10;
				});
			});
			for (const key in creditCount) {
				if (creditCount.hasOwnProperty(key)) {
					var newVal = creditCount[key] / 10;
					creditCount[key] = newVal;
				}
			}

			return creditCount;
		},
		creditsInList: function() {
			const creditIN = this.transcript
				.flatMap(activity => {
					let Credit = activity.Credits;
					return Credit.flatMap(credit => {
						return credit.Type;
					});
				})
				.filter((value, index, self) => self.indexOf(value) === index);
			return creditIN;
		},
		// creditsFilteredList: (credit)=>(this.selectedCreditFilter.indexOf(element) != -1 || this.selectedCreditFilter.length == 1),
		creditsFilteredList: function() {
			var newArr = this.creditsInList.filter(
				credit =>
					this.selectedCreditFilter.indexOf(credit) != -1 ||
					this.selectedCreditFilter.length == 1
			);
			return newArr;
		},
		transcriptFiltered: function() {
			var arr = this.transcript.filter(
				activity =>
					this.isDateInFilter(activity.DateClaimed) &&
					activity.Credits.some(credit =>
						this.isCreditTypeInFilter(credit.Type)
					)
			);

			return arr.sort(this.compare);
		}
	},
	methods: {
		...mapMutations([]),
		...mapActions([]),
		isOdd: function(num) {
			return Math.abs(num) % 2 === 1;
		},
		sortFilterBarShowSmallToggle: function() {
			this.sortFilterBarShowSmall = !this.sortFilterBarShowSmall;
		},
		compare: function(a, b) {
			let comparison = 0;
			switch (this.selectedSort) {
				case "Date":
					comparison =
						new Date(a.DateClaimed) >= new Date(b.DateClaimed) ? -1 : 1;
					break;
				case "Activity":
					comparison = a.Activity <= b.Activity ? -1 : 1;
					break;
				case "Product":
					comparison = a.ProductTitle <= b.ProductTitle ? -1 : 1;
					break;
				default:
					break;
			}

			return comparison;
		},
		creditCounterDecorator: function(credit, count) {
			var classCode = "bg_" + credit + " c_white";
			if (count == 1) classCode = classCode + " p-y_4";
			if (count < 3) classCode = classCode + " font_2";
			if (count == 3) classCode = classCode + " font_1";
			if (count == 4) classCode = classCode + " font_0";
			if (count > 4)
				classCode = classCode + " w_50 br_solid br_white-5 br_1 font_n1";
			return classCode;
		},
		creditBoolean: function(credit) {
			var bool =
				this.selectedCreditFilter.indexOf(credit) != -1 ||
				this.selectedCreditFilter.length() == 1;
			return bool;
		},
		creditTemp: () => {},
		isCreditTypeInFilter: function(type) {
			return this.creditsFilteredList.indexOf(type) !== -1 ? true : false;
		},
		isDateInFilter: function(date) {
			var start, end, activityDate;
			activityDate = new Date(date);
			start =
				new Date(this.filterStartDate) == "invalid date"
					? new Date("1970-01-01")
					: new Date(this.filterStartDate);
			end =
				this.filterEndDate == "" ? new Date() : new Date(this.filterEndDate);

			return start <= activityDate && activityDate <= end ? true : false;
		}
	}
};
</script>

<style>
.viewport {
	min-height: 100vh;
	overflow-x: hidden;
}
.crossFade-enter-active,
.crossFade-leave-active {
	transition: opacity 0.25s ease 0.25s;
}

.crossFade-leave-to,
.crossFade-enter {
	opacity: 0;
}
.crossFade-enter-to {
	opacity: 1;
}
.crossFade-move {
	transition: 0.5s ease;
}
.z_0 {
	z-index: -1;
}
.z_1 {
	z-index: 1;
}
.z_5 {
	z-index: 10000;
}
.box_border-box {
	box-sizing: border-box;
}
@media only screen and (max-width: 1024px) {
	.sm_button {
		padding: 0.35rem 1rem;
		border-radius: 0.3333333333rem;
		background-color: #dedee0 !important;
		color: black !important;
		display: inline-block;
	}
}
@media print {
	.print-display_none {
		display: none !important;
	}
	.print-display_block {
		display: block !important;
	}
	.print-display_inline-block {
		display: inline-block !important;
	}
	.print-p_0 {
		padding: 0 !important;
	}
	.print-m_0 {
		margin: 0 !important;
	}
	.print-flex_row {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.print-flex_row > * {
		flex: 1 0 auto !important;
		display: inline-block;
		padding-right: 0.5rem;
		padding-left: 0rem;
	}
	.print-br_black {
		border: rgb(73, 73, 73) 1px solid !important;
	}
	.print-c_black {
		color: black !important;
	}
	.print-font_0 {
		font-size: 1rem !important;
	}
}
</style>

function newFunction(element) {
	console.log(element);
}

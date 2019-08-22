import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		TranscriptDataInput: [{
				label: "Activity",
				type: "text",
				required: true,
				placeholder: "name of the activity"
			}, {
				label: "Product",
				type: "text",
				required: false,
				placeholder: "group your activities by adding a parent product name"
			},
			{
				label: "Date Claimed",
				type: "date",
				required: false,
				placeholder: ""
			}, {
				label: "Upload Certificate",
				type: "file",
				required: true,
				placeholder: ""
			}
		],
		creditTypes: [{
				shortName: "COP",
				fullName: "Certificate of Participation",
				styleCode: "COP"
			},
			{
				shortName: "ABP",
				fullName: "American Board of Pediatrics",
				styleCode: "ABP"
			},
			{
				shortName: "CE",
				fullName: "Continuing Education",
				styleCode: "CE"
			},
			{
				shortName: "MOC&nbsp;II",
				fullName: "ABIM MOC Part II",
				styleCode: "MOCII"
			},
			{
				shortName: "MOC&nbsp;IV",
				fullName: "ABIM MOC Part IV",
				styleCode: "MOCIV"
			},
			{
				shortName: "CNE",
				fullName: "Continuing Nursing Education",
				styleCode: "CNE"
			},
			{
				shortName: "CNE<sup>rx</sup>",
				fullName: "Continuing Nursing Education Pharmaceutical",
				styleCode: "CNErx"
			},
			{
				shortName: "ECME",
				fullName: "External Continuing Medical Education",
				styleCode: "ECME"
			},
			{
				shortName: "CPE",
				fullName: "Continuing Pharamacy Education",
				styleCode: "CPE"
			},
			{
				shortName: "CME",
				fullName: "Continuing Medical Education",
				styleCode: "CME"
			}
		],
		transcript: [{
			"ID": 1,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "The Society of Cardiovascular Patient Care (SCPC) is now called ACC Accreditation ServiCPEs",
			"DateCompleted": "4/4/2018",
			"DateClaimed": "11/25/2018",
			"Credits": [{
				"Type": "CPE",
				"Amount": 19.2
			}],
			"External": false
		}, {
			"ID": 2,
			"ProductTitle": "CathSAP",
			"Course": "Span",
			"Activity": "Adult Congenital SAQs and Board Prep",
			"DateCompleted": "7/23/2016",
			"DateClaimed": "9/20/2018",
			"Credits": [{
				"Type": "CE",
				"Amount": 15.4
			}],
			"External": true
		}, {
			"ID": 3,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Andalax",
			"DateCompleted": "1/10/2017",
			"DateClaimed": "9/25/2017",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 6.1
			}],
			"External": false
		}, {
			"ID": 4,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Alpha",
			"DateCompleted": "2/2/2016",
			"DateClaimed": "7/5/2019",
			"Credits": [{
				"Type": "CNE",
				"Amount": 17.3
			}],
			"External": false
		}, {
			"ID": 5,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Adult Congenital SAQs and Board Prep",
			"DateCompleted": "10/18/2018",
			"DateClaimed": "11/24/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 20.1
				},
				{
					"Type": "CPE",
					"Amount": 12.4
				}
			],
			"External": true
		}, {
			"ID": 6,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Bigtax",
			"DateCompleted": "2/3/2016",
			"DateClaimed": "8/15/2016",
			"Credits": [{
					"Type": "ECME",
					"Amount": 12.3
				},
				{
					"Type": "CME",
					"Amount": 21.7
				}
			],
			"External": true
		}, {
			"ID": 7,
			"ProductTitle": "Heart Songs",
			"Course": "Temp",
			"Activity": "Adult Congenital SAQs and Board Prep",
			"DateCompleted": "9/26/2018",
			"DateClaimed": "8/16/2015",
			"Credits": [{
				"Type": "CME",
				"Amount": 21.3
			}],
			"External": false
		}, {
			"ID": 8,
			"ProductTitle": "Heart Songs",
			"Course": "Home Ing",
			"Activity": "Rank",
			"DateCompleted": "8/3/2017",
			"DateClaimed": "3/2/2017",
			"Credits": [{
					"Type": "CNE",
					"Amount": 6.8
				},
				{
					"Type": "CPE",
					"Amount": 7.9
				}
			],
			"External": true
		}, {
			"ID": 9,
			"ProductTitle": "ACCSAP",
			"Course": "Solarbreeze",
			"Activity": "Namfix",
			"DateCompleted": "1/6/2019",
			"DateClaimed": "5/1/2016",
			"Credits": [{
					"Type": "CNErx",
					"Amount": 7.0
				},
				{
					"Type": "CPE",
					"Amount": 5.8
				}
			],
			"External": false
		}, {
			"ID": 10,
			"ProductTitle": null,
			"Course": "Recurrent Pericarditis: When It Won't Go Away",
			"Activity": "Bigtax",
			"DateCompleted": "10/14/2015",
			"DateClaimed": "2/23/2016",
			"Credits": [{
				"Type": "ECME",
				"Amount": 11.5
			}],
			"External": false
		}, {
			"ID": 11,
			"ProductTitle": "ACCSAP",
			"Course": "Bamity",
			"Activity": "Recent Advances in Nuclear Cardiology / CCT",
			"DateCompleted": "9/12/2017",
			"DateClaimed": "9/24/2015",
			"Credits": [{
					"Type": "CNErx",
					"Amount": 8.3
				},
				{
					"Type": "COP",
					"Amount": 19.7
				}
			],
			"External": false
		}, {
			"ID": 12,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Adult Congenital SAQs and Board Prep",
			"DateCompleted": "3/17/2019",
			"DateClaimed": "6/19/2018",
			"Credits": [{
					"Type": "CME",
					"Amount": 17.0
				},
				{
					"Type": "CNErx",
					"Amount": 11.1
				}
			],
			"External": false
		}, {
			"ID": 13,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Toughjoyfax",
			"DateCompleted": "9/19/2018",
			"DateClaimed": "4/12/2019",
			"Credits": [{
				"Type": "CPE",
				"Amount": 1.7
			}],
			"External": false
		}, {
			"ID": 14,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Aerified",
			"DateCompleted": "8/16/2015",
			"DateClaimed": "8/8/2016",
			"Credits": [{
					"Type": "ECME",
					"Amount": 4.6
				},
				{
					"Type": "CNErx",
					"Amount": 20.0
				}
			],
			"External": true
		}, {
			"ID": 15,
			"ProductTitle": "Cardiosourse Plus",
			"Course": "Domainer",
			"Activity": "Tres-Zap",
			"DateCompleted": "3/18/2019",
			"DateClaimed": "4/15/2018",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 22.2
			}],
			"External": false
		}, {
			"ID": 16,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Tempsoft",
			"DateCompleted": "2/22/2016",
			"DateClaimed": "3/8/2018",
			"Credits": [{
					"Type": "COP",
					"Amount": 14.7
				},
				{
					"Type": "CNE",
					"Amount": 18.6
				}
			],
			"External": false
		}, {
			"ID": 17,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Regrant",
			"DateCompleted": "7/27/2019",
			"DateClaimed": "2/6/2017",
			"Credits": [{
					"Type": "CNErx",
					"Amount": 10.0
				},
				{
					"Type": "CME",
					"Amount": 22.4
				}
			],
			"External": false
		}, {
			"ID": 18,
			"ProductTitle": "Cardiosourse Plus",
			"Course": "Opela",
			"Activity": "It",
			"DateCompleted": "5/30/2018",
			"DateClaimed": "4/25/2019",
			"Credits": [{
					"Type": "CPE",
					"Amount": 6.5
				},
				{
					"Type": "MOCII",
					"Amount": 13.1
				}
			],
			"External": false
		}, {
			"ID": 19,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Hatity",
			"DateCompleted": "2/26/2017",
			"DateClaimed": "3/26/2016",
			"Credits": [{
				"Type": "ECME",
				"Amount": 7.5
			}],
			"External": true
		}, {
			"ID": 20,
			"ProductTitle": "Cardiosourse Plus",
			"Course": "Otcom",
			"Activity": "Recent Advances in Nuclear Cardiology / CCT",
			"DateCompleted": "12/24/2017",
			"DateClaimed": "2/6/2016",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 23.6
			}],
			"External": true
		}, {
			"ID": 21,
			"ProductTitle": "Heart Songs",
			"Course": "Vagram",
			"Activity": "Heart Failure SAQs and Board Prep",
			"DateCompleted": "11/11/2018",
			"DateClaimed": "3/27/2019",
			"Credits": [{
				"Type": "CPE",
				"Amount": 10.8
			}],
			"External": true
		}, {
			"ID": 22,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Flexidy",
			"DateCompleted": "1/12/2018",
			"DateClaimed": "6/28/2018",
			"Credits": [{
					"Type": "MOCIV",
					"Amount": 17.2
				},
				{
					"Type": "CPE",
					"Amount": 10.6
				}
			],
			"External": true
		}, {
			"ID": 23,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Asoka",
			"DateCompleted": "1/12/2018",
			"DateClaimed": "4/23/2018",
			"Credits": [{
					"Type": "CNErx",
					"Amount": 18.5
				},
				{
					"Type": "CPE",
					"Amount": 6.2
				}
			],
			"External": true
		}, {
			"ID": 24,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Heart Failure SAQs and Board Prep",
			"DateCompleted": "5/11/2019",
			"DateClaimed": "7/12/2018",
			"Credits": [{
				"Type": "CME",
				"Amount": 12.4
			}],
			"External": false
		}, {
			"ID": 25,
			"ProductTitle": "Heart Songs",
			"Course": "Veribet",
			"Activity": "Tresom",
			"DateCompleted": "4/23/2019",
			"DateClaimed": "2/7/2019",
			"Credits": [{
				"Type": "CPE",
				"Amount": 1.6
			}],
			"External": false
		}, {
			"ID": 26,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Prodder",
			"DateCompleted": "11/8/2015",
			"DateClaimed": "9/30/2017",
			"Credits": [{
					"Type": "MOCII",
					"Amount": 20.6
				},
				{
					"Type": "ECME",
					"Amount": 22.5
				}
			],
			"External": true
		}, {
			"ID": 27,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Heart Failure SAQs and Board Prep",
			"DateCompleted": "11/9/2016",
			"DateClaimed": "1/20/2017",
			"Credits": [{
					"Type": "COP",
					"Amount": 24.4
				},
				{
					"Type": "CNErx",
					"Amount": 18.7
				}
			],
			"External": false
		}, {
			"ID": 28,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Zontrax",
			"DateCompleted": "10/22/2016",
			"DateClaimed": "2/22/2016",
			"Credits": [{
				"Type": "ECME",
				"Amount": 18.4
			}],
			"External": false
		}, {
			"ID": 29,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Fintone",
			"DateCompleted": "5/3/2018",
			"DateClaimed": "7/6/2016",
			"Credits": [{
				"Type": "ECME",
				"Amount": 10.4
			}],
			"External": true
		}, {
			"ID": 30,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Atrial Tachycardia With Atrial Activation Duration Exceeding the Tachycardia Cycle Length: Mechanisms and Prevalence (JACC: Clinical Electrophysiology August 2019)",
			"DateCompleted": "9/22/2017",
			"DateClaimed": "1/4/2017",
			"Credits": [{
				"Type": "CNE",
				"Amount": 2.5
			}],
			"External": false
		}, {
			"ID": 31,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Prevention, Diagnosis, and Management of Radiation Associated Cardiac Disease: JACC Scientific Expert Panel (JACC August 2019-2)",
			"DateCompleted": "1/25/2016",
			"DateClaimed": "3/16/2016",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 20.3
			}],
			"External": false
		}, {
			"ID": 32,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Persistent Volume Overload: Constriction or Tricuspid Regurgitation?",
			"DateCompleted": "3/20/2016",
			"DateClaimed": "1/27/2019",
			"Credits": [{
				"Type": "CNErx",
				"Amount": 16.0
			}],
			"External": true
		}, {
			"ID": 33,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "CV Fellowship Directors Training",
			"DateCompleted": "5/2/2017",
			"DateClaimed": "3/4/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 18.4
				},
				{
					"Type": "ECME",
					"Amount": 11.0
				}
			],
			"External": false
		}, {
			"ID": 34,
			"ProductTitle": "Heart Songs",
			"Course": "Stim",
			"Activity": "Prevention, Diagnosis, and Management of Radiation Associated Cardiac Disease: JACC Scientific Expert Panel (JACC August 2019-2)",
			"DateCompleted": "7/26/2017",
			"DateClaimed": "2/20/2018",
			"Credits": [{
				"Type": "CPE",
				"Amount": 23.3
			}],
			"External": true
		}, {
			"ID": 35,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "ECG of the Month: Chest Pain and Syncope",
			"DateCompleted": "2/20/2017",
			"DateClaimed": "5/29/2019",
			"Credits": [{
					"Type": "MOCIV",
					"Amount": 4.6
				},
				{
					"Type": "COP",
					"Amount": 19.3
				}
			],
			"External": false
		}, {
			"ID": 36,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Multimodality Imaging Markers of Adverse Myocardial Remodeling in Aortic Stenosis - JIMG Aug 2019",
			"DateCompleted": "10/3/2015",
			"DateClaimed": "3/2/2019",
			"Credits": [{
					"Type": "COP",
					"Amount": 3.8
				},
				{
					"Type": "CNE",
					"Amount": 16.1
				}
			],
			"External": false
		}, {
			"ID": 37,
			"ProductTitle": "Cardiosourse Plus",
			"Course": "Transcof",
			"Activity": "Transcatheter Tricuspid Valve-in-Valve and Valve-in-Ring Implantation for Degenerated Surgical Prosthesis (JACC: Cardiovascular Interventions August 2019)",
			"DateCompleted": "10/19/2016",
			"DateClaimed": "6/16/2019",
			"Credits": [{
					"Type": "MOCII",
					"Amount": 23.6
				},
				{
					"Type": "CPE",
					"Amount": 1.7
				}
			],
			"External": true
		}, {
			"ID": 38,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Detection of Coronary Inflammation Using CT",
			"DateCompleted": "2/18/2017",
			"DateClaimed": "1/5/2018",
			"Credits": [{
					"Type": "ECME",
					"Amount": 5.4
				},
				{
					"Type": "COP",
					"Amount": 18.6
				}
			],
			"External": true
		}, {
			"ID": 39,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "The Evolution of Beta-Blockers in Coronary Artery Disease and Heart Failure (Part I) - JACC August 2019-1",
			"DateCompleted": "4/8/2018",
			"DateClaimed": "8/25/2016",
			"Credits": [{
					"Type": "ECME",
					"Amount": 5.1
				},
				{
					"Type": "CNE",
					"Amount": 10.9
				}
			],
			"External": true
		}, {
			"ID": 40,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Risk of Heart Failure: The Opportunity for Prevention with American Heart Association's Life's Simple 7 (JACC: Heart Failure August 2019)",
			"DateCompleted": "8/21/2018",
			"DateClaimed": "1/27/2019",
			"Credits": [{
				"Type": "ECME",
				"Amount": 12.5
			}],
			"External": false
		}, {
			"ID": 41,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Recurrent Pericarditis: When It Won't Go Away",
			"DateCompleted": "7/27/2018",
			"DateClaimed": "10/17/2016",
			"Credits": [{
					"Type": "CME",
					"Amount": 2.9
				},
				{
					"Type": "CME",
					"Amount": 3.4
				}
			],
			"External": false
		}, {
			"ID": 42,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "A 65-Year-Old Woman Presents With Exertional Chest Pain",
			"DateCompleted": "7/23/2019",
			"DateClaimed": "4/20/2018",
			"Credits": [{
					"Type": "CNE",
					"Amount": 24.8
				},
				{
					"Type": "MOCII",
					"Amount": 22.8
				}
			],
			"External": true
		}, {
			"ID": 43,
			"ProductTitle": null,
			"Course": null,
			"Activity": "The High-Risk Polyvascular Patient",
			"DateCompleted": "1/14/2016",
			"DateClaimed": "5/5/2017",
			"Credits": [{
					"Type": "CME",
					"Amount": 11.6
				},
				{
					"Type": "MOCIV",
					"Amount": 7.3
				}
			],
			"External": true
		}, {
			"ID": 44,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Otcom",
			"DateCompleted": "7/27/2018",
			"DateClaimed": "5/2/2016",
			"Credits": [{
				"Type": "ECME",
				"Amount": 8.8
			}],
			"External": true
		}, {
			"ID": 45,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Asoka",
			"DateCompleted": "11/8/2018",
			"DateClaimed": "2/9/2019",
			"Credits": [{
					"Type": "CPE",
					"Amount": 4.3
				},
				{
					"Type": "CME",
					"Amount": 3.6
				}
			],
			"External": true
		}, {
			"ID": 46,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Voyatouch",
			"DateCompleted": "2/6/2017",
			"DateClaimed": "3/15/2016",
			"Credits": [{
					"Type": "CNErx",
					"Amount": 20.5
				},
				{
					"Type": "MOCIV",
					"Amount": 22.4
				}
			],
			"External": false
		}, {
			"ID": 47,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Lotlux",
			"DateCompleted": "8/20/2016",
			"DateClaimed": "4/7/2017",
			"Credits": [{
					"Type": "ECME",
					"Amount": 8.5
				},
				{
					"Type": "COP",
					"Amount": 6.7
				}
			],
			"External": false
		}, {
			"ID": 48,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Keylex",
			"DateCompleted": "5/10/2016",
			"DateClaimed": "10/22/2015",
			"Credits": [{
					"Type": "MOCII",
					"Amount": 14.5
				},
				{
					"Type": "ECME",
					"Amount": 7.0
				}
			],
			"External": false
		}, {
			"ID": 49,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Fintone",
			"DateCompleted": "5/6/2016",
			"DateClaimed": "1/27/2018",
			"Credits": [{
					"Type": "CNErx",
					"Amount": 3.9
				},
				{
					"Type": "CNE",
					"Amount": 3.7
				}
			],
			"External": false
		}, {
			"ID": 50,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Zamit",
			"DateCompleted": "11/18/2015",
			"DateClaimed": "7/14/2018",
			"Credits": [{
				"Type": "CNE",
				"Amount": 17.5
			}],
			"External": false
		}, {
			"ID": 51,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Home Ing",
			"DateCompleted": "1/16/2018",
			"DateClaimed": "6/3/2016",
			"Credits": [{
				"Type": "CME",
				"Amount": 20.2
			}],
			"External": true
		}, {
			"ID": 52,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Greenlam",
			"DateCompleted": "11/3/2017",
			"DateClaimed": "2/3/2016",
			"Credits": [{
					"Type": "ECME",
					"Amount": 4.2
				},
				{
					"Type": "COP",
					"Amount": 8.3
				}
			],
			"External": false
		}, {
			"ID": 53,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Recurrent Pericarditis: When It Won't Go Away",
			"DateCompleted": "12/14/2015",
			"DateClaimed": "6/18/2018",
			"Credits": [{
					"Type": "COP",
					"Amount": 14.2
				},
				{
					"Type": "MOCIV",
					"Amount": 20.6
				}
			],
			"External": true
		}, {
			"ID": 54,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Bytecard",
			"DateCompleted": "4/15/2016",
			"DateClaimed": "5/2/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 7.9
				},
				{
					"Type": "CME",
					"Amount": 6.1
				}
			],
			"External": false
		}, {
			"ID": 55,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Namfix",
			"DateCompleted": "3/6/2018",
			"DateClaimed": "9/29/2015",
			"Credits": [{
				"Type": "ECME",
				"Amount": 8.5
			}],
			"External": false
		}, {
			"ID": 56,
			"ProductTitle": "ACCSAP",
			"Course": "Pannier",
			"Activity": "Alpha",
			"DateCompleted": "11/17/2016",
			"DateClaimed": "12/24/2015",
			"Credits": [{
				"Type": "CPE",
				"Amount": 4.6
			}],
			"External": true
		}, {
			"ID": 57,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Y-find",
			"DateCompleted": "8/14/2017",
			"DateClaimed": "8/19/2015",
			"Credits": [{
					"Type": "CNE",
					"Amount": 11.1
				},
				{
					"Type": "MOCII",
					"Amount": 6.1
				}
			],
			"External": true
		}, {
			"ID": 58,
			"ProductTitle": null,
			"Course": "Voyatouch",
			"Activity": "Matsoft",
			"DateCompleted": "11/29/2016",
			"DateClaimed": "11/24/2016",
			"Credits": [{
				"Type": "CME",
				"Amount": 1.4
			}],
			"External": true
		}, {
			"ID": 59,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Y-find",
			"DateCompleted": "3/10/2016",
			"DateClaimed": "1/21/2016",
			"Credits": [{
					"Type": "ECME",
					"Amount": 13.2
				},
				{
					"Type": "MOCIV",
					"Amount": 3.9
				}
			],
			"External": true
		}, {
			"ID": 60,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Fintone",
			"DateCompleted": "7/2/2016",
			"DateClaimed": "3/20/2019",
			"Credits": [{
					"Type": "ECME",
					"Amount": 1.8
				},
				{
					"Type": "CPE",
					"Amount": 3.2
				}
			],
			"External": true
		}, {
			"ID": 61,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Redhold",
			"DateCompleted": "8/3/2015",
			"DateClaimed": "11/16/2018",
			"Credits": [{
					"Type": "MOCIV",
					"Amount": 19.2
				},
				{
					"Type": "CME",
					"Amount": 10.1
				}
			],
			"External": true
		}, {
			"ID": 62,
			"ProductTitle": null,
			"Course": "Cardguard",
			"Activity": "Zoolab",
			"DateCompleted": "12/4/2016",
			"DateClaimed": "4/21/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 19.7
				},
				{
					"Type": "MOCIV",
					"Amount": 3.8
				}
			],
			"External": false
		}, {
			"ID": 63,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Risk of Heart Failure: The Opportunity for Prevention with American Heart Association's Life's Simple 7 (JACC: Heart Failure August 2019)",
			"DateCompleted": "3/12/2016",
			"DateClaimed": "1/17/2016",
			"Credits": [{
				"Type": "CPE",
				"Amount": 23.4
			}],
			"External": false
		}, {
			"ID": 64,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Flexidy",
			"DateCompleted": "1/22/2016",
			"DateClaimed": "11/30/2018",
			"Credits": [{
					"Type": "COP",
					"Amount": 20.3
				},
				{
					"Type": "CPE",
					"Amount": 17.5
				}
			],
			"External": true
		}, {
			"ID": 65,
			"ProductTitle": "EP SAP",
			"Course": "Bamity",
			"Activity": "Home Ing",
			"DateCompleted": "9/19/2015",
			"DateClaimed": "12/18/2015",
			"Credits": [{
				"Type": "CNErx",
				"Amount": 17.0
			}],
			"External": false
		}, {
			"ID": 66,
			"ProductTitle": "CathSAP",
			"Course": "Lotstring",
			"Activity": "Y-Solowarm",
			"DateCompleted": "7/9/2019",
			"DateClaimed": "10/2/2015",
			"Credits": [{
				"Type": "MOCIV",
				"Amount": 3.9
			}],
			"External": true
		}, {
			"ID": 67,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Bitchip",
			"DateCompleted": "3/14/2019",
			"DateClaimed": "7/13/2019",
			"Credits": [{
					"Type": "ECME",
					"Amount": 14.4
				},
				{
					"Type": "CPE",
					"Amount": 22.4
				}
			],
			"External": false
		}, {
			"ID": 68,
			"ProductTitle": "EP SAP",
			"Course": "Tres-Zap",
			"Activity": "Daltfresh",
			"DateCompleted": "8/6/2017",
			"DateClaimed": "3/10/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 12.9
				},
				{
					"Type": "COP",
					"Amount": 4.3
				}
			],
			"External": true
		}, {
			"ID": 69,
			"ProductTitle": "EP SAP",
			"Course": "Subin",
			"Activity": "Bigtax",
			"DateCompleted": "1/6/2019",
			"DateClaimed": "6/5/2018",
			"Credits": [{
					"Type": "MOCIV",
					"Amount": 17.6
				},
				{
					"Type": "COP",
					"Amount": 11.5
				}
			],
			"External": false
		}, {
			"ID": 70,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Stringtough",
			"DateCompleted": "6/26/2019",
			"DateClaimed": "6/16/2016",
			"Credits": [{
					"Type": "CPE",
					"Amount": 4.2
				},
				{
					"Type": "MOCII",
					"Amount": 22.2
				}
			],
			"External": true
		}, {
			"ID": 71,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Domainer",
			"DateCompleted": "4/23/2019",
			"DateClaimed": "8/6/2017",
			"Credits": [{
				"Type": "CPE",
				"Amount": 24.6
			}],
			"External": false
		}, {
			"ID": 72,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Subin",
			"DateCompleted": "3/20/2019",
			"DateClaimed": "12/26/2015",
			"Credits": [{
					"Type": "ECME",
					"Amount": 14.4
				},
				{
					"Type": "COP",
					"Amount": 7.9
				}
			],
			"External": true
		}, {
			"ID": 73,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Toughjoyfax",
			"DateCompleted": "11/24/2016",
			"DateClaimed": "5/30/2019",
			"Credits": [{
					"Type": "CPE",
					"Amount": 7.5
				},
				{
					"Type": "CNErx",
					"Amount": 17.7
				}
			],
			"External": false
		}, {
			"ID": 74,
			"ProductTitle": null,
			"Course": null,
			"Activity": "Regrant",
			"DateCompleted": "7/13/2016",
			"DateClaimed": "4/15/2018",
			"Credits": [{
					"Type": "MOCII",
					"Amount": 20.6
				},
				{
					"Type": "CNE",
					"Amount": 8.7
				}
			],
			"External": false
		}, {
			"ID": 75,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Toughjoyfax",
			"DateCompleted": "4/28/2017",
			"DateClaimed": "10/25/2015",
			"Credits": [{
					"Type": "ECME",
					"Amount": 4.5
				},
				{
					"Type": "COP",
					"Amount": 17.5
				}
			],
			"External": false
		}, {
			"ID": 76,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Duobam",
			"DateCompleted": "5/3/2017",
			"DateClaimed": "8/24/2018",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 4.1
			}],
			"External": false
		}, {
			"ID": 77,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Matsoft",
			"DateCompleted": "6/17/2018",
			"DateClaimed": "8/30/2018",
			"Credits": [{
				"Type": "MOCIV",
				"Amount": 22.9
			}],
			"External": true
		}, {
			"ID": 78,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Sonsing",
			"DateCompleted": "11/9/2015",
			"DateClaimed": "2/17/2019",
			"Credits": [{
					"Type": "CPE",
					"Amount": 22.3
				},
				{
					"Type": "CME",
					"Amount": 19.4
				}
			],
			"External": true
		}, {
			"ID": 79,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Overhold",
			"DateCompleted": "8/27/2017",
			"DateClaimed": "10/1/2018",
			"Credits": [{
					"Type": "COP",
					"Amount": 24.3
				},
				{
					"Type": "ECME",
					"Amount": 20.9
				}
			],
			"External": true
		}, {
			"ID": 80,
			"ProductTitle": "Cardiosourse Plus",
			"Course": "Subin",
			"Activity": "Aerified",
			"DateCompleted": "5/29/2016",
			"DateClaimed": "2/5/2016",
			"Credits": [{
				"Type": "CNE",
				"Amount": 21.9
			}],
			"External": true
		}, {
			"ID": 81,
			"ProductTitle": "ACCSAP",
			"Course": "Voyatouch",
			"Activity": "Veribet",
			"DateCompleted": "8/6/2015",
			"DateClaimed": "12/2/2015",
			"Credits": [{
					"Type": "COP",
					"Amount": 14.6
				},
				{
					"Type": "CPE",
					"Amount": 15.8
				}
			],
			"External": false
		}, {
			"ID": 82,
			"ProductTitle": "EP SAP",
			"Course": "Regrant",
			"Activity": "Fixflex",
			"DateCompleted": "10/17/2017",
			"DateClaimed": "10/8/2016",
			"Credits": [{
				"Type": "CPE",
				"Amount": 19.3
			}],
			"External": true
		}, {
			"ID": 83,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Matsoft",
			"DateCompleted": "9/3/2015",
			"DateClaimed": "12/15/2018",
			"Credits": [{
					"Type": "MOCIV",
					"Amount": 1.4
				},
				{
					"Type": "COP",
					"Amount": 18.1
				}
			],
			"External": true
		}, {
			"ID": 84,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Otcom",
			"DateCompleted": "3/27/2017",
			"DateClaimed": "5/13/2017",
			"Credits": [{
					"Type": "CME",
					"Amount": 6.3
				},
				{
					"Type": "CNE",
					"Amount": 17.5
				}
			],
			"External": false
		}, {
			"ID": 85,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Tresom",
			"DateCompleted": "9/24/2017",
			"DateClaimed": "8/13/2015",
			"Credits": [{
					"Type": "CPE",
					"Amount": 5.6
				},
				{
					"Type": "CME",
					"Amount": 22.3
				}
			],
			"External": false
		}, {
			"ID": 86,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Risk of Heart Failure: The Opportunity for Prevention with American Heart Association's Life's Simple 7 (JACC: Heart Failure August 2019)",
			"DateCompleted": "5/18/2017",
			"DateClaimed": "5/9/2017",
			"Credits": [{
					"Type": "CNE",
					"Amount": 3.3
				},
				{
					"Type": "ECME",
					"Amount": 5.3
				}
			],
			"External": false
		}, {
			"ID": 87,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Mat Lam Tam",
			"DateCompleted": "9/8/2018",
			"DateClaimed": "4/3/2019",
			"Credits": [{
					"Type": "CNE",
					"Amount": 25.0
				},
				{
					"Type": "CME",
					"Amount": 20.7
				}
			],
			"External": false
		}, {
			"ID": 88,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Overhold",
			"DateCompleted": "9/11/2017",
			"DateClaimed": "4/16/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 2.9
				},
				{
					"Type": "MOCIV",
					"Amount": 8.2
				}
			],
			"External": false
		}, {
			"ID": 89,
			"ProductTitle": "ACCSAP",
			"Course": "Zoolab",
			"Activity": "Zaam-Dox",
			"DateCompleted": "10/2/2017",
			"DateClaimed": "3/1/2018",
			"Credits": [{
				"Type": "COP",
				"Amount": 13.2
			}],
			"External": false
		}, {
			"ID": 90,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Lotstring",
			"DateCompleted": "1/30/2019",
			"DateClaimed": "1/31/2017",
			"Credits": [{
					"Type": "CPE",
					"Amount": 9.6
				},
				{
					"Type": "CNE",
					"Amount": 10.2
				}
			],
			"External": true
		}, {
			"ID": 91,
			"ProductTitle": "CathSAP",
			"Course": null,
			"Activity": "Wrapsafe",
			"DateCompleted": "11/4/2017",
			"DateClaimed": "8/25/2017",
			"Credits": [{
				"Type": "CNE",
				"Amount": 6.2
			}],
			"External": false
		}, {
			"ID": 92,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Y-Solowarm",
			"DateCompleted": "2/23/2017",
			"DateClaimed": "12/23/2016",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 24.0
			}],
			"External": false
		}, {
			"ID": 93,
			"ProductTitle": "ACCSAP",
			"Course": null,
			"Activity": "Redhold",
			"DateCompleted": "6/27/2018",
			"DateClaimed": "1/9/2017",
			"Credits": [{
					"Type": "COP",
					"Amount": 19.3
				},
				{
					"Type": "CME",
					"Amount": 20.7
				}
			],
			"External": false
		}, {
			"ID": 94,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Span",
			"DateCompleted": "8/24/2016",
			"DateClaimed": "11/8/2018",
			"Credits": [{
				"Type": "MOCII",
				"Amount": 22.6
			}],
			"External": false
		}, {
			"ID": 95,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Bamity",
			"DateCompleted": "12/15/2017",
			"DateClaimed": "9/21/2018",
			"Credits": [{
					"Type": "MOCII",
					"Amount": 15.3
				},
				{
					"Type": "CPE",
					"Amount": 9.9
				}
			],
			"External": false
		}, {
			"ID": 96,
			"ProductTitle": "Heart Songs",
			"Course": null,
			"Activity": "Subin",
			"DateCompleted": "5/14/2017",
			"DateClaimed": "11/14/2016",
			"Credits": [{
					"Type": "ECME",
					"Amount": 6.2
				},
				{
					"Type": "ECME",
					"Amount": 4.9
				}
			],
			"External": true
		}, {
			"ID": 97,
			"ProductTitle": null,
			"Course": "Pannier",
			"Activity": "Home Ing",
			"DateCompleted": "10/13/2018",
			"DateClaimed": "7/29/2016",
			"Credits": [{
				"Type": "CPE",
				"Amount": 2.1
			}],
			"External": false
		}, {
			"ID": 98,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Zathin",
			"DateCompleted": "8/30/2018",
			"DateClaimed": "5/4/2017",
			"Credits": [{
				"Type": "CNErx",
				"Amount": 20.2
			}],
			"External": false
		}, {
			"ID": 99,
			"ProductTitle": "Cardiosourse Plus",
			"Course": null,
			"Activity": "Alpha",
			"DateCompleted": "7/26/2019",
			"DateClaimed": "12/12/2018",
			"Credits": [{
				"Type": "MOCIV",
				"Amount": 1.5
			}],
			"External": true
		}, {
			"ID": 100,
			"ProductTitle": "EP SAP",
			"Course": null,
			"Activity": "Daltfresh",
			"DateCompleted": "12/22/2018",
			"DateClaimed": "6/25/2016",
			"Credits": [{
				"Type": "CPE",
				"Amount": 10.0
			}],
			"External": true
		}]
	},
	mutations: {},
	actions: {}
});
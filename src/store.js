import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		objects: [
			{
				id: 1,
				selected: false,
				title:
					"Closed reduction of fracture without internal fixation, radius and ulna",
				type: "fa-table"
			},
			{
				id: 2,
				selected: false,
				title: "Sphenoidotomy",
				type: "fa-project-diagram"
			},
			{
				id: 3,
				selected: false,
				title:
					"Incision with removal of foreign body or device from skin and subcutaneous tissue",
				type: "fa-align-left"
			},
			{
				id: 4,
				selected: false,
				title: "Incision of palate",
				type: "fa-table"
			},
			{
				id: 5,
				selected: true,
				title: "Other mid forceps operation",
				type: "fa-badge-check"
			},
			{
				id: 6,
				selected: false,
				title: "Measurement of mixed venous blood gases",
        type: "fa-align-left"
			},
			{
				id: 7,
				selected: false,
				title: "Mediastinal tracheostomy",
				type: "fa-badge-check"
			},
			{
				id: 8,
				selected: false,
				title: "Open biopsy of large intestine",
				type: "fa-table"
			},
			{
				id: 9,
				selected: false,
				title: "Other excision of lesion or tissue of lip",
        type: "fa-sitemap"
			},
			{
				id: 10,
				selected: false,
				title: "Ligation and stripping of varicose veins, unspecified site",
				type: "fa-table"
			},
			{
				id: 11,
				selected: false,
				title:
					"Insertion or replacement of implantable pressure sensor with lead for intracardiac or great vessel hemodynamic monitoring",
				type: "fa-table"
			},
			{
				id: 12,
				selected: false,
				title: "Other incision of thyroid field",
        type: "fa-align-left"
			},
			{
				id: 13,
				selected: false,
				title: "Other speech training and therapy",
				type: "fa-project-diagram"
			},
			{
				id: 14,
				selected: false,
				title: "Removal of remaining testis",
				type: "fa-badge-check"
			},
			{
				id: 15,
				selected: false,
				title: "Other endovascular procedures on other vessels",
				type: "fa-table"
			},
			{
				id: 16,
				selected: false,
				title: "Repair of esophageal fistula, not elsewhere classified",
				type: "fa-project-diagram"
			},
			{
				id: 17,
				selected: false,
				title: "Revision of amputation stump",
				type: "fa-table"
			},
			{
				id: 18,
				selected: false,
				title: "Excision of lesion of other soft tissue",
        type: "fa-sitemap"
			},
			{
				id: 19,
				selected: false,
				title: "Endoscopic retrograde cholangiopancreatography [ERCP]",
        type: "fa-align-left"
			},
			{
				id: 20,
				selected: false,
				title:
					"Other and open bilateral repair of inguinal hernia, one direct and one indirect, with graft or prosthesis",
				type: "fa-badge-check"
			},
			{
				id: 21,
				selected: false,
				title: "Incision and drainage of tonsil and peritonsillar structures",
				type: "fa-badge-check"
			},
			{
				id: 22,
				selected: false,
				title:
					"Other laparoscopic repair of other hernia of anterior abdominal wall with graft or prosthesis",
        type: "fa-sitemap"
			},
			{
				id: 23,
				selected: false,
				title: "Extracorporeal membrane oxygenation [ECMO]",
        type: "fa-align-left"
			},
			{
				id: 24,
				selected: false,
				title: "Other esophagoscopy",
				type: "fa-project-diagram"
			},
			{
				id: 25,
				selected: false,
				title: "Other diagnostic procedures on ureter",
				type: "fa-badge-check"
			},
			{
				id: 26,
				selected: false,
				title: "Evacuation of thrombosed hemorrhoids",
        type: "fa-align-left"
			},
			{
				id: 27,
				selected: false,
				title: "Other division of bone, femur",
				type: "fa-table"
			},
			{
				id: 28,
				selected: false,
				title: "Removal of nail, nail bed, or nail fold",
        type: "fa-sitemap"
			},
			{
				id: 29,
				selected: false,
				title: "Open pull-through resection of rectum",
				type: "fa-table"
			},
			{
				id: 30,
				selected: false,
				title: "Other total breech extraction",
				type: "fa-project-diagram"
			},
			{
				id: 31,
				selected: false,
				title: "Radical excision of iliac lymph nodes",
				type: "fa-project-diagram"
			},
			{
				id: 32,
				selected: false,
				title: "Implantation or revision of artificial anal sphincter",
				type: "fa-badge-check"
			},
			{
				id: 33,
				selected: false,
				title: "Insertion of three vascular stents",
				type: "fa-badge-check"
			},
			{
				id: 34,
				selected: false,
				title: "Other suture of other tendon of hand",
				type: "fa-project-diagram"
			},
			{
				id: 35,
				selected: false,
				title: "Closure of nasal sinus fistula",
				type: "fa-project-diagram"
			},
			{
				id: 36,
				selected: false,
				title:
					"Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, cell block and Papanicolaou smear",
				type: "fa-table"
			},
			{
				id: 37,
				selected: false,
				title: "Repair of retinal tear by diathermy",
        type: "fa-sitemap"
			},
			{
				id: 38,
				selected: false,
				title: "Osteoclasis, radius and ulna",
        type: "fa-align-left"
			},
			{
				id: 39,
				selected: false,
				title: "Resection of vessel with anastomosis, lower limb arteries",
				type: "fa-table"
			},
			{
				id: 40,
				selected: false,
				title: "Intestinal biopsy, site unspecified",
				type: "fa-project-diagram"
			},
			{
				id: 41,
				selected: false,
				title: "General physical examination",
				type: "fa-table"
			},
			{
				id: 42,
				selected: false,
				title: "Aspiration biopsy of ovary",
				type: "fa-table"
			},
			{
				id: 43,
				selected: false,
				title: "Exploratory laparotomy",
				type: "fa-table"
			},
			{
				id: 44,
				selected: false,
				title: "Closed [endoscopic] biopsy of stomach",
				type: "fa-table"
			},
			{
				id: 45,
				selected: false,
				title: "Marsupialization of cervical cyst",
				type: "fa-project-diagram"
			},
			{
				id: 46,
				selected: false,
				title: "Allogeneic bone marrow transplant with purging",
				type: "fa-table"
			},
			{
				id: 47,
				selected: false,
				title: "Vectorcardiogram (with ECG)",
				type: "fa-project-diagram"
			},
			{
				id: 48,
				selected: false,
				title: "Closed [aspiration] [needle] [percutaneous] biopsy of pancreas",
				type: "fa-badge-check"
			},
			{
				id: 49,
				selected: false,
				title: "Partial cystectomy",
				type: "fa-project-diagram"
			},
			{
				id: 50,
				selected: false,
				title: "Fitting of prosthesis of lower arm and hand",
				type: "fa-badge-check"
			},
			{
				id: 51,
				selected: false,
				title: "Removal of dental prosthesis",
				type: "fa-project-diagram"
			},
			{
				id: 52,
				selected: false,
				title: "Coronary arteriography using a single catheter",
				type: "fa-project-diagram"
			},
			{
				id: 53,
				selected: false,
				title:
					"Microscopic examination of specimen from female genital tract, other microscopic examination",
				type: "fa-project-diagram"
			},
			{
				id: 54,
				selected: false,
				title: "Other repair of kidney",
				type: "fa-project-diagram"
			},
			{
				id: 55,
				selected: false,
				title: "Other procedures on hemorrhoids",
				type: "fa-table"
			},
			{
				id: 56,
				selected: false,
				title: "Endoscopic dilation of pancreatic duct",
				type: "fa-badge-check"
			},
			{
				id: 57,
				selected: false,
				title: "Injection of tranquilizer",
				type: "fa-project-diagram"
			},
			{
				id: 58,
				selected: false,
				title: "Amputation through foot",
				type: "fa-badge-check"
			},
			{
				id: 59,
				selected: false,
				title: "Turbinectomy by diathermy or cryosurgery",
				type: "fa-project-diagram"
			},
			{
				id: 60,
				selected: false,
				title: "Isolation",
				type: "fa-project-diagram"
			},
			{
				id: 61,
				selected: false,
				title: "Simple suture of fallopian tube",
				type: "fa-badge-check"
			},
			{
				id: 62,
				selected: false,
				title: "Intrathoracic lymphangiogram",
				type: "fa-badge-check"
			},
			{
				id: 63,
				selected: false,
				title: "Other operations on trachea",
				type: "fa-badge-check"
			},
			{
				id: 64,
				selected: false,
				title:
					"Microscopic examination of specimen from unspecified site, culture",
				type: "fa-table"
			},
			{
				id: 65,
				selected: false,
				title: "Other procedures on hemorrhoids",
				type: "fa-project-diagram"
			}
		],
		sections: [
			{
				id: 66,
				selected: false,
				title: "General Principles",
				type: "fa-h1"
			},
			{
				id: 67,
				selected: false,
				title: "Principles of Medical Therapy",
				type: "fa-h2"
			},
			{
				id: 68,
				selected: false,
				title: "Other operations on sphincter of Oddi",
				type: "fa-h2"
			},
			{
				id: 69,
				selected: false,
				title: "Removal of orbital implant",
				type: "fa-h3"
			},
			{
				id: 70,
				selected: true,
				title: "Esophagectomy, not otherwise specified",
				type: "fa-h3"
			},
			{
				id: 71,
				selected: false,
				title: "Pneumoencephalogram",
				type: "fa-h2"
			},
			{
				id: 72,
				selected: false,
				title: "Other x-ray of male genital organs",
				type: "fa-h2"
			},
			{
				id: 73,
				selected: false,
				title:
					"Implantation of automatic cardioverter/defibrillator lead(s) only",
				type: "fa-h3"
			},
			{
				id: 74,
				selected: false,
				title: "Incision and drainage of scrotum and tunica vaginalis",
				type: "fa-h3"
			},
			{
				id: 75,
				selected: false,
				title: "Incision of periurethral tissue",
				type: "fa-h3"
			}
		],
		guidelines: [
			{
				id: 100,
				selected: false,
				title: "2018 Guideline on the Management of Blood Cholesterol",
				type: "fa-book"
			},
			{
				id: 101,
				selected: true,
				title:
					"Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay",
				type: "fa-book"
			},
			{
				id: 102,
				selected: false,
				title:
					"Clinical Cardiac Electrophysiology Specialists: Lifelong Learning Statement",
				type: "fa-book"
			},
			{
				id: 103,
				selected: false,
				title:
					"2018 AHA/ACC Guideline for the Management of Adults with Congenital Heart Disease",
				type: "fa-book"
			}
		]
	},
	mutations: {},
	actions: {}
});

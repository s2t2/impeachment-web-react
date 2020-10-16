
var communityTags = [
    {"community_id": 0,	"tag": "#RESIST",               "description": null},
    {"community_id": 0,	"tag": "#THERESISTANCE",        "description": null},
    {"community_id": 0,	"tag": "#RESISTANCE",           "description": null},
    {"community_id": 0,	"tag": "#VOTEBLUENOMATTERWHO", "description": null},
    {"community_id": 0,	"tag": "#VOTEBLUE",             "description": null},
    {"community_id": 0,	"tag": "#BLUEWAVE2020",     "description": null},
    {"community_id": 0,	"tag": "#IMPEACHTRUMP",     "description": null},
    {"community_id": 0,	"tag": "#BIDEN2020",        "description": null},
    {"community_id": 0,	"tag": "#IMPEACHTRUMPNOW",  "description": null},
    {"community_id": 0,	"tag": "#METOO",            "description": null},
    {"community_id": 0,	"tag": "#IMPEACH",          "description": null},
    {"community_id": 0,	"tag": "#BLUEWAVE",         "description": null},
    {"community_id": 0,	"tag": "#VOTEBLUE2020",     "description": null},
    {"community_id": 0,	"tag": "#IMPEACHANDREMOVE", "description": null},
    {"community_id": 0,	"tag": "#RESISTER",         "description": null},
    {"community_id": 0,	"tag": "#NOTMYPRESIDENT",   "description": null},
    {"community_id": 0,	"tag": "#DEMCAST",          "description": "A left-leaning media outlet"},
    {"community_id": 0,	"tag": "#IMPOTUS",          "description": "'Impeached POTUS'"},
    {"community_id": 0,	"tag": "#BLM",              "description": "'Black Lives Matter' - a movement for racial equality"},
    {"community_id": 0,	"tag": "#WTP2020",          "description": "'We The People 2020'"},
    {"community_id": 0,	"tag": "#FBR",              "description": "'Follow Black Resistance'"},
    {"community_id": 1,	"tag": "#MAGA",             "description": "'Make America Great Again' - a Trump campaign slogan"},
    {"community_id": 1,	"tag": "#KAG",              "description": "'Keep America Great' - a Trump campaign slogan"},
    {"community_id": 1,	"tag": "#TRUMP2020",        "description": null},
    {"community_id": 1,	"tag": "#DRAINTHESWAMP",    "description": "A Trump campaign slogan"},
    {"community_id": 1,	"tag": "#DEPLORABLE",       "description": "Refers to a Hillary Clinton quote from the 2016 election"},
    {"community_id": 1,	"tag": "#PATRIOT",          "description": null},
    {"community_id": 1,	"tag": "#AMERICAFIRST",     "description": "A Trump campaign slogan"},
    {"community_id": 1,	"tag": "#CONSERVATIVE",     "description": null},
    {"community_id": 1,	"tag": "#TRUMPTRAIN",       "description": null},
    {"community_id": 1,	"tag": "#VETERAN",          "description": null},
    {"community_id": 1,	"tag": "#TRUMP",            "description": null},
    {"community_id": 1,	"tag": "#BUILDTHEWALL",     "description": "A Trump campaign slogan"},
    {"community_id": 1,	"tag": "#WALKAWAY",         "description": null},
    {"community_id": 1,	"tag": "#BUILDKATESWALL",   "description": null},
    {"community_id": 1,	"tag": "#CODEOFVETS",       "description": null},
    {"community_id": 1,	"tag": "#1A",               "description": "The First Amendment"},
    {"community_id": 1,	"tag": "#2A",               "description": "The Second Amendment"},
    {"community_id": 1,	"tag": "#WWG1WGA",          "description": "Related to Q-Anon conspiracy theory"},
    {"community_id": 1,	"tag": "#THEGREATAWAKENING", "description": "Related to Q-Anon conspiracy theory"},
    {"community_id": 1,	"tag": "#QANON",            "description": "Related to Q-Anon conspiracy theory"},
    {"community_id": 1,	"tag": "#POTUS45",          "description": "45th President (Trump)"},
    {"community_id": 1,	"tag": "#NRA",              "description": "The National Rifle Association"}
]

//var lrScores = {
//	"model_name": "logistic_regression",
//	"model_id": "2020-10-07-0220",
//	"features": 1110682,
//	"label_maker": "two_community_party_labels",
//	"matrix_train": [2217524, 1110682],
//	"matrix_test": [554381, 1110682],
//	"scores_train": {
//		"D": {
//			"precision": 0.8894128664063466,
//			"recall": 0.8938563259058538,
//			"f1-score": 0.891629060162878,
//			"support": 1126313
//		},
//		"R": {
//			"precision": 0.8898740217247122,
//			"recall": 0.8852852473078076,
//			"f1-score": 0.8875737035412155,
//			"support": 1091211
//		},
//		"accuracy": 0.889638623978816,
//		"macro avg": {
//			"precision": 0.8896434440655294,
//			"recall": 0.8895707866068308,
//			"f1-score": 0.8896013818520467,
//			"support": 2217524
//		},
//		"weighted avg": {
//			"precision": 0.8896397941672679,
//			"recall": 0.889638623978816,
//			"f1-score": 0.8896334787150645,
//			"support": 2217524
//		}
//	},
//	"scores_test": {
//		"D": {
//			"precision": 0.876414408436686,
//			"recall": 0.8818799764186123,
//			"f1-score": 0.8791386977086697,
//			"support": 281578
//		},
//		"R": {
//			"precision": 0.8772906543883533,
//			"recall": 0.8716436402825483,
//			"f1-score": 0.8744580307069963,
//			"support": 272803
//		},
//		"accuracy": 0.8768428210923535,
//		"macro avg": {
//			"precision": 0.8768525314125197,
//			"recall": 0.8767618083505803,
//			"f1-score": 0.876798364207833,
//			"support": 554381
//		},
//		"weighted avg": {
//			"precision": 0.8768455965985327,
//			"recall": 0.8768428210923535,
//			"f1-score": 0.8768354080936622,
//			"support": 554381
//		}
//	}
//}
//
//var nbScores = {
//    "model_name": "multinomial_nb",
//    "model_id": "2020-10-07-0222",
//    "features": 1110682,
//    "label_maker": "two_community_party_labels",
//    "matrix_train": [2217524, 1110682],
//    "matrix_test": [554381, 1110682],
//    "scores_train": {
//        "D": {
//            "precision": 0.8948443153280613,
//            "recall": 0.9260010316847981,
//            "f1-score": 0.9101561102379657,
//            "support": 1126313
//        },
//        "R": {
//            "precision": 0.9207733877062153,
//            "recall": 0.8876825838449209,
//            "f1-score": 0.9039252409707699,
//            "support": 1091211
//        },
//        "accuracy": 0.9071450861411195,
//        "macro avg": {
//            "precision": 0.9078088515171383,
//            "recall": 0.9068418077648595,
//            "f1-score": 0.9070406756043679,
//            "support": 2217524
//        },
//        "weighted avg": {
//            "precision": 0.907603631122992,
//            "recall": 0.9071450861411195,
//            "f1-score": 0.9070899909608233,
//            "support": 2217524
//        }
//    },
//    "scores_test": {
//        "D": {
//            "precision": 0.8699430370002909,
//            "recall": 0.9030535056005796,
//            "f1-score": 0.8861891045579772,
//            "support": 281578
//        },
//        "R": {
//            "precision": 0.895843349129675,
//            "recall": 0.8606503594168686,
//            "f1-score": 0.8778942920867695,
//            "support": 272803
//        },
//        "accuracy": 0.882187520856595,
//        "macro avg": {
//            "precision": 0.8828931930649829,
//            "recall": 0.8818519325087242,
//            "f1-score": 0.8820416983223733,
//            "support": 554381
//        },
//        "weighted avg": {
//            "precision": 0.882688211978929,
//            "recall": 0.882187520856595,
//            "f1-score": 0.8821073453949054,
//            "support": 554381
//        }
//    }
//}

export default communityTags

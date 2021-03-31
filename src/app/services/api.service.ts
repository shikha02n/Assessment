import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  details = [{
    "quantity": 1,
    "weight": 1031.3276924062116,
    "measure": "liter",
    "foodMatch": "milk",
    "cal": 629.109892367789
	}, {
    "quantity": 12,
    "measure": "whole",
    "foodMatch": "mango",
    "weight": 4032.0,
    "cal": 2419.2
	}];

  nutrition =  {
		"ENERC_KCAL": {
			"label": "Energy",
			"quantity": 3048.309892367789,
			"unit": "kcal"
		},
		"FAT": {
			"label": "Fat",
			"quantity": 48.83975000320187,
			"unit": "g"
		},
		"FASAT": {
			"label": "Saturated",
			"quantity": 22.943701463375845,
			"unit": "g"
		},
		"FAMS": {
			"label": "Monounsaturated",
			"quantity": 14.019180862338441,
			"unit": "g"
		},
		"FAPU": {
			"label": "Polyunsaturated",
			"quantity": 4.873809000192113,
			"unit": "g"
		},
		"CHOCDF": {
			"label": "Carbs",
			"quantity": 653.4973292354982,
			"unit": "g"
		},
		"FIBTG": {
			"label": "Fiber",
			"quantity": 64.512,
			"unit": "g"
		},
		"SUGAR": {
			"label": "Sugars",
			"quantity": 602.8532484665137,
			"unit": "g"
		},
		"PROCNT": {
			"label": "Protein",
			"quantity": 65.54922231079567,
			"unit": "g"
		},
		"CHOLE": {
			"label": "Cholesterol",
			"quantity": 103.13276924062116,
			"unit": "mg"
		},
		"NA": {
			"label": "Sodium",
			"quantity": 483.79090773467095,
			"unit": "mg"
		},
		"CA": {
			"label": "Calcium",
			"quantity": 1608.920292419019,
			"unit": "mg"
		},
		"MG": {
			"label": "Magnesium",
			"quantity": 506.33276924062113,
			"unit": "mg"
		},
		"K": {
			"label": "Potassium",
			"quantity": 8135.1125539762,
			"unit": "mg"
		},
		"FE": {
			"label": "Iron",
			"quantity": 6.760598307721864,
			"unit": "mg"
		},
		"ZN": {
			"label": "Zinc",
			"quantity": 7.4447124619029825,
			"unit": "mg"
		},
		"P": {
			"label": "Phosphorus",
			"quantity": 1430.7952616212178,
			"unit": "mg"
		},
		"VITA_RAE": {
			"label": "Vitamin A",
			"quantity": 2651.6907385068575,
			"unit": "µg"
		},
		"VITC": {
			"label": "Vitamin C",
			"quantity": 1467.648,
			"unit": "mg"
		},
		"THIA": {
			"label": "Thiamin (B1)",
			"quantity": 1.6033707385068574,
			"unit": "mg"
		},
		"RIBF": {
			"label": "Riboflavin (B2)",
			"quantity": 3.2751038001664976,
			"unit": "mg"
		},
		"NIA": {
			"label": "Niacin (B3)",
			"quantity": 27.89196164624153,
			"unit": "mg"
		},
		"VITB6A": {
			"label": "Vitamin B6",
			"quantity": 5.169357969266236,
			"unit": "mg"
		},
		"FOLDFE": {
			"label": "Folate equivalent (total)",
			"quantity": 1785.3263846203106,
			"unit": "µg"
		},
		"FOLFD": {
			"label": "Folate (food)",
			"quantity": 1785.3263846203106,
			"unit": "µg"
		},
		"FOLAC": {
			"label": "Folic acid",
			"quantity": 0.0,
			"unit": "µg"
		},
		"VITB12": {
			"label": "Vitamin B12",
			"quantity": 4.640974615827952,
			"unit": "µg"
		},
		"VITD": {
			"label": "Vitamin D",
			"quantity": 13.40726000128075,
			"unit": "µg"
		},
		"TOCPHA": {
			"label": "Vitamin E",
			"quantity": 37.009929384684355,
			"unit": "mg"
		},
		"VITK1": {
			"label": "Vitamin K",
			"quantity": 172.43798307721866,
			"unit": "µg"
		},
		"WATER": {
			"label": "Water",
			"quantity": 4274.016295317594,
			"unit": "g"
		}
	};

  constructor(private http: HttpClient) {}

  get(url) {
    // url need to be used in case of real Api
    return of(this.nutrition);
  }

  post(url, data) {
    // url and data need to be used in case of real Api
    return of(this.details);
  }
}

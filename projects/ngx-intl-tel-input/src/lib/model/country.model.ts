export interface Country {
	name: string;
	iso2: string;
	dialCode: string;
	priority: number;
	areaCodes?: string[];
	flagClass: string;
	placeHolder: string;
}

interface Fields {
	name: string;
	type: string;
	label: string;
	required: boolean;
	options?: string[];
}

export type TypeForm = {
	onSubmit(formData: { [key: string]: any }): void;
	fields: Fields[],
	title: string;
	subtitle: string;
}
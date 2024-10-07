export const formatPhoneNumber = (value: string) => {
	if (!value) return value;
	const phoneNumber = value.replace(/[^\d]/g, '');

	if (phoneNumber.length < 3) return phoneNumber;
	if (phoneNumber.length < 7) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
	if (phoneNumber.length <= 10) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
	return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
};


export const load = async () => {
	const text = (await import('$lib/data/text.json')).default;
	return { text };
};

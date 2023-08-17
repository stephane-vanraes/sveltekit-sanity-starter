export async function load({ locals }) {
	return {
		isPreviewMode: locals.isPreviewMode
	};
}

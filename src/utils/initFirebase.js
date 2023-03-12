//initialize firebase backend
export default async function initFirebase() {
	// !initializing
	const promises = new Promise((resolve, reject) => {
		let admin = require("firebase-admin");

		const parsed = JSON.parse(process.env.FIREBASE_AUTH);

		if (admin.apps.length === 0) {
			admin.initializeApp({
				credential: admin.credential.cert({
					type: parsed.type,
					project_id: parsed.project_id,
					private_key_id: parsed.private_key_id,
					private_key: parsed.private_key.replace(/\\n/g, "\n"),
					client_email: parsed.client_email,
					client_id: parsed.client_id,
					auth_uri: parsed.auth_uri,
					token_uri: parsed.token_uri,
					auth_provider_x509_cert_url:
						parsed.auth_provider_x509_cert_url,
					client_x509_cert_url: parsed.client_x509_cert_url,
				}),
			});
		}

		const db = admin.firestore();
		console.log("Firebase initialized");

		resolve({ admin, db });
	});

	return promises;
}

export const SITE_URL = 'https://le-li.eu';
export const SITE_NAME = 'LE LIEU';
export const SITE_TAGLINE = 'Lieu Imaginaire Expérimental Utopique';

export type SeoMeta = {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
	image?: string;
};

export const defaultKeywords = [
	'LE LIEU',
	'lieu collaboratif',
	'atelier partagé',
	'micro-galerie',
	'fablab',
	'atelier d\'art',
	'dessin',
	'peinture',
	'gravure',
	'sérigraphie',
	'risographie',
	'découpe laser',
	'impression grand format',
	'massage',
	'cuisine partagée',
	'studio son'
];

export const spaceSeo: Record<string, SeoMeta> = {
	galerie: {
		title: 'Micro-galerie — expositions, éditions, gravure, sérigraphie',
		description:
			"La micro-galerie de LE LIEU : un mur d'accrochage, une vitrine sur rue, des expositions courtes — dessins, éditions, gravure, sérigraphie, risographie, objets fragiles. Vernissages les vendredis soir.",
		path: '/galerie',
		keywords: [
			'micro-galerie',
			'galerie d\'art',
			'gallery',
			'exposition',
			'vernissage',
			'éditions',
			'sérigraphie',
			'gravure',
			'etching',
			'risographie',
			'dessin'
		]
	},
	atelier: {
		title: 'Atelier d\'art — dessin, peinture, gravure, terre, textile',
		description:
			"L'atelier d'art de LE LIEU : un espace partagé pour le dessin, la peinture, la gravure, la céramique, le papier et le textile. Grande table, matériel partagé, créneaux ouverts — on vient avec son projet, ou sans.",
		path: '/atelier',
		keywords: [
			'atelier d\'art',
			'atelier partagé',
			'cours de dessin',
			'cours de peinture',
			'dessin',
			'drawing',
			'peinture',
			'painting',
			'gravure',
			'etching',
			'céramique',
			'terre',
			'textile',
			'reliure'
		]
	},
	fablab: {
		title: 'Fablab — découpe laser, gravure, traceur A1, électronique',
		description:
			"Le fablab de LE LIEU : découpe laser xTool M1, traceur grand format Epson A1, gravure, atelier électronique et soudure. Une boîte à outils partagée — initiation rapide avant la première utilisation autonome.",
		path: '/fablab',
		keywords: [
			'fablab',
			'fab lab',
			'maker space',
			'découpe laser',
			'laser cutter',
			'xTool M1',
			'gravure laser',
			'etching',
			'traceur grand format',
			'plotter A1',
			'impression A1',
			'soudure',
			'électronique',
			'Arduino',
			'ESP32',
			'prototypage'
		]
	},
	massage: {
		title: 'Espace massage — pratique sensible, sur rendez-vous',
		description:
			"Le parloir massage de LE LIEU, tenu par Espace Agapé : massage biodynamique, thaï, lomi-lomi, californien, prénatal. Adapté à chaque corps, sur rendez-vous, formule où l'argent n'est pas une limite.",
		path: '/massage',
		keywords: [
			'massage',
			'massage biodynamique',
			'massage thaï',
			'lomi-lomi',
			'massage californien',
			'massage prénatal',
			'massage adapté',
			'Espace Agapé',
			'bien-être'
		]
	},
	kitchen: {
		title: 'Cuisine partagée — repas, café, ateliers',
		description:
			"La cuisine partagée de LE LIEU : un espace équipé pour cuisiner ensemble, prendre un café entre deux ateliers, organiser un repas pendant un stage. Accès aux usager·ère·s du LIEU.",
		path: '/kitchen',
		keywords: [
			'cuisine partagée',
			'cuisine collective',
			'repas partagés',
			'cuisine collaborative',
			'shared kitchen'
		]
	},
	studio: {
		title: 'Studio son (à venir) — répétitions, démos, captation',
		description:
			"Le futur studio son de LE LIEU : une salle acoustiquement traitée pour répéter en groupe et capter des démos courtes. En construction — on partage l'avancement page après page.",
		path: '/studio',
		keywords: [
			'studio son',
			'studio d\'enregistrement',
			'répétition groupe',
			'démo musicale',
			'home studio',
			'captation live'
		]
	}
};

export const homeSeo: SeoMeta = {
	title: 'LE LIEU — micro-galerie, atelier d\'art, fablab, studio son',
	description:
		"LE LIEU réunit sous un même toit une micro-galerie, un atelier d'art (dessin, peinture, gravure, terre, textile), un fablab (découpe laser, traceur A1, électronique), un espace massage, une cuisine partagée et un futur studio son.",
	path: '/',
	keywords: defaultKeywords
};

export function canonical(path: string): string {
	if (path === '/') return SITE_URL + '/';
	return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}

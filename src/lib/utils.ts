import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export type BrutColor = 'yellow' | 'orange' | 'red' | 'blue' | 'teal' | 'petrol' | 'green';

export const colorBg: Record<BrutColor, string> = {
	yellow: 'bg-brut-yellow',
	orange: 'bg-brut-orange',
	red: 'bg-brut-red',
	blue: 'bg-brut-blue',
	teal: 'bg-brut-teal',
	petrol: 'bg-brut-petrol',
	green: 'bg-brut-green'
};

export const colorText: Record<BrutColor, string> = {
	yellow: 'text-brut-ink',
	orange: 'text-brut-paper',
	red: 'text-brut-paper',
	blue: 'text-brut-ink',
	teal: 'text-brut-paper',
	petrol: 'text-brut-paper',
	green: 'text-brut-paper'
};

export type Space = {
	slug: 'galerie' | 'atelier' | 'fablab' | 'studio' | 'massage' | 'kitchen';
	name: string;
	tagline: string;
	description: string;
	color: BrutColor;
	comingSoon?: boolean;
};

export const spaces: Space[] = [
	{
		slug: 'galerie',
		name: 'La micro-galerie',
		tagline: 'Un mur, une vitrine, un regard.',
		description:
			"Un petit espace pour montrer des œuvres en train de se faire — dessins, éditions, objets fragiles. La programmation change souvent, le format reste court et proche.",
		color: 'yellow'
	},
	{
		slug: 'atelier',
		name: "L'atelier d'art",
		tagline: 'Des mains, des matières, du temps.',
		description:
			"Un atelier de pratiques plastiques et artisanales — dessin, peinture, terre, papier, textile. Grande table, lumière, matériel partagé. On vient avec son projet, ou sans.",
		color: 'orange'
	},
	{
		slug: 'fablab',
		name: 'Le fablab',
		tagline: 'Outils ouverts, idées en pièces.',
		description:
			"Découpe laser xTool M1, traceur grand format A1, atelier électronique. Une boîte à outils partagée pour passer du croquis à l'objet — après une initiation rapide.",
		color: 'red'
	},
	{
		slug: 'massage',
		name: 'Le parloir massage',
		tagline: 'Se poser, se laisser toucher.',
		description:
			"Une pièce calme tenue par Espace Agapé : massage sensible, lent, adapté à chaque corps. Sur rendez-vous, dans une formule où l'argent n'est pas une limite.",
		color: 'teal'
	},
	{
		slug: 'kitchen',
		name: 'La cuisine partagée',
		tagline: 'Couper, cuire, manger ensemble.',
		description:
			"Une cuisine entièrement équipée, ouverte aux usager·ère·s du LIEU. On y mange entre deux ateliers, on y organise des repas partagés, on y range ce qu'on a fait pousser.",
		color: 'green'
	},
	{
		slug: 'studio',
		name: 'Le studio son',
		tagline: 'Répéter, capter, faire sonner.',
		description:
			"Une salle acoustiquement traitée pour répéter en groupe et capter des démos courtes. Le local est trouvé, le matériel s'assemble — on garde la page à jour.",
		color: 'blue',
		comingSoon: true
	}
];

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export type BrutColor = 'yellow' | 'orange' | 'red' | 'blue' | 'teal' | 'petrol';

export const colorBg: Record<BrutColor, string> = {
	yellow: 'bg-brut-yellow',
	orange: 'bg-brut-orange',
	red: 'bg-brut-red',
	blue: 'bg-brut-blue',
	teal: 'bg-brut-teal',
	petrol: 'bg-brut-petrol'
};

export const colorText: Record<BrutColor, string> = {
	yellow: 'text-brut-ink',
	orange: 'text-brut-paper',
	red: 'text-brut-paper',
	blue: 'text-brut-ink',
	teal: 'text-brut-paper',
	petrol: 'text-brut-paper'
};

export type Space = {
	slug: 'galerie' | 'atelier' | 'fablab' | 'studio';
	name: string;
	tagline: string;
	color: BrutColor;
	comingSoon?: boolean;
};

export const spaces: Space[] = [
	{
		slug: 'galerie',
		name: 'La micro-galerie',
		tagline: 'Un mur, une vitrine, un regard.',
		color: 'yellow'
	},
	{
		slug: 'atelier',
		name: "L'atelier d'art",
		tagline: 'Des mains, des matières, du temps.',
		color: 'orange'
	},
	{
		slug: 'fablab',
		name: 'Le fablab',
		tagline: 'Outils ouverts, idées en pièces.',
		color: 'red'
	},
	{
		slug: 'studio',
		name: 'Le studio son',
		tagline: 'Répéter, capter, faire sonner.',
		color: 'blue',
		comingSoon: true
	}
];

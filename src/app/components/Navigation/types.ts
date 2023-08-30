export interface TypeNavItemDetail {
	name: string;
	class: string;
	url: string;
	linkClasses?: string;
}

export interface TypeNavItem extends TypeNavItemDetail {
	subpages?: TypeNavItemDetail[];
}

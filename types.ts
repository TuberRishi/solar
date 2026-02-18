export interface TeamMember {
    name: string;
    role: string;
    phone: string;
    isFounder?: boolean;
}

export interface Service {
    icon: string;
    title: string;
    description?: string;
}

export interface Benefit {
    icon: string;
    title: string;
    description: string;
}

export interface NavItem {
    label: string;
    href: string;
}
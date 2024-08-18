interface NavLink {
    name: string;
    path: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resource', path: '/resource' },
];

export default navLinks
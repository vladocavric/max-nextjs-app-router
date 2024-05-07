import Link from 'next/link';
import React from 'react';
import NavLink from './nav-link';
import styles from './main-header.module.scss';

const nav = [
    {
        label: 'Archive',
        href: '/archive',
    },
    {
        label: 'News',
        href: '/news',
    },
];

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>NextNews</Link>
            </div>
            <nav>
                <ul>
                    {nav.map(({ href, label }) => (
                        <li key={href}>
                            <NavLink href={href} label={label} />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;

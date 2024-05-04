import React from 'react';

import Logo from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.scss';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const nav = [
    {
        label: 'Browse Meals',
        href: '/meals',
    },
    {
        label: 'Foodies Community',
        href: '/community',
    },
];

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link href='/' className={styles.logo}>
                    <Image src={Logo} alt='logo' width={80} height={80} priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        {nav.map(({ href, label }) => (
                            <li key={href}>
                                <NavLink href={href} label={label} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;

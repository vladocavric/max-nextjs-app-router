'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './nav-link.module.scss';

const NavLink = ({ href, label }: { href: string; label: string }) => {
    const path = usePathname();
    return (
        <Link href={href} className={`${styles.link} ${path.startsWith(href) ? styles.active : undefined}`}>
            {label}
        </Link>
    );
};

export default NavLink;

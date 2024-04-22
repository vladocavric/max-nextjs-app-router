import React, { ReactNode } from 'react';

type AboutLayoutProps = {
	children: ReactNode;
};

export const metadata = {
	title: 'About us - Foodies App',
	description: 'Your first NextJS app!',
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
	return <>{children}</>;
};

export default AboutLayout;

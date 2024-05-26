import Link from 'next/link';
import React from 'react';

const Blogs = () => {
	return (
		<div>
			this is a blogs page
			<Link href='blogs/new'>new blog</Link>
		</div>
	);
};

export default Blogs;

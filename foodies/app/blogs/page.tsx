import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <>
            <h1>this is a blog list page</h1>
            <p>
                <Link href='/blogs/post-1'>Blog 1</Link>
            </p>
            <p>
                <Link href='/blogs/post-2'>Blog 2</Link>
            </p>
        </>
    );
};

export default BlogsPage;

import React from 'react';

const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <h1>This is a Blog single page</h1>
            <p>{params.slug}</p>
        </>
    );
};

export default BlogDetailsPage;

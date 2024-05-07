import React, { ReactNode } from 'react';

const NewsDetailsLayout = ({ children, modal }: { children: ReactNode; modal: ReactNode }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default NewsDetailsLayout;

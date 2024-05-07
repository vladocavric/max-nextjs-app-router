'use client';
import React from 'react';

const ErrorFiltersPage = ({ error }: { error: any }) => {
    return (
        <div id='error'>
            <h2>An error occurred!</h2>
            <p>Invalid path.</p>
            {error.message}
        </div>
    );
};

export default ErrorFiltersPage;

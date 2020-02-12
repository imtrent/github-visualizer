import React, { useEffect } from 'react';
import Head from 'next/head';

const Profile = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#24292E';
    });
    return (
        <div>
            <Head>
                <title>Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>Profile</p>
            </div>
        </div>
    );
}

export default Profile;

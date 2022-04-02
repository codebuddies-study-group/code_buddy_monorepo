import React from 'react';
import Head from 'next/head';

const Header: React.FC = () => {
    return (<>
        <Head>
            <div id='head'>
                <h1>Code Budy</h1>

                <div className='searchbar'>
                    <span>[Search bar]</span>
                </div>

                <ul className='header-options'>
                    <li>Meetings</li>
                    <li>Forum</li>
                </ul>

                <div>
                    <span>[User Logo]</span>
                </div>
            </div>
        </Head>
    </>);
};

export default Header;
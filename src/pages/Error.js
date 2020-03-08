import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">
                        return Home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error;
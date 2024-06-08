import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CurrentTheme() {
    const [bannerUrl, setBannerUrl] = useState('');

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://api.studio1v1.com/trivia/home/')
            .then(response => {
                console.log('API response:', response.data); // Debug the response
                if (response.data && response.data.banner_url) {
                    setBannerUrl(response.data.banner_url); // Access the banner_url
                } else {
                    console.error('API response does not contain banner_url:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="theme-section">
            <p>Current theme</p>
            <div className="current-theme">
                <img src={bannerUrl} width="100%" alt="Theme Image" />
            </div>
        </div>
    );
}

export default CurrentTheme;

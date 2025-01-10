import React from 'react';
import Header from '../components/Header';

const GuestLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            {/* <footer>
                <p>&copy; 2023 Netflix App</p>
            </footer> */}
        </div>
    );
};

export default GuestLayout;
import React from 'react';

function Footer() {
    return (
        <footer className="mt-auto py-3" style={{backgroundColor: '#2c3e50'}}>
            <div className="container">
                <div className="text-center text-white">
                    <p className="mb-0">
                        <i className="bi bi-c-circle me-1"></i>
                        {new Date().getFullYear()} Listify Task Manager. All rights reserved.
                    </p>
                    <small className="text-light opacity-75">
                        Built with React & Bootstrap
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
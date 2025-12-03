import React from 'react';

function Footer(props) {
    let footerstyle = {
        position: 'absolute',
        top: "94vh",
        width: '100%'
    }
    return (
        <div className="">
                <div className="bg-dark text-light pb-1 pt-3" style={footerstyle}>
                    <p className="text-center">
                        Copyright &copy; All rights reserved
                    </p>
                </div>
        </div>
    );
}

export default Footer;
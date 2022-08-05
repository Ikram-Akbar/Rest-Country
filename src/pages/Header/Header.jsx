import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to={"/countries"}>Countries</CustomLink>
                    <CustomLink to={"/blog"}>Blog</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
              </ul>
            </nav>
        </div>
    );
};

export default Header;
import * as React from 'react';
import { Link, Nav } from './bottomTabsStyles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

const SIZE = '32px';

export default function NavBar() {
    return (
        <Nav>
            <Link to="/" exact>
                <MdHome size={SIZE} />
            </Link>
            <Link to="/favorites" exact>
                <MdFavoriteBorder size={SIZE} />
            </Link>
            <Link to="/profile" exact>
                <MdPersonOutline size={SIZE} />
            </Link>
        </Nav>
    );
}

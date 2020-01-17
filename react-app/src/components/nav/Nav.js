

import React from "react";
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import shopIcon from './shop.svg';
import {
    Link
} from "react-router-dom";
import './styles.scss';

export default function Nav() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <div className="logo-shop">
                    <Link to="/"><img src="/assets/img/logo.png" /></Link>
                </div>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
                <div className="fb-shop">
                    <img aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} src={shopIcon} />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Facebook</MenuItem>
                        <MenuItem onClick={handleClose}>Shopee</MenuItem>
                    </Menu>
                </div>
            </Grid>
        </Grid>
    );
}

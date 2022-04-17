import { useState, MouseEvent, ReactElement, cloneElement } from "react";
import { Link, useNavigate } from "react-router-dom";

import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import MenuIcon from '@mui/icons-material/Menu';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarIcon from '@mui/icons-material/Star';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import BrazilFlag from './../../assets/images/brazil-flag.svg';
import USAFlag from './../../assets/images/usa-flag.svg';

import './styles.scss';

type PagesProps = {
    icon: any;
    link: string;
    name: string;
}[];

const pages = [
    {
        icon: <HomeOutlinedIcon />,
        link: '/',
        name: 'Home',
    },
    {
        icon: <PersonOutlineOutlinedIcon />,
        link: 'about',
        name: 'About',
    },
    {
        icon: <AccountTreeOutlinedIcon />,
        link: 'projects',
        name: 'Projects',
    },
    {
        icon: <ArticleOutlinedIcon />,
        link: 'resume',
        name: 'Resume',
    }
] as PagesProps;

interface Props {
    window?: () => Window;
    children: ReactElement;
}
  
function ElevationScroll(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return cloneElement(children, {
        style: trigger ? {
            transition: 'all .3s ease-out 0s',
            backdropFilter: 'blur(15px)',
            backgroundColor: '#1b1a2ea9',
            boxShadow: '0 10px 10px 0 rgba(9,5,29,.171)',
        } : {},
        elevation: trigger ? 4 : 0,
    });
}

export function Navbar (props: Props) {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const handleClickOnNavItem = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(null);
        navigate(pages[event.currentTarget.tabIndex].link);
    };

    return (
        <ElevationScroll {...props}>
            <AppBar
                id="navbar"
            >
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Link to='/'>
                            <img src="https://github.com/vWernay.png" className="logo" alt="vWernay Github Avatar" />
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="navigation bar"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', sm: 'none' }
                                }}
                            >
                                {pages.map((page, key) => (
                                    <MenuItem tabIndex={key} key={key} onClick={handleClickOnNavItem}>
                                        {page.icon}
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button
                                        href="https://github.com/vWernay/Portfolio"
                                        target="_blank"
                                        className="fork-btn"
                                        style={{ width: "100%" }}
                                    >
                                        <ForkRightIcon style={{ fontSize: "1.2em" }} />{" "}
                                        <StarIcon style={{ fontSize: "1.1em" }} />
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: { xs: 'flex-end' } }}>
                            {pages.map((page, key) => (
                                <Button
                                    tabIndex={key}
                                    key={key}
                                    onClick={handleClickOnNavItem}
                                    color="secondary"
                                    sx={{ my: 2, color: 'white', display: 'block', marginLeft: '1.5rem' }}
                                >
                                    {page.icon}
                                    {page.name}
                                </Button>
                            ))}
                            <Button
                                key={pages.length+1}
                                href="https://github.com/vWernay/Portfolio"
                                target="_blank"
                                className="fork-btn"
                            >
                                <ForkRightIcon style={{ fontSize: "1.2em" }} />{" "}
                                <StarIcon style={{ fontSize: "1.1em" }} />
                            </Button>
                            <img src={BrazilFlag} className="flagBtn" />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { makeStyles } from '@mui/styles';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,

    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: "#f3e5f5!important",
  },
}));
export default function MiniDrawer({ posts, colorPrimary, colorSecondary }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [postTitles, setPostTitles] = React.useState()
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    fetch("http://localhost:4000/api/articles")
      .then((res) => res.json())
      .then((data) => setPostTitles(data))
      .catch((err) => console.log(err));

  }, []);
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
  return (
    <Box sx={{
      display: 'flex'
    }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}
        sx={{
          backgroundColor: "#ff6f60"
        }}>
        <Toolbar >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "#fff",
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="white" variant="h6" noWrap component="div">
            Menu of recipies blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
      // classes={{ paper: classes.drawerPaper }}
      >
        <DrawerHeader  >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* <ListPosts posts={posts} id={"top"} /> */}
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <Link className="menu__anchor" to="/" >
            <Button sx={{
              width: "100%",
              padding: 0
            }} variant="text" color="secondary" >
              <ListItem key="home" color="secondary">
                <ListItemIcon>
                  <HomeOutlinedIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Button>
          </Link>
          {postTitles && postTitles.map((post) => {
            if (post.headline) {
              console.log(post.headline.split(" "))

            }
            return (
              <HashLink className="menu__anchor" smooth key={post.id} to={`#${post.id}`} scroll={el => scrollWithOffset(el)}>
                <Button sx={{
                  width: "100%",
                  padding: 0
                }} variant="text" color="secondary" >
                  <ListItem >

                    <ListItemIcon >
                      <ReceiptOutlinedIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={post.title} />

                  </ListItem>
                </Button>

              </HashLink>
            )
          })}
        </List>
      </Drawer>
    </Box>
  );
}

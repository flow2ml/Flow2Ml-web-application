import React, {useState} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import styles from './template.module.css' 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Hidden from '@material-ui/core/Hidden';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import { useRouter } from 'next/router';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft:"20px",
      marginTop: '5px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    list: {
      width: 300,
      padding:"5%",
      marginTop: "15px",
      "& div":{
        display: 'flex',
        justifyContent: 'around',
        alignItems: 'center',
        width:"90%",
        marginLeft:"10px",
        fontFamily: "Dosis, sans-serif",
      },
    },
    sideBarLogo: {
      width:"50px",
      height:"50px",
      borderRadius:"10px",
      marginTop:"-10px",
      maringRight:"10px",
    },
    fullList: {
      width: 'auto',
    },
    sideNavName:{
      flexGrow: 4,
    },
    hoverATags:{
      '&:hover': {
        textDecoration: "none",
        color:"fff",
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'rgba(241, 243, 244, 0.6)',
      '&:hover': {
        backgroundColor: "rgb(231, 233, 234, 0.8)",
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      display:'flex',
      alignItems: 'center',
    },
    topBarHeadings: {
      display: 'flex',
      justifyContent: 'around',
      alignItems: 'center',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      fontFamily: "Dosis, sans-serif",
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Navbar() {

  const router = useRouter()
  const goToDocs = () =>{
      router.push("/docs/applyFilters");
  }

  const goToExamples = () =>{
    router.push("/examples/catsVsDogs");
  }

  const goToInstall = () =>{
    router.push("/installation/pip");
  }

    const classes = useStyles();

    const [state, setState] = React.useState({
      left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({[anchor]: open });
    };

    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >

          <div>
            <Avatar alt="Flow2ML" src="/logo.png" style={{'width':'20%'}} variant="round"/>
            <h5 className={classes.title}>Flow2Ml</h5>
            <CloseRoundedIcon fontSize='large'/>
          </div>
          <Divider />
          <br />

          <div onClick={() => goToInstall()}>
            <h5 className={classes.sideNavName}>Install</h5>
            <GetAppRoundedIcon fontSize='medium'/>
          </div>
          <Divider />
          <br />

          <div onClick={() => goToDocs()}>
            <h5 className={classes.sideNavName}>Documentation</h5>
            <EmojiObjectsRoundedIcon fontSize='medium'/>
          </div>
          <Divider />
          <br />

          <div onClick={() => goToExamples()}>
            <h5 className={classes.sideNavName}>Examples</h5>
            <EmojiObjectsRoundedIcon fontSize='medium'/>
          </div>
          <Divider />
          <br />

          <div>
            <h5 className={classes.sideNavName}>Github</h5>
            <GitHubIcon fontSize='medium'/>
          </div>
          <Divider />
          <br />
      </div>
    );

  return (
    <div className={styles.topNavBar}>
        <AppBar 
          position="static"
          color="transparent"
        >
            <Toolbar>
                  <Grid 
                    container 
                    justify="space-between"
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                      <Grid item sm={1} xs={2} md={1}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)} >
                          <MenuIcon className={classes.menuIconButton}/>
                        </IconButton>
                        <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                              {list("left")}
                        </Drawer>
                      </Grid>
                
                      <Grid item sm={2} xs={4} md={1}>
                        <div className={styles.navbarHeading}>
                        <Avatar alt="Flow2ML" src="/logo.png" variant="round"/>
                          <h5 className={classes.title}>Flow<span className={styles.highlightNumber}>2</span>ML</h5>
                        </div>
                      </Grid>
                      <Grid item sm={1}></Grid>

                      <Hidden only={['sm', 'xs']}>
                        <Grid item sm={4} md={5} className={classes.topBarHeadings}>
                            <a onClick={() => goToInstall()}  className={styles.NavLinks}>Installation</a>
                            <a onClick={() => goToDocs()} className={styles.NavLinks}>Documentation</a>
                            <a onClick={() => goToExamples()}  className={styles.NavLinks}>Examples</a>
                        </Grid>
                      </Hidden>

                      <Grid item sm={3} xs={4} md={3}>
                        <div className={classes.search}>
                          <div className={classes.searchIcon}>
                            <SearchIcon />
                          </div>
                          <InputBase
                            placeholder="Search…"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                          />
                        </div>
                      </Grid>
                      
                      <Hidden only={['xs', 'sm']}>
                        <Grid item sm={1} md={1}>
                            <Button className={classes.hoverATags} style={{"outline":"0"}} color="primary" variant="contained" href="https://github.com/flow2ml">Github</Button>
                        </Grid>
                      </Hidden>

                      <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item xs={1}>
                            <a href="https://github.com/flow2ml"><GitHubIcon fontSize='medium'/></a>
                        </Grid>
                      </Hidden>
                    </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

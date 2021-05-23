import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import styles from './docs.module.css'
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
import GitHubIcon from '@material-ui/icons/GitHub';
import Hidden from '@material-ui/core/Hidden';
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
      marginLeft:"10px",
    },
    list: {
      width: 300,
      padding:"5%",
      marginTop: "15px",
      "& div":{
        width:"90%",
        marginLeft:"10px",
        fontFamily: "Dosis, sans-serif",
      },
    },
    fullList: {
      width: 'auto',
    },
    HeaderSideNavDocs: {
        display: 'flex',
        justifyContent: 'around',
        alignItems: 'center',
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

export default function DocsNavbar() {

  const router = useRouter()
  const goToDocs = () =>{
      router.push("/docs/get_started");
  }

  // const goToExamples = () =>{
  //   router.push("/docs/examples");
  // }

  // const goToInstall = () =>{
  //   router.push("/docs/install");
  // }

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
          <div className={classes.HeaderSideNavDocs}>
          <Avatar alt="Remy Sharp" src="/logo.png" />
            <h5 className={classes.title}>Flow2Ml</h5>
            <CloseRoundedIcon fontSize='large'/>
          </div>
          <Divider />
          <br />

          <div className={classes.install}>
            <h5>Installation</h5>
            <div>
                <h6>pip</h6>
                <h6>Docker</h6>
            </div>
          </div>
          
          <Divider />
          <br />
          
          <div className={classes.docs}>
            <h5>Documentation</h5>
            {/* For loop to get all the functions available as part of flow2ml. */}
            {/* Attaching sample functions. */}
            <div>
                <h6>applyFilters</h6>
                <h6>applyAugumentation</h6>
                <h6>Results</h6>
            </div>
          </div>

          <Divider />
          <br />

          <div className={classes.examples}>
            <h5>Examples</h5>
            <div>
                <h6>cats Vs Dogs</h6>
                <h6>Horses vs Humans</h6>
            </div>
          </div>
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
                      <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item sm={1} xs={2} md={1}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)} >
                            <MenuIcon className={classes.menuIconButton}/>
                            </IconButton>
                            <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                                {list("left")}
                            </Drawer>
                        </Grid>
                      </Hidden>
                
                      <Grid item sm={2} xs={4} md={1}>
                        <div className={styles.logoBlock}>
                          <Avatar alt="Remy Sharp" src="/logo.png" />
                          <h5 className={classes.title}>Flow<span className={styles.highlightNumber}>2</span>ML</h5>
                        </div>
                      </Grid>
                      <Grid item sm={1}></Grid>

                      <Hidden only={['sm', 'xs']}>
                        <Grid item sm={4} md={5}>
                            <a href="#installation" className={styles.NavLinks}>Installation</a>
                            <a onClick={() => goToDocs()} className={styles.NavLinks}>Documentation</a>
                            <a href="#" className={styles.NavLinks}>Examples</a>
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

                      <Hidden only='xs'>
                        <Grid item sm={1} md={1}>
                            <Button className={classes.hoverATags} style={{"outline":"0"}} color="primary" variant="contained" href="https://github.com/flow2ml">Github</Button>
                        </Grid>
                      </Hidden>

                      <Hidden only={['sm', 'md', 'lg', 'xl']}>
                        <Grid item sm={1}>
                            <a href="https://github.com/flow2ml"><GitHubIcon fontSize='medium'/></a>
                        </Grid>
                      </Hidden>
                    </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

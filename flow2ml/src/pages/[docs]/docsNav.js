import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import styles from './docs.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, BottomNavigation, Grid } from '@material-ui/core';
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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    list: {
      width: 300,
      padding:"5%",
      marginTop: "15px",
      "& div":{
        width:"90%",
        fontFamily: `var(--font-family)`,
        marginBottom: '10px',
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
    avatarLarge: {
      width: '26%',
      height: theme.spacing(7),
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
      fontFamily: `var(--font-family)`,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    AccordionBar:{
      boxShadow: 'none',
    },
    installationList:{
      display: 'block'
    }
  }));

  const availableFunctionsList = [
    "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', 
  ];

export default function DocsNavbar() {

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
    const [expandedPanel, setExpandedPanel] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        if(expandedPanel == false ){
          return;
        }else{
          console.log("hello")
        }
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
            <Avatar alt="Flow2ML" src="/logo.png" style={{'width':'20%'}} variant="round"/>
            <Link href="/"><h5 className={styles.title}>Flow2Ml</h5></Link>
            <CloseRoundedIcon fontSize='large'/>
          </div>
          <br />

        <Accordion className={classes.AccordionBar} onChange={() => {setExpandedPanel(true); console.log(expandedPanel)}}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Installation</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
              <div><Link href='/installation/pip'><Button color="primary" className={classes.button}>Pip</Button></Link></div>
              <div><Link href='/installation/docker'><Button color="primary" className={classes.button}>Docker</Button></Link></div>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.AccordionBar}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Documentation</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
            {availableFunctionsList.map((func) => (
                <div key={func}><Link href={'/docs/'+func}><Button color="primary" className={classes.button}>{func}</Button></Link></div>
            ))}
          </AccordionDetails>
        </Accordion>
        
        <Accordion className={classes.AccordionBar}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Examples</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
              <div><Link href='/docs/examples'><Button color="primary" className={classes.button}>Cats Vs Dogs</Button></Link></div>
              <div><Link href='/docs/examples'><Button color="primary" className={classes.button}>Horses Vs Humans</Button></Link></div>
          </AccordionDetails>
        </Accordion>
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
                          <Avatar alt="Flow2ML" src="/logo.png" />
                          <h5 className={styles.title}>Flow<span className={styles.highlightNumber}>2</span>ML</h5>
                        </div>
                      </Grid>
                      <Grid item sm={1}></Grid>

                      <Hidden only={['sm', 'xs']}>
                        <Grid item sm={5} md={6}>
                            <a onClick={() => goToInstall()}  className={styles.NavLinks}>Installation</a>
                            <a onClick={() => goToDocs()} className={styles.NavLinks}>Documentation</a>
                            <a onClick={() => goToExamples()}  className={styles.NavLinks}>Examples</a>
                        </Grid>
                      </Hidden>

                      <Hidden only='xs'>
                        <Grid item sm={5} xs={4} md={2}>
                          <div className={classes.search}>
                            <div className={classes.searchIcon}>
                              <SearchIcon />
                            </div>
                            <InputBase
                              placeholder="Search Docs"
                              classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                              }}
                              inputProps={{ 'aria-label': 'search' }}
                            />
                          </div>
                        </Grid>
                      </Hidden>

                      <Hidden only={['sm', 'xs']}>
                        <Grid item sm={1} md={1}>
                          <a href="https://github.com/flow2ml"><GitHubIcon /></a>
                        </Grid>
                      </Hidden>

                      <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item sm={1}>
                            <a href="https://github.com/flow2ml"><GitHubIcon /></a>
                        </Grid>
                      </Hidden>
                    </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

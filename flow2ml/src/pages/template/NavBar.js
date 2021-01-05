import styles from './template.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar() {
    const classes = useStyles();
  return (
    <div className={styles.topNavBar}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Flow<span className={styles.highlightNumber}>2</span>Ml
                </Typography>
                <div className="d-flex justify-content-around">
                    <a href="#installation" className={styles.NavLinks}>Installation</a>
                </div>
                <Button href="https://github.com/flow2ml" style={{"outline":"0"}} color="secondary" variant="contained">Github</Button>
            </Toolbar>
        </AppBar>


    </div>
  )
}

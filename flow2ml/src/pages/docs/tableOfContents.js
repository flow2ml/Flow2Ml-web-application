import styles from './docs.module.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    listGrp:{
        borderLeft: '8px solid #70a3e0',
    }
}));

export default function TOC() {
    const classes = useStyles();
  return (
    <div className={styles.toc}>
        <h5>This Page Contains</h5>
        <List component="nav" className={classes.listGrp} aria-label="secondary mailbox folders">
            <ListItemLink className={classes.listItem} href="#simple-list">
                <ListItemText primary="Code Snippet" />
            </ListItemLink>
            <ListItemLink className={classes.listItem} href="#simple-list">
                <ListItemText primary="Function Description" />
            </ListItemLink>
            <ListItemLink href="#simple-list">
                <ListItemText primary="Note" />
            </ListItemLink>
            <ListItemLink href="#simple-list">
                <ListItemText primary="Args" />
            </ListItemLink>
      </List>
    </div>
  )
}
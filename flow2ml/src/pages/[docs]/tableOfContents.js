import styles from './docs.module.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    TOCContentsPage:{
        borderLeft: '6px solid #70a3e0!important',
    }
}));

export default function TOC() {
    const classes = useStyles();
  return (
    <div className={styles.toc}>
        <h5>This Page Contains</h5>
        <List component="nav" className={classes.TOCContentsPage} aria-label="secondary mailbox folders">
            <ListItemLink className={classes.listItem} href="#codeSnippet">
                <ListItemText primary="Code Snippet" />
            </ListItemLink>
            <ListItemLink className={classes.listItem} href="#funcDisc">
                <ListItemText primary="Function Description" />
            </ListItemLink>
            <ListItemLink href="#funcNote">
                <ListItemText primary="Note" />
            </ListItemLink>
            <ListItemLink href="#funcArgs">
                <ListItemText primary="Args" />
            </ListItemLink>
      </List>
    </div>
  )
}
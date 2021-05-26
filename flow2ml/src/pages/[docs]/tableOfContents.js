import styles from './docs.module.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


export default function TOC() {
  return (
    <div className={styles.toc}>
        <h5>This Page Contains</h5>
        <List component="nav" style={{"borderLeft":"6px solid #70a3e0!important"}} aria-label="secondary mailbox folders">
            <ListItemLink href="#codeSnippet">
                <ListItemText primary="Code Snippet" />
            </ListItemLink>
            <ListItemLink href="#funcDisc">
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
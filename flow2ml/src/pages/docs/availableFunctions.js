import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from './docs.module.css'

const useStyles = makeStyles((theme) => ({
  button: {
    color:`var(--documentation-text-color-inactive)`,
    textTransform: 'none',
    letterSpacing: theme.spacing(0.2),
    '&:focus':{
      outline:'none',
      color:`var(--documentation-text-color-active)`,
      backgroundColor:'rgba(243,246,255,1)',
    }
  },
}));

const availableFunctionsList = [
  "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', "applyFilters", 'applyAugumentation', 'Results', 
];

export default function AvailableFunctions({returnSelectedFunction}) {
  const classes = useStyles();
  return (
    <div className={styles.sideAvailableFunc}>
        <h5>Documentation</h5>
        <Divider /><br />
        <div>
          {availableFunctionsList.map((func) => (
              <div><Button color="primary"  key={func} className={classes.button} onClick={() => returnSelectedFunction(func)}>{func}</Button></div>
          ))}
        </div>
    </div>
  )
}

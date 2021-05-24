import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import styles from './docs.module.css'

const useStyles = makeStyles((theme) => ({
  button: {
    color:`var(--documentation-text-color-inactive)`,
    textTransform: 'none',
    letterSpacing: theme.spacing(0.2),
    '&:focus':{
      outline:'none',
      color:`var(--documentation-text-color-active)`,
    }
  },
  AccordionBar:{
    boxShadow: 'none!important',
  },
  installationList:{
    display: 'block'
  }
}));

const availableFunctionsList = [
  "applyFilters", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', "applyFilters1", 'applyAugumentation', 'Results', 
];

export default function AvailableFunctions() {
  const router = useRouter()
  const classes = useStyles();

  var urlParams = router.asPath.split("/")
  urlParams.shift();
  var currentPath = urlParams[0];

  return (
    <div className={styles.sideAvailableFunc}>

        <Accordion className={classes.AccordionBar} defaultExpanded={ currentPath === "installation" ? (true) : (false)}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Installation</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
              <div style={urlParams[1] == "pip" ? {'color':`var(--documentation-text-color-active)`, 'backgroundColor': 'rgba(213,216,215,1)', 'width': '187%', 'borderRadius': '5px'} : {}}><Link href='/installation/pip'><Button color="primary" className={classes.button}>Pip</Button></Link></div>
              <div style={urlParams[1] == "docker" ? {'color':`var(--documentation-text-color-active)`, 'backgroundColor': 'rgba(213,216,215,1)', 'width': '187%', 'borderRadius': '5px'} : {}}><Link href='/installation/docker'><Button color="primary" className={classes.button}>Docker</Button></Link></div>
          </AccordionDetails>
        </Accordion>
        
        <Accordion className={classes.AccordionBar} defaultExpanded={ currentPath == "docs" ? (true) : (false)}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Documentation</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
            {availableFunctionsList.map((func) => (
                <div style={urlParams[1] == func ? {'color':`var(--documentation-text-color-active)`, 'backgroundColor': 'rgba(213,216,215,1)', 'width': '187%', 'borderRadius': '5px'} : {}}><Link href={'/docs/'+func}><Button color="primary" key={func} className={classes.button}>{func}</Button></Link></div>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.AccordionBar} defaultExpanded={ currentPath == "examples" ? (true) : (false)}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Examples</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
              <div style={urlParams[1] == "catsVsDogs" ? {'color':`var(--documentation-text-color-active)`, 'backgroundColor': 'rgba(213,216,215,1)', 'width': '187%', 'borderRadius': '5px'} : {}}><Link href='/examples/catsVsDogs'><Button color="primary" className={classes.button}>Cats Vs Dogs</Button></Link></div>
              <div style={urlParams[1] == "HorsesVsHumans" ? {'color':`var(--documentation-text-color-active)`, 'backgroundColor': 'rgba(213,216,215,1)', 'width': '187%', 'borderRadius': '5px'} : {}}><Link href='/examples/HorsesVsHumans'><Button color="primary" className={classes.button}>Horses Vs Humans</Button></Link></div>
          </AccordionDetails>
        </Accordion>

    </div>
  )
}

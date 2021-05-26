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
    width:"120%",
    '&:focus':{
      outline:'none',
      color:`var(--documentation-text-color-active)`,
    },
    '& span':{
      textAlign: 'left',
    },
    justifyContent: "flex-start"
  },
  AccordionBar:{
    boxShadow: 'none!important',
  },
  installationList:{
    display: 'block'
  }
}));

export default function AvailableFunctions({install_side_bar_data, docs_side_bar_data}) {
  
  const router = useRouter()
  const classes = useStyles();

  var urlParams = router.asPath.split("/")
  urlParams.shift();
  var currentPath = urlParams[0];

  return (
    <div className={styles.sideAvailableFunc}>
        {install_side_bar_data.is_data_found ? (
          <Accordion className={classes.AccordionBar} defaultExpanded={ currentPath === "installation" ? (true) : (false)}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Installation</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
              {install_side_bar_data.page_data.map((installation_Method) => (
                <div key={installation_Method.method} style={urlParams[1] == installation_Method.method ? {'color':`var(--documentation-text-color-active)`, "width": "110%", 'backgroundColor': 'rgba(213,216,215,1)', 'borderRadius': '5px'} : {}}><Link href={'/installation/'+installation_Method.method}><Button color="primary" className={classes.button}>{installation_Method.method}</Button></Link></div>
                ))}
          </AccordionDetails>
        </Accordion>
        ) : (null)}
        
        {docs_side_bar_data.is_data_found ? (
        <Accordion className={classes.AccordionBar} defaultExpanded={ currentPath == "docs" ? (true) : (false)}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Documentation</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.installationList}>
              {docs_side_bar_data.page_data.map((func_Method) => (
                <div key={func_Method.method} style={urlParams[1] == func_Method.method ? {'color':`var(--documentation-text-color-active)`, 'backgroundColor': 'rgba(213,216,215,1)', 'width': '187%', 'borderRadius': '5px'} : {}}><Link href={'/docs/'+func_Method.method}><Button color="primary" className={classes.button}>{func_Method.method}</Button></Link></div>
              ))}
          </AccordionDetails>
        </Accordion>
        ): (null) }

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

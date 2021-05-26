import Divider from '@material-ui/core/Divider';
import React, { useState } from 'react';
import styles from './docs.module.css'
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { prism, materialOceanic} from "react-syntax-highlighter/dist/cjs/styles/prism"
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgba(230,231,235,0.7)',
    color: 'rgba(115,120,148,255)',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'transparent',
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: 'none',
    backgroundColor: '#fff',
    fontSize: theme.spacing(2),
    '&:focus':{
      outline:'none',
      backgroundColor:'rgba(243,246,255,1)',
    },
  },
  Roboto:{
    fontFamily: '`var(--font-family-roboto)`',
  },
  table: {
    minWidth: 700,
    border:"2px solid rgba(237,239,245,255)"
  },
  textBackgroundTable:{
    border: '2px solid rgba(222,230,255,255)',
    padding: "4px",
    borderRadius: '5px',
    backgroundColor:'rgba(243,246,255,255)',
    color:'rgba(72,97,173,255)',
    fontSize: '17px',
    paddingRight: '12px',
    paddingLeft: '12px',
  },
  MuiTableCellRoot: {
    fontFamily: `var(--font-family)`
  },
  sideNoteHeading:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '10%'
  },
}));

export default function Content({page_content}) {

  const page_value = page_content.page_data;

  const router = useRouter();
  const classes = useStyles();
  const [mode, setMode] = useState('dark');
  
  var urlParams = router.asPath.split("/")
  urlParams.shift();
  var currentPath = urlParams.slice(-1);
  urlParams.pop();
  
  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const toggleCodeMode = () => {
    if(mode === "light"){
      setMode("dark")
    }else{
      setMode("light")
    }
  }

  function createData(parameterName, Type, Description) {
    return { parameterName, Type, Description };
  }
  
  if(page_value.Args.is_present){
    var rows = [];
    page_value.Args.rows.map((row) => {
      var args_value = createData(row.Parameter, row.Type, row.Description)
      rows.push(args_value)
    })
  }

  const [open, setOpen] = React.useState(false);

  const handleCopyClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={styles.mainContentBox}>

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>Flow2ML</Link>
          {urlParams.map((path) => (
            <Link color="inherit" key={path} href="/" onClick={handleClick}>{path}</Link>
          ))}
          <Typography color="textPrimary">{currentPath}</Typography>
        </Breadcrumbs> <br />

        <h1 className={styles.mainHeadding}>{currentPath}</h1><br />
        {page_content.is_data_found ? (<p className={styles.fontWeight400}>{page_value.sideHeadding}</p>) : (null)}
        <Divider variant="fullWidth"/>
        <br />

        {page_value.view_src_on_gitHub.is_present ? (
            <Button
              variant="contained"
              size="large"
              className={classes.button}
              startIcon={<GitHubIcon />}
              href={page_value.view_src_on_gitHub.link}
            >
              View source on GitHub
            </Button>
        ) : (null)}
        
        <div className={styles.codeArea} id="codeSnippet">
          <SyntaxHighlighter
            language={page_value.sample_code.language}
            style={mode=="light" ? prism : materialOceanic}
            wrapLines={true}
            className={styles.codeBlock}
          >
            {page_value.sample_code.code}
          </SyntaxHighlighter>
          <Brightness6OutlinedIcon className={styles.DarkLightModeButton} onClick={() => toggleCodeMode()} style={mode === "dark" ? {'color':'rgba(255,255,255,0.8)'} : {} } fontSize='small' />
          <FileCopyOutlinedIcon className={styles.CopyButton}  onClick={()=>{navigator.clipboard.writeText(page_value.sample_code.code);handleCopyClick()}} style={mode === "dark" ? {'color':'rgba(255,255,255,0.8)'} : {} } fontSize='small' />

          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Alert onClose={handleClose} severity="success">
              Copied to clipboard
            </Alert>
          </Snackbar>
        </div>
        <br />
        <Divider />
        <br />
        
        {page_value.function_description.is_present ? (
        <div className={styles.fontWeight400} id="funcDisc">
          <h5><strong>Function Description</strong></h5>
          <p>{page_value.function_description.data}</p><br />
        </div>): (null)}
            
        {page_value.note.is_present ? (
        <div className={styles.functionNote} id="funcNote">
          <div className={styles.blueNoteFunc}>
            <div className={classes.sideNoteHeading}>
              <StarIcon />
              <h6><strong>Note</strong></h6>
            </div>
              <p className={styles.fontWeight400}>{page_value.note.data}</p>
          </div><br />
          <Divider />
          <br />
        </div>):(null)}

        {page_value.Args.is_present ? (
          <div className={styles.parametersToFunction} id="funcArgs">
            <h5><strong>Args</strong></h5><br />
            <div className={styles.table}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Parameter</StyledTableCell>
                      <StyledTableCell>Type</StyledTableCell>
                      <StyledTableCell>Description</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell>
                          <span className={classes.textBackgroundTable}>{row.parameterName}</span>
                        </StyledTableCell>
                        <StyledTableCell>{row.Type}</StyledTableCell>
                        <StyledTableCell>{row.Description}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>) : (null)}
    </div>
  )
}
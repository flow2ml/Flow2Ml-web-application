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
    backgroundColor: 'rgba(250,251,255,255)',
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

function createData(parameterName, Type, Description) {
  return { parameterName, Type, Description };
}

const rows = [
  createData('filters', "List", "python list containing various filters to be applied to the image data.")
];

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
  sideNote:{
    backgroundColor: 'rgba(112, 163, 224, 0.4)',
    borderRadius: '11px',
    padding: '15px',
    color: '#01579b',
    '& p':{
      marginTop: '10px',
    }
  }
}));

export default function Content({selectedFunction}) {
  const router = useRouter();
  const classes = useStyles();
  const [mode, setMode] = useState('dark');
  
  var urlParams = router.pathname.split("/");
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
            <Link color="inherit" href="/" onClick={handleClick}>{path}</Link>
          ))}
          <Typography color="textPrimary">{currentPath}</Typography>
        </Breadcrumbs> <br />

        <h1>{selectedFunction}</h1><br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <Divider variant="fullWidth"/>
        <br />
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          startIcon={<GitHubIcon />}
        >
          View source on GitHub
        </Button>

        <div className={styles.codeArea}>
          <SyntaxHighlighter
            language="python"
            style={mode=="light" ? prism : materialOceanic}
            wrapLines={true}
            className={styles.codeBlock}
          >
            {`import flow from flow2ml\nflow.getDataset(data, "hello")\nflow.applyFilters(['sobelx', 'sobely'])\noperations = {'flip': 'horizontal', 'rotate': 90, 'shear': {'x_axis': 5, 'y_axis': 15}, 'crop': [50, 100, 50, 100], 'scale': 0.1, 'zoom': 2, 'Hist_Equal':False, 'greyscale': True, 'CLAHE':False, 'invert':False, 'erode':False, 'dilate':False, 'open':False, 'close':False,'threshold':{'type':'adaptive','thresh_val':0},'color-space':{'input':'BGR','output':'BGR'}}`}
          </SyntaxHighlighter>
          <Brightness6OutlinedIcon className={styles.DarkLightModeButton} onClick={() => toggleCodeMode()} fontSize='small' />
          <FileCopyOutlinedIcon className={styles.CopyButton}  onClick={()=>{navigator.clipboard.writeText("rey po ra rey po ra");handleCopyClick()}} fontSize='small' />

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

        <div className={styles.Functiondescription}>
          <h5><strong>Function Description</strong></h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic.</p>
        </div>

        <div className={styles.functionNote}>
          <div className={classes.sideNote}>
            <div className={classes.sideNoteHeading}>
              <StarIcon />
              <h6><strong>Note</strong></h6>
            </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, 
                but also the leap into electronic.</p>
          </div>
        </div>
        <br />
        <Divider />
        <br />

        <div className={styles.parametersToFunction}>
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
        </div>
    </div>
  )
}

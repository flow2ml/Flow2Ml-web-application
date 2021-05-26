import Head from 'next/head'
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import styles from '../../styles/Home.module.css'
import DocsNavbar from "./docsNav"
import AvailableFunctions from "./availableFunctions"
import Content from "./mainContent"
import TOC from './tableOfContents'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loading: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function Docs({page_value, install_side_bar_data, docs_side_bar_data}) {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Flow2ML</title>
        <link rel="icon" href="icon_path" type="/logo.png" />
      </Head>

      <header className={styles.header}>
          <DocsNavbar />
      </header><br />

      <main>
        <Grid 
          container 
          direction="row"
        >

          <Hidden only={['xs', 'sm']}>
            <Grid item sm={2} xs={2} md={2} xl={2}>
            {(install_side_bar_data != null && install_side_bar_data != undefined) && (install_side_bar_data.is_data_found) ? (<AvailableFunctions install_side_bar_data={install_side_bar_data} docs_side_bar_data={docs_side_bar_data} />) : (<div className={classes.loading}><LinearProgress /></div>)}
            </Grid>
          </Hidden>
          
          <Grid item sm={1} xs={1} md={1} xl={1}></Grid>

          <Grid item sm={10} xs={10} md={7} xl={6}>
              {(page_value != null && page_value != undefined) && (page_value.is_data_found) ? (<Content page_content={page_value}/>) : (<div className={classes.loading}><LinearProgress color="secondary" /></div>)}
          </Grid>
          
          <Hidden only='xs'>
            <Grid xl={1}></Grid>
          </Hidden>

          <Grid item sm={6} xs={10} md={2} xl={2}>
              <TOC />
          </Grid>

          <Hidden only='xs'>
            <Grid item xs={1}></Grid>
          </Hidden>
        </Grid>
      </main>

      <footer className={styles.footer}>
          Copyright (c) 2021 flow2ml
      </footer>
    </div>
  )
}


export const getStaticProps = async (context) => {
  
  // Data For Displaying Available Functions
  const install_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },body: JSON.stringify({type: "installation"})
  }

  const docs_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },body: JSON.stringify({type: "docs"})
  }

  // const examples_options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },body: JSON.stringify({type: "examples"}) 
  // }

  var install_side_bar_res = await fetch("http://localhost:3000/api/availableFunctions_req/available_func",install_options);
  var install_side_bar_data = await install_side_bar_res.json();

  var docs_side_bar_res = await fetch("http://localhost:3000/api/availableFunctions_req/available_func",docs_options);
  var docs_side_bar_data = await docs_side_bar_res.json();

  // var examples_side_bar_res = await fetch("http://localhost:3000/api/availableFunctions_req/available_func",examples_options);
  // var examples_side_bar_data = await examples_side_bar_res.json();

  // Data For Displaying The Content
  const content_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },body: JSON.stringify({method:context.params.get_started}) 
    }

    var data = {};

  if(context.params.docs === "installation"){

    var res = await fetch("http://localhost:3000/api/install_req/install",content_options);
    data = await res.json();

  }else if(context.params.docs === "docs"){

    var res = await fetch("http://localhost:3000/api/docs_req/docs",content_options);
    data = await res.json();
  }


  return{
      props:{
          page_value: data,
          install_side_bar_data: install_side_bar_data,
          docs_side_bar_data: docs_side_bar_data
      },
  }
}

export const getStaticPaths = async () =>{
    
  // Need to add only for registered courses
  const paths = []

  return{
      paths,
      fallback:true
  }
}
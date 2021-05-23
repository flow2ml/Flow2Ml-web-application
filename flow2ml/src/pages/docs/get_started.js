import Head from 'next/head'
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import styles from '../../styles/Home.module.css'
import DocsNavbar from "./docsNav"
import AvailableFunctions from "./availableFunctions"
import Content from "./mainContent"
import TOC from './tableOfContents'

export default function Home() {
  const [selectedFunction, setSelectedFunction] = useState('');
  const returnSelectedFunction = (funcName) => {
    setSelectedFunction(funcName);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Flow2ML</title>
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
              <AvailableFunctions returnSelectedFunction={returnSelectedFunction}/>
            </Grid>
          </Hidden>
          
          <Grid item sm={1} xs={1} md={1} xl={1}></Grid>

          <Grid item sm={8} xs={12} md={7} xl={7}>
              <Content selectedFunction={selectedFunction}/>
          </Grid>


          <Grid item sm={7} xs={10} md={2} xl={2}>
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

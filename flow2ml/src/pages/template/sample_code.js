import styles from './template.module.css'

export default function SampleCode() {
  return (
    <div className={styles.installation} id="sampleCode">
        <div className="container">
            <h4>Write pre-Processing steps in minutes.</h4><br />
            <div className={styles.steps}>
                <span><span className={styles.green}># To be given input by the user.</span></span><br />
                <span>img_dimensions = (<span className={styles.green}>150</span>,<span className={styles.green}>150</span>)</span><br />
                <span>test_val_split = <span className={styles.green}>0.1</span></span><br /><br />
               <span><span className={styles.purple}>from</span> flow2ml <span className={styles.purple}>import</span> Flow</span><br />
               <span>flow = Flow(<span className={styles.brown}> 'dataset_dir' </span>, <span className={styles.brown}>'data_dir'</span> )</span><br /><br />
               <span>filters = [<span className={styles.brown}>"median"</span>,<span className={styles.brown}>"laplacian"</span>,
               <span className={styles.brown}>"gaussian"</span>]</span><br />
               <span>flow.applyFilters( filters )</span><br />
               <span>(train_x, train_y, val_x, val_y) = flow.getDataset( img_dimensions, test_val_split )</span><br />
            </div>
        </div>
    </div>
  )
}
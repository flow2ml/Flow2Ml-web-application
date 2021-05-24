import styles from './template.module.css'
import Button from '@material-ui/core/Button';

export default function Jumbotron() {
  return (
    <div className={styles.jumbotron}>
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4" className={styles.jumboHeadding}>Write only a Few Lines of<br /> Machine learning code using <br /><i><span className={styles.orgNameBig}>Flow2ML</span></i></h1>
                <hr className="my-4" />
                <p className="lead">Quickly design and customize pre-processing workflow in machine learning.<br />
                Obtain training, validating samples with only <span className={styles.highlightNumber}>3&nbsp;</span> 
                lines of code using <span className={styles.orgName}>Flow2ML</span> toolkit<br />
                Check Installation and sample code to flow into your ml model fastly.
                </p>
                <br />
                    <Button href="#installation" className={styles.homeJumboBtn} variant="contained" color="secondary">
                        Installation
                    </Button>&emsp;
                    <Button href="#sampleCode" className={styles.homeJumboBtn} variant="contained" color="primary">
                        Sample Code
                    </Button>
            </div>
        </div>
    </div>
  )
}
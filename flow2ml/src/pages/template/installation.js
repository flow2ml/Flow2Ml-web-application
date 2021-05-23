import styles from './template.module.css'
import Button from '@material-ui/core/Button';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';

export default function Install() {
  return (
    <div className={styles.installation} id="installation">
        <div className="container">
            <CodeRoundedIcon className={styles.codeSymbol} style={{"fontSize": "70px"}}/><br /><br />
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                    <h4>Installation</h4>
                    <p>Install Flow2ML python files via pip.</p>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className={styles.installBox}>
                    <div className="d-flex justify-content-start">
                        <div className={styles.sign}>
                            <AttachMoneyRoundedIcon className={styles.dollarSign}/>
                        </div>
                        <div className={styles.Instruction}>
                            <span className={styles.install}>pip install flow2ml==1.0.2</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
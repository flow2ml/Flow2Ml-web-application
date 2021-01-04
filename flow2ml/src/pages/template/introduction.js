import styles from './template.module.css'

export default function Intro() {
  return (
    <div className={styles.topBody}>
      <div className="container">
          <div className={styles.start}>
                <h4 className={styles.orgNameBig}>Why Flow2Ml ?</h4><br />
                <p>Flow2ML is an open source library to make machine learning process much simpler. 
                  It loads the image data and applies the given filters and returns train data, train labels,
                   validation data and validation labels. <br />For all these steps it just take 3 lines of 
                   code. It mostly helps beginners in the field of machine learning and deep learning where 
                   the user would deal with image related data. Here are the three main features,</p><br /><br />
                
          </div>
      </div>
    </div>
  )
}
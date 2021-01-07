import React from 'react';
import styles from './stacks.module.css';
import word from '../../assets/word.png';
import excel from '../../assets/excel.png';
import power from '../../assets/powerpoint.png';
import outlook from '../../assets/outlook.png';
import onenote from '../../assets/onenote.png';
import sharepoint from '../../assets/sharepoint.png';
import onedrive from '../../assets/onedrive.png';
import teams from '../../assets/teams.png';
import yammer from '../../assets/yammer.png';
import powerbi from '../../assets/powerbi.png';
import powerapps from '../../assets/powerapps.png';
import flow from '../../assets/automate.png';
import azure from '../../assets/azure.png';
import dynamics from '../../assets/dynamics.png';
import react from '../../assets/react.png';
import core from '../../assets/core.png';
import php from '../../assets/php.png';

const Stacks = () => {
    return(
        <div className={styles.stacks}>
            <h1>Our Expertise</h1>
            <p>As a Microsoft Gold Partner, we use our experience and expertise to ensure our clients have the best technology solutions 
                <br />to solve their business challenges and thrive in an ever-changing world.</p>
            <hr />
            <br />
             <div className={styles.Cards}>
                 <h5>Office Online</h5>
                    <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={word} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Word</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={excel} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Excel</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={power} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Powerpoint</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={onenote} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>OneNote</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={outlook} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Outlook</h4>
                        </div>
                        </div>

                    
                    </div>


                <div className={styles.Cards}>
                 <h5>Sharing & Collaboartion</h5>
                    <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={sharepoint} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>SharePoint</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={onedrive} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>OneDrive</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={teams} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Teams</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={yammer} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Yammer</h4>
                        </div>
                        </div>
                        </div>

                <div className={styles.Cards}>
                 <h5>Business Platforms</h5>
                    <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={azure} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Azure</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={flow} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Power Automate</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={powerapps} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Power Apps</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={powerbi} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>PowerBi</h4>
                        </div>
                        </div>

                        
                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={dynamics} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6>Microsoft</h6>
                            <h4>Dynamics 365</h4>
                        </div>
                        </div>
                 </div>  

                 <div className={styles.Cards}>
                 <h5>Custom Applications</h5>
                    <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={core} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6></h6>
                            <h4>.Net Core</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={react} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6></h6>
                            <h4>React</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={react} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6></h6>
                            <h4>React-Native</h4>
                        </div>
                        </div>

                        <div className={styles.stacksCard}>
                        <div className={styles.stacksImg}>
                            <img src={php} alt="icons"/>
                        </div>
                        <div className={styles.stacksText}>
                            <h6></h6>
                            <h4>PHP</h4>
                        </div>
                        </div>

                 </div>  

                </div>
         
    )
}
export default Stacks;
import React from 'react';
import styles from './services.module.css';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import LockIcon from '@material-ui/icons/Lock';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SecurityIcon from '@material-ui/icons/Security';
import CachedIcon from '@material-ui/icons/Cached';
const Services = () => {
    return(
        <div className={styles.services}>
            <h1>Our Services</h1>
            <hr className={styles.hr} />
            <h4>With years of experience building innovative solutions for a range of organisations in private and public sectors, 
                you can be sure of world standard delivery from product ideation up until execution</h4>

            <div className={styles.servicesCard}>
                <AllInclusiveIcon />
               <h3>Professional Services</h3>
               <p>Our Professional Services assist enterprises to conquer the challenges ...
                    We offer Desktop Support for a variety of IT services and software-related issues.</p>
            </div>

            <div className={styles.servicesCard}>
                <CachedIcon />
               <h3>Business Consulting</h3>
               <p>With the aim to provide world-class IT business consulting solutions, Lotus Beta Analytics Nigeria has done well in its service offerings designed towards 
                   solving key client business problems and significantly improve their overall business efficiency.</p>
            </div>

            <div className={styles.servicesCard}>
                <VerifiedUserRoundedIcon />
               <h3>IT Assurance</h3>
               <p>We manage IT risks in our client’s organizations ensuring that their investments in IT controls are effective. 
                   We believe that our solution should be just as unique as our client’s business.</p>
            </div>

            <div className={styles.servicesCard}>
                <SecurityIcon />
               <h3>IT Risk Assessments</h3>
               <p>We offer risk assessment solutions. This helps us identify any potential hazards and associated risks,
                    so we can offer solutions to reduce and eliminate risks.</p>
            </div>

            <div className={styles.servicesCard}>
                <PhoneAndroidRoundedIcon />
               <h3>Application Development</h3>
               <p>As an IT company, Lotus Beta Analytics Nigeria using cutting edge technology 
                   deploys solutions aimed at driving business to success.</p>
            </div>

            <div className={styles.servicesCard}>
               <LockIcon />
               <h3>IT Security</h3>
               <p>We offer complete Cyber Security Solutions </p>
           
                <p>Sophos</p>
                <p>Baracuda</p>
                <p>Paloalto</p>
            </div>


        </div>
    )
}
export default Services;
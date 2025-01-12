import Head from 'next/head';
import { useIntl } from 'react-intl';
import Card from 'react-bootstrap/Card';
import leadPastors from '../public/leadPastors.jpg';
import englishPastor from '../public/PastorWendellandGwen.jpg';
import globalStyles from '../styles/globals.module.css';
import styles from '../styles/About.module.css';

const createPictureCard = (imageSrc, name) => (
  <Card
    text="light"
    className={styles.cardContainer}
  >
    <Card.Img src={imageSrc} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export default function About() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={globalStyles.pageContainer}>
      <Head>
        <title>{f('navBarAbout')}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.pageContainer}>
        <div className={globalStyles.componentContainer}>
          <div className={styles.pictureContainer}>
            {createPictureCard(leadPastors.src, f('seniorPastorCaption'))}
          </div>
          <div className={styles.padding} />
          <div className={styles.textContainer}>
            {f('seniorPastorBio')}
          </div>
        </div>
        <div className={globalStyles.componentContainer}>
          <div className={styles.pictureContainer}>
            {createPictureCard(englishPastor.src, f('englishPastorCaption'))}
          </div>
          <div className={styles.padding} />
          <div className={styles.textContainer}>
            {f('englishPastorBio')}
          </div>
        </div>
      </div>
    </div>
  );
}

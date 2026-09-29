import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Stonebridge & Mill Bay',
    imageUrl: require('@site/static/img/stone-bridge.jpg').default,
    description: (
      <>
        For more information on Stonebridge Development and Mill Bay Homes, contact:{' '}
        <a href="mailto:vidasellsvi@gmail.com">vidasellsvi@gmail.com</a>
      </>
    ),
  },
  {
    title: 'Dedicated to Exceptional Service',
    Svg: require('@site/static/img/logo-face.svg').default, // PNG or JPG or Svg
    description: (
      <>
        I help clients find ideal homes, investments, and commercial properties on southern Vancouver Island with deep local expertise.
      </>
    ),
  },
  {
    title: 'My Brokerage',
    imageUrl: require('@site/static/img/pem-holmes-logo.png').default, // change imageUrl to Svg if I want an .svg image instead
    description: (
      <>
        Pemberton Holmes Real Estate is one of North America's oldest family-owned firms, serving Vancouver Island since 1887.
      </>
    ),
  },
];

function Feature({Svg, imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={imageUrl} className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

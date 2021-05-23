import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Physics Made Easy',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This site aims to make physics easy for students to learn. By providing online introductory lessons for students we can empower them to pursue physics in the future.
      </>
    ),
  },
  {
    title: 'Tailored for Year 10 students',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lessons are hand-crafted to specifically meet the learning needs of Year 10 students.
      </>
    ),
  },
  {
    title: 'Designed by a student, for students',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With insight from someone that has done the hard yards and completed the coursework, a website that is ensured to meet your needs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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

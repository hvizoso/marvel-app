import React, { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Marvel App';
  }, []);

  return (
    <div>
      <h2>About us</h2>
      <p>
        We are a team of Marvel fans who love to create awesome pages.
      </p>
    </div>
  );
};

export default AboutPage;
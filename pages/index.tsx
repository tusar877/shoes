import { useEffect } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  useEffect(() => {
    const url = 'https://amzn.to/44rC794';

    // Open 10 new tabs with the same link
    for (let i = 0; i < 10; i++) {
      window.open(url, '_blank');
    }
  }, []);

  return null;
};

export default Home;


// import { useEffect } from 'react';
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// const Home: NextPage = () => {
//   useEffect(() => {
//     window.location.href = 'https://amzn.to/44rC794';
//   }, []);

//   return null;
// };

// export default Home;

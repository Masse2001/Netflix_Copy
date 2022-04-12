import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/styles.scss';
import MainLayout from './layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
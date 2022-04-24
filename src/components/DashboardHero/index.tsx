import { Carousel } from 'react-responsive-carousel';
import AdNew01 from './ad_new-01.png';
// import Ad1 from './ad-01.jpg';
// import Ad3 from './ad-03.jpg';
// import Ad4 from './ad-04.jpg';
// import Ad5 from './ad-05.gif';
// import Ad6 from './ad-06.gif';
// import AMA from './ama.jpg';
// import Ad0211 from './ad-0211.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.scss';

export default function DashboardHero() {
  const ads = [
    {
      image: AdNew01,
      link: 'https://www.otterclam.finance',
    },
    {
      image: AdNew01,
      link: 'https://www.otterclam.finance/#/otto',
    },
    {
      image: AdNew01,
      link: 'https://www.youtube.com/watch?v=sJ3DqFW409E',
    },
    {
      image: AdNew01,
      link: 'https://twitter.com/otterclam/status/1489186327048294400?s=21',
    },
    {
      image: AdNew01,
      link: '/#/pearl-chests',
    },
    {
      image: AdNew01,
      link: 'https://www.sandbox.game/en/estates/624/',
    },
    {
      image: AdNew01,
      link: 'https://www.youtube.com/watch?v=laPZp3WUt6I',
    },
  ];
  return (
    <Carousel
      className="dashboard-hero"
      interval={6000}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      autoPlay
      infiniteLoop
    >
      {ads.map(({ image, link }, i) => (
        <a key={i} href={link} target="_blank" style={{ display: 'block' }}>
          <img src={image} />
        </a>
      ))}
    </Carousel>
  );
}

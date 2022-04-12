import { SectionWrapper, Download, Features } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title='You own store of Nifty NFTs.'
        description='Buy, store, collect NFTs'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart User Interface Marketplace.'
        description='experience a buttery UI of proNef NFT marketplace.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment'
        description='ProNef is using built using Expo which runs natively on all users devices.'
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='Creative way to showcase the store'
        description='experience a buttery UI of proNef NFT marketplace.'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center '>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by Jin Wang Dev
          <span className='bold'>Jin Wang Dev</span>
        </p>
      </div>
    </>
  );
};

export default App;

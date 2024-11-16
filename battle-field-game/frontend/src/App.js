import ServerInfo from './components/ServerInfo';
import Sidebar from './components/Sidebar';

import styles from './App.module.css';
import ProductCards from './components/ProductCards';

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* <ServerInfo /> */}
    <ProductCards/>
    </div>
    
  );
}

export default App;

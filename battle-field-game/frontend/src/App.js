import ServerInfo from './components/ServerInfo';
import Sidebar from './components/Sidebar';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ServerInfo />
    </div>
  );
}

export default App;

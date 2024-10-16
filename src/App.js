import { useRoutes } from 'react-router-dom';
import logo from './logo.png'
import routers from './routers';

function App() {
  const element = useRoutes(routers);

  return (
    <div className="App">
      <div id="_head">
        <img src={logo} alt='' className="png" width="130" height="130" />
        <span className="title_1 zi">福州八中第55届田径运动会</span>
        <span className="title_2 zi">赛事信息综合平台</span>
    </div>
      <main id='_body'>
        {element}
        <footer id="coppyright">
          <p>Copyright © 2024 by 福州八中学生会技术部</p>
        </footer>
      </main>
      
    </div>
  );
}

export default App;

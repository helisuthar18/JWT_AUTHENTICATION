import './App.css'
import logo from '../logo.svg'
import Header from './Header'
import AppContent from './AppContent'

function App() {
  return (
    <div>
        <Header pageTitle="Fronted Authenticated With JWT" logoSrc={logo} />
        <AppContent/>
    </div>
      );
    }

    export default App;
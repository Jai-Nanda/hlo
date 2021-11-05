import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import About from './pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={HeroSection} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
      </>
  )
}

export default App;
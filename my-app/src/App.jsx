import Landing from './components/Landing.jsx'; 
import Customers from './components/Customers.jsx'; 
import Benefits from './components/Benefits.jsx'; 
import FeatureCustomers from './components/FeatureCustomers.jsx'
import BusinessInfo from './components/BusinessInfo';
import CallToActionSection from './components/CallToActionSection.jsx'
import FooterSection from './components/FooterSection.jsx'



function App() {
  return (
    <div className="App">
      <Landing /> 
      <Benefits /> 
      <Customers /> 
      <FeatureCustomers />
      <BusinessInfo />
      <CallToActionSection />
      <FooterSection />

    </div>
  );
}

export default App;
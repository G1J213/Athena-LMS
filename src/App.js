import './App.css';
import Navbar from './components/nav/Navbar';
import Main from './components/main/a-home/Main';
import Section2 from './components/main/b-home/Section2';
import Section3 from './components/main/c-purple/Section3';
import Section4 from './components/main/d-what_is_athena_lms/Section4';
import Section5 from './components/main/e-we_can_custom/Section5';
import Section6 from './components/main/f-future_proof/Section6';
import Section7 from './components/main/g-explore_our/Section7';
import Section8 from './components/main/h-plans/Section8';
import Section9 from './components/main/i-have_question/Section9';
import Footer1 from './components/footer/footer1/Footer1';
import Footer2 from './components/footer/footer2/Footer2';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;

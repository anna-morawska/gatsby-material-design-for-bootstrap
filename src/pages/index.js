import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Intro from '../components/mask';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import AboutSection from '../components/aboutSection'
import Card from '../components/card'
import { MDBRow } from 'mdbreact'
import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousel />
        <Intro />
        <main>
          <AboutSection />
          <section id="cardSection">
            <h2 className="h1-responsive text-center font-weight-bold mb-5">
              Our bestsellers
            </h2>
            <MDBRow className="m-0" center>
              <Card />
              <Card />
              <Card />
            </MDBRow>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

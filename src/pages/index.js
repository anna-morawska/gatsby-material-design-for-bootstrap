import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import SEO from '../components/seo';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection'
import Card from '../components/card'
import { MDBRow } from 'mdbreact'

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />
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
        </Layout>
      </>
    );
  }
}

export default App;

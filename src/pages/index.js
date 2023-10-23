import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import CalendlyEmbed from "../components/CalendalyEmbed"
import BlueHeader from "../components/BlueHeader"
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col items-center main-content">
      <ContactForm />
      <BlueHeader heading={'Book a Call'}/>
      <CalendlyEmbed />
      <div className="w-full nav-line-2"></div>
      <Footer/>
    </div>

  </Layout>
)

export default IndexPage
import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import CalendlyEmbed from "../components/CalendalyEmbed"
import BlueHeader from "../components/BlueHeader"
import Footer from "../components/Footer";

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (<Layout>
    <SEO title="Home" />
    <div className="flex flex-col items-center main-content">
      <div className="mobile-only w-full flex flex-col items-center">
        <div className="flex w-full margin-auto">
          <button
            className={`py-2 px-4 w-full bg-border-primary  ${activeTab === "signup" ? "bg-color-primary text-white" : "color-primary"}`}
            onClick={() => setActiveTab("signup")}
          >
            Signup
          </button>

          <button
            className={`py-2 px-4 w-full bg-border-primary  ${activeTab === "book-a-call" ? "bg-color-primary text-white" : "color-primary"}`}
            onClick={() => setActiveTab("book-a-call")}
          >
            Book a Call
          </button>
        </div>
      </div>
      {activeTab === "signup" && <ContactForm className="mobile-only"/>}
      {activeTab === "book-a-call" && <CalendlyEmbed className="mobile-only"/>}
      <ContactForm className="desktop-only"/>
      <BlueHeader className="desktop-only" heading={'Book a Call'} />
      <CalendlyEmbed className="desktop-only"/>
      <div className="w-full nav-line-2"></div>
      <Footer />
    </div>

  </Layout>)
}

export default IndexPage
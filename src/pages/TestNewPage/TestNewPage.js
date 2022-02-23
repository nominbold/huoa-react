import React from "react";
import { ReactComponent as Download } from 'assets/download.svg';
import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";
import Button from 'components/Button/Button';

const TestNewPage = ({ data }) => {

  if (!data) return null;
  else {
    const { title, body } = data.testnewpage_page;
    return (
      <Layout>
        <div className="testnewpage__container">
          <h2 position="left" className="testnewpage__title">{title}</h2>
          <div className="testnewpage__description" dangerouslySetInnerHTML={{__html: body}} />
        </div>
      </Layout>
    );
  }
};
export default TestNewPage;

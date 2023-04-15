import React, { useState } from "react";
import Head from "next/head";
import { BackCard, BackCardWrapped } from "../components/BackCard";
import { H1 } from "../components/Typography";
import * as api from "../services/content.api";
type Props = {};

const TermsOfService = (props: Props) => {
  const [data, setData] = useState([]);
  const get = async () => {
    const resp = await api.getContent({ pageTitle: "" });
  };
  return (
    <div style={{ paddingTop: "150px" }}>
      <Head>
        {" "}
        <title>Terms of service</title>
      </Head>
      <BackCardWrapped>
        <BackCard>
          <H1 size={25}>Contact us</H1>
          <br />
          <div style={{ textAlign: "left", lineHeight: "30px" }}>
            <h4>
              PLEASE READ THIS STATEMENT OF PRIVACY PRACTICES CAREFULLY BEFORE
              USING OUR SERVICE
            </h4>
            <p>
              yts1.co ("Our", "We" or "Us") is comprised of web pages containing
              information provided by us. Your access to the Site is offered to
              you conditioned on your acceptance of these Terms of Service
              together with our statement of privacy practices, which is
              incorporated herein by this reference and found at ("Terms"). If
              the terms of this agreement are considered an offer, acceptance is
              expressly limited to such terms. If you do not unconditionally
              agree to all the terms and conditions of this agreement, you have
              no right to use the Site/Client and any other linked services.
            </p>
            <h4>1. ACCESS TO THE SERVICES</h4>
            <p>
              Please note that we reserve the right, in its sole discretion, to
              change these Terms at any time upon notice. You can review the
              most current version of the Terms at any time. The updated Terms
              are binding on you on the version date indicated in the updated
              Terms. If you do not agree to the updated Terms, you must stop
              using the tube2mate service. Your continued use of the service
              after the effective date will constitute your acceptance of the
              updated Terms.
            </p>
            <h4>2. CHANGES TO THE SITE/CLIENT</h4>
            <p>
              You may use the Site/Client if and when it is available. We do not
              guarantee the availability of the Site/Client or any particular
              feature. A particular feature may be a pre-release version and may
              not work correctly or in the way, a final version might work. We
              may significantly change the final version or decide not to
              release it. We reserve the right to change, remove, delete,
              restrict or block access to, charge for, or stop providing all or
              any part of the Site/Client at any time without notice
            </p>
            <h4>3. CONTENT</h4>
            <p>
              tube2mate Site/Client and any other linked services must only be
              used for private purposes. Any commercial use of tube2mate is
              strictly forbidden and will be pursued in a court of law. It is
              the only purpose of tub e2mateto to create a copy of downloadable
              online content for the private use of the user ( &quot;fair use
              &quot;). Any further use of the content transmitted by ytmates.com
              particularly but not exclusively making the content publicly
              accessible or using it commercially must be agreed upon with the
              holder of the rights of the respective downloaded content. The
              user bears full responsibility for all actions related to the data
              transmitted by ytmates.com. tube2mate does not grant any rights to
              the contents, as it only acts as a technical service provider.
            </p>
            <p>
              The Site/Client or the apps in the Site/Client may contain links
              to third-party websites or clients("Linked Sites/Client"). The
              Linked Sites/Client are not under our control and we are not
              responsible for any Linked Site, including any content contained
              in a Linked Site or any changes or updates to a Linked Site. We
              provide links to you only as a convenience, and the inclusion of
              any link does not imply our endorsement of the site or any
              association with its operators. The user carries full
              responsibility for checking the legitimacy of his use of
              ytmates.com tube2mate only provides technical service. Hence,
              tube2mate does not take liability towards the user or any third
              party for the permissibility of downloading content through
              YTtube2mate s.
            </p>
            <p>
              You represent and warrant to us that: (A) you are an individual
              (i.e., not a corporation) and you are of legal age to form a
              binding contract or have your parent’s permission to do so, and
              you are at least 13 years of age or older; (B) all registration
              information you submit is accurate and truthful, and (C) you will
              maintain the accuracy of such information. You also certify that
              you are legally permitted to use and access the services and take
              full responsibility for the selection and use of and access to the
              services. This agreement is void where prohibited by law, and the
              right to access the services is revoked in such jurisdictions.
            </p>
            <h4>4. WARRANTY DISCLAIMER</h4>
            <p>
              To the maximum extent permitted by applicable law, the Site and
              Content are provided “AS IS,” “WITH ALL FAULTS,” and “AS
              AVAILABLE” and the entire risk of use and performance, remains
              with you. tube2mate, its suppliers, and licensors DO NOT MAKE ANY
              representations, warranties, or conditions, express, implied, or
              statutory and hereby disclaim any implied warranties of
              merchantability, merchantable quality, fitness for a particular
              purpose, title, quiet Enjoyment, or non-infringement. In
              particular, tube2mate, its suppliers, and licensors make no
              warranty that the Site or Content: (A) will meet your
              requirements; (B) will be available or provided on an
              uninterrupted, timely, secure, or error-free basis; (C) any
              information or content obtained through the SITE will be accurate,
              complete, or reliable; or (D) that any defects or errors therein
              will be corrected. All Content you download or obtain through the
              Site is accessed at your own risk, and you will be solely
              responsible for any damage or loss that results therefrom. You may
              have additional rights under your local laws that THESE TERMS
              cannot change. In particular, to the extent local legislation
              implies statutory terms which cannot be excluded, THOSE terms are
              deemed incorporated into this document but tube2mate liability for
              a breach of THOSE statutory implied terms is limited in accordance
              with and to the extent permissible under THAT legislation.
            </p>
          </div>
        </BackCard>
      </BackCardWrapped>
    </div>
  );
};

export default TermsOfService;

import React from "react";
import Navbar from "../components/Navbar";

const Privacy = () => {
  const timeClass = "mt-4 mb-12";
  const bodyClass = "text-gray-300 my-2 w-full";
  const h3Class = "mt-8 mb-3 font-semibold text-lg w-full";

  return (
    <div className="w-full h-full flex flex-col items-center bg-black bg-opacity-90 text-white font-poppins">
      <Navbar />
      <div className="max-w-2xl w-full flex flex-col items-center py-12 pb-32 px-6">
        <h1 className="text-3xl font-medium">Turnup's Privacy Policy</h1>
        <p className={timeClass}>Last update: December 23, 2022</p>

        <p className={bodyClass}>
          Please read this privacy policy (the “Policy”) carefully to understand
          how Turnup Inc., 33, Toegye-ro 18-gil, Jung-gu, Seoul, South Korea
          (”Turnup”, “we”) uses personal information. By accessing or using
          www.turnup.vip, the Turnup mobile app, or any other related sites,
          applications, services and goods, or any other website operated by
          Turnup that links to this policy (each, the “Site”), you acknowledge
          that you have read and understood this Policy. This Policy may change
          from time to time; any changes we make to this Policy will be posted
          on this Site, we will also take any other steps, to the extent
          required by applicable law, including notifying you about material
          changes. Changes to this Policy are effective as of the stated "Last
          Updated" date. We recommend that you check the Policy periodically for
          any updates or changes.
        </p>

        <h3 className={h3Class}>Information We Collect</h3>
        <p className={bodyClass}>
          You directly provide us with most of the information we collect: when
          you register to the Site, use it, complete forms, or register to any
          of our programs. We also collect information about your communications
          with Turnup as well as any of your posts on our blogs or forums and
          your communication with other users of Turnup. In addition, we
          automatically collect information while you access, browse, view or
          otherwise use the Site and receive information from third party
          vendors or other available sources.
        </p>

        <h3 className={h3Class}>
          Our Legal Basis for Using Your Personal Information
        </h3>
        <p className={bodyClass}>
          Where relevant under applicable laws, all processing of your personal
          information will be justified by a "lawful ground" for processing as
          detailed below.
        </p>

        <h3 className={h3Class}>How Do We Use the Information Collected?</h3>
        <p className={bodyClass}>
          We use personal information to provide you with quality service and
          security, to operate the Site, understand how people use the Site, and
          to perform our obligations to you; to ensure marketplace integrity and
          security; to prevent fraud; to contact you and send you direct
          marketing communications; to promote and advertise the Site, our
          services and the Turnup marketplace; to comply with lawful requests by
          public authorities and to comply with applicable laws and regulations.
        </p>

        <h3 className={h3Class}>How Long Do We Keep Personal Information</h3>
        <p className={bodyClass}>
          We will keep personal information only for as long as is required to
          fulfil the purpose for which it was collected. However, in some cases
          we will retain personal information for longer periods of time.
        </p>

        <h3 className={h3Class}>Children</h3>
        <p className={bodyClass}>
          This Site is offered and available to users who are at least 18 years
          of age and of legal age to form a binding contract. Minors under 18
          and at least 13 years of age, are only permitted to use the Site
          through an account owned by a parent or legal guardian with their
          appropriate permission. Minors under 13 are not permitted to use the
          Site or the Turnup services. We do not knowingly collect personal
          information from children under 13.
        </p>

        <h3 className={h3Class}>
          Sharing Personal Information with Third Parties
        </h3>
        <p className={bodyClass}>
          We share personal information with third parties in order to operate
          the Site, provide our services to you, fulfil obligations imposed on
          us by applicable laws and regulations, and prevent fraud,
          infringements and illegal activities.
        </p>

        <h3 className={h3Class}>Where We Store Personal Information</h3>
        <p className={bodyClass}>
          Some of the personal information you provide to us will be stored or
          processed on our behalf by third party suppliers and data processors
          and may be located in other jurisdictions, such as the United States
          and Israel.
        </p>

        <h3 className={h3Class}>Cookies</h3>
        <p className={bodyClass}>
          We use cookies and similar technologies (such as web beacons, pixels,
          tags, and scripts) to improve and personalize your experience, provide
          our services, analyze website performance and for marketing purposes.
        </p>

        <h3 className={h3Class}>Do Not Track (DNT)</h3>
        <p className={bodyClass}>
          Our Site does not respond to Do Not Track (DNT) signals.
        </p>

        <h3 className={h3Class}>External Links</h3>
        <p className={bodyClass}>
          The Site contains links to third party sites and if you link to a
          third party site from the Site, any data you provide to that site and
          any use of that data by the third party are not under the control of
          Turnup and are not subject to this Policy.
        </p>

        <h3 className={h3Class}>Security</h3>
        <p className={bodyClass}>
          We implement technical and organizational measures to maintain the
          security of the Site and your personal information and in preventing
          unauthorized access, loss, misuse, alteration, destruction or damage
          to it through industry standard technologies and internal procedures.
        </p>

        <h3 className={h3Class}>Rights of EU, EEA and UK Users</h3>
        <p className={bodyClass}>
          Where we process personal data related to EU, EEA and UK user, further
          terms apply to our processing in relation to your rights as a data
          subject under EU data protection laws, as detailed below.
        </p>

        <h3 className={h3Class}>
          Specific Provisions for California Residents
        </h3>
        <p className={bodyClass}>
          If you are a California resident, you are entitled to specific privacy
          rights as detailed below.
        </p>

        <h3 className={h3Class}>Updating Personal Information</h3>
        <p className={bodyClass}>
          We take steps to ensure that the personal information we collect is
          accurate and up to date, and we provide you with the opportunity to
          update your information through your account profile settings. In the
          event that you believe your information is in any way incorrect or
          inaccurate, please let us know immediately.
        </p>

        <h3 className={h3Class}>Contact Us</h3>
        <p className={bodyClass}>
          You can exercise your rights over your personal information, by
          opening a Customer Relations ticket or contacting us at
          privacy@turnup.vip. For Turnup Workspace users, please contact us at
          workspace-support@turnup.vip. More details about the rights applicable
          to you are in the long version of the Policy. The above are just the
          highlights. We encourage you to read more about the information we
          collect, how we use it, understand the meaning of cookies (no, you
          can’t eat it) and more in the long version of our Policy below.
        </p>
      </div>
    </div>
  );
};

export default Privacy;

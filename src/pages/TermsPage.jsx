import React from "react";
import Navbar from "../components/Navbar";

const TermsPage = () => {
  const timeClass = "mt-4 mb-12";
  const bodyClass = "text-gray-300 my-2 w-full";
  const h2Class = "mt-8 mb-3 font-semibold text-2xl w-full";
  const h3Class = "mt-8 mb-3 font-semibold text-lg w-full";
  const hrefClass = "text-blue-400 underline";

  return (
    <div className="w-full h-full flex flex-col items-center bg-black bg-opacity-90 text-white font-poppins">
      <Navbar />
      <div className="max-w-2xl w-full flex flex-col items-center py-12 pb-32 px-6">
        <h1 className="text-3xl font-medium">Turnup's Terms of Service</h1>
        <p className={timeClass}>Last update: December 23, 2022</p>

        <p className={bodyClass}>
          The following terms of service (these "Terms of Service"), govern your
          access to and use of the Turnup website and mobile application,
          including any content, functionality and services offered on or
          through www.turnup.vip or the Turnup mobile application (the "Site")
          by Turnup Inc., 33, (Toegye-ro 18-gil, Jung-gu, Seoul, South Korea).
          Turnup Inc. and its subsidiaries are collectively referred hereto as
          "Turnup" "we" or "us" and “you” or “user” means you as an user of the
          Site.
        </p>

        <p className={bodyClass}>
          Please read the Terms of Service carefully before you start to use the
          Site. By using the Site, opening an account or by clicking to accept
          or agree to the Terms of Service when this option is made available to
          you, you accept and agree, on behalf of yourself or on behalf of your
          employer or any other entity (if applicable), to be bound and abide by
          these Terms of Service and Turnup Payment Terms, found{" "}
          <a className={hrefClass} href={"/legal/payment-terms"}>
            <button>here</button>
          </a>{" "}
          (“Payment Terms”), which is incorporated herein by reference. You
          further acknowledge, you have read and understood our Privacy Policy,
          found here. If you do not want to agree to these Terms of Service or
          the Privacy Policy, you must not access or use the Site. For more
          detailed policies surrounding the activity and usage on the Site,
          please access the designated articles herein.
        </p>

        <p className={bodyClass}>
          This Site is offered and available to users who are at least 18 years
          of age and of legal age to form a binding contract. If you are under
          18 and at least 13 years of age, you are only permitted to use the
          Site through an account owned by a parent or legal guardian with their
          appropriate permission. If you are under 13 you are not permitted to
          use the Site or the Turnup services. By using the Site, you represent
          and warrant that you meet all of the foregoing eligibility
          requirements. If you do not meet all of these requirements, you must
          not access or use the Site.
        </p>

        <p className={bodyClass}>
          Our Customer Support team is available 24/7 if you have any questions
          regarding the Site or Terms of Service. Contacting our Customer
          Support team can be performed by submitting a request here.
        </p>

        <p className={bodyClass}>
          The original language of these Terms of Service, as well as all other
          texts throughout the Site, is English. Turnup makes this translation
          available for convenience only. In case of conflicts between the
          original English version and any translation, the English version
          shall prevail.
        </p>

        <h3 className={h3Class}>Overview (Main terms, in a nutshell)</h3>
        <p className={bodyClass}>
          - Only registered users may buy and sell on Turnup. Registration is
          free. In registering for an account, you agree to provide us with
          accurate, complete and updated information and must not create an
          account for fraudulent or misleading purposes. You are solely
          responsible for any activity on your account and for maintaining the
          confidentiality and security of your password. We are not liable for
          any acts or omissions by you in connection with your account.
        </p>
        <p className={bodyClass}>
          - Profiles on Turnup may be offered at a base starting price of $0.
          Some Profiles are offered at a base price of more than $0 as
          determined by the Seller.
        </p>
        <p className={bodyClass}>
          - Buyers pay Turnup in advance to create an order (see{" "}
          <a className={hrefClass} href={"/legal/payment-terms"}>
            <button>Payment Terms</button>
          </a>
          ).
        </p>
        <p className={bodyClass}>
          - Orders are purchased through the Order button found on a Seller’s
          Profile page.
        </p>
        <p className={bodyClass}>
          - For fees and payments please read the{" "}
          <a className={hrefClass} href={"/legal/payment-terms"}>
            <button>Payment Terms</button>
          </a>
          .
        </p>
        <p className={bodyClass}>
          - Sellers must fulfill their orders, and may not cancel orders on a
          regular basis or without cause. Cancelling orders will affect Sellers’
          reputation and status.
        </p>
        <p className={bodyClass}>
          - Sellers gain account statuses (Levels) based on their performance
          and reputation. Advanced levels provide their owners with benefits,
          including offering services for higher prices.
        </p>
        <p className={bodyClass}>
          - Users may not offer or accept payments using any method other than
          placing an order through Turnup App.
        </p>
        <p className={bodyClass}>
          - When purchasing a Profile, Buyers are granted all rights for the
          delivered information.
        </p>
        <p className={bodyClass}>
          - Turnup retains the right to use all published delivered profiles
          for Turnup marketing and promotion purposes.
        </p>
        <p className={bodyClass}>
          - We care about your privacy. You can read our{" "}
          <a className={hrefClass} href={"/legal/privacy-policy"}>
            <button>Privacy Policy</button>
          </a>{" "}
          here.
        </p>
        <p className={bodyClass}>
          - Users undertake to comply with Turnup's Community Standards, which
          are a set of behavior rules and guidelines, applicable to the Turnup
          community and marketplace in addition to these Terms of Service, as
          updated from time to time.
        </p>

        <h3 className={h2Class}>SELLERS</h3>
        <p className={bodyClass}>
          - Sellers create profiles on Turnup to allow Buyers to purchase their
          services.
        </p>
        <p className={bodyClass}>
          - Each profile you sell and successfully complete, accredits your
          account with a revenue equal to 80% of the purchase amount.
        </p>
        <p className={bodyClass}>
          - Turnup accredits Sellers once an order is completed. See our
          "Orders" section below for a definition of a completed order.
        </p>
        <p className={bodyClass}>
          - For more information about receiving payments, fees and taxes see
          the
          <a className={hrefClass} href={"/legal/payment-terms"}>
            <button>Payment Terms</button>
          </a>
          .
        </p>
        <p className={bodyClass}>
          - Sellers may not promote their profiles or any Turnup content via
          the Google Ads platform.
        </p>
        <p className={bodyClass}>
          - The Seller's rating is calculated based on the order reviews posted
          by Buyers. High ratings allow Sellers to obtain advanced Seller
          levels.In certain cases, exceedingly low ratings may lead to the
          suspension of the Seller’s account.
        </p>
        <p className={bodyClass}>
          - For security concerns, Turnup may temporarily disable a Seller’s
          ability to withdraw revenue to prevent fraudulent or illicit activity.
          This may come as a result of security issues, improper behavior
          reported by other users, or associating multiple Turnup accounts to a
          single withdrawal provider.
        </p>
        <p className={bodyClass}>
          - Sellers are responsible for obtaining a general liability insurance
          policy with coverage amounts that are sufficient to cover all risks
          associated with the performance of their services.
        </p>

        <h2 className={h2Class}>BUYERS</h2>
        <p className={bodyClass}>
          - You may not offer direct payments to Sellers using payment systems
          outside of the Turnup platform.
        </p>
        <p className={bodyClass}>
          - Turnup retains the right to use all publicly published profiles for
          Turnup marketing and promotional purposes.
        </p>
        <p className={bodyClass}>
          - Buyers may request a to purchase a profile. Services requested on
          Profile must be an allowed profile on Turnup. Please click here for
          guidelines on approved profiles. Users should refrain from using the
          Post a Request feature for any purpose other than looking for services
          on Turnup.
        </p>

        <h2 className={h2Class}>ORDERS</h2>
        <p className={bodyClass}>
          - Once payment is confirmed, your order will be created and given a
          unique Turnup order number (#CO).
        </p>
        <p className={bodyClass}>
          - The Accept order button may not be abused by Sellers to circumvent
          Order guidelines described in these Terms of Service. Using the
          “Accept Order” button when an Order was not fulfilled may result in a
          cancellation of that Order after review, affect the Seller’s rating
          and result in a warning to Seller.
        </p>
        <p className={bodyClass}>
          - We encourage our Buyers and Sellers to try and settle conflicts
          amongst themselves. If for any reason this fails after using the
          Resolution Center or if you encounter non-permitted usage on the Site,
          users can contact Turnup's Customer Support department for assistance
          here. For more information about disputes, Order cancellations and
          refunds please refer to the{" "}
          <a className={hrefClass} href={"/legal/payment-terms"}>
            <button>Payment Terms</button>
          </a>
          .
        </p>

        <h2 className={h2Class}>Disputes and Cancellations</h2>
        <p className={bodyClass}>
          We encourage our Buyers and Sellers to try and settle conflicts
          amongst themselves. If for any reason this fails after using the
          Resolution Center or if you encounter non-permitted usage on the Site,
          users can contact Turnup's Customer Support department for assistance
          here. For more information about disputes, Order cancellations and
          refunds please refer to the{" "}
          <a className={hrefClass} href={"/legal/payment-terms"}>
            <button>Payment Terms</button>
          </a>
          .
        </p>

        <h2 className={h2Class}>Reporting Violations</h2>
        <p className={bodyClass}>
          If you come across any content that may violate our Terms of Service
          and/or our Community Standards, you should report it to us through the
          appropriate channels created to handle those issues as outlined in our
          Terms of Service. All cases are reviewed by our Trust & Safety team.
          To protect individual privacy, the results of the investigation are
          not shared. You can review our{" "}
          <a className={hrefClass} href={"/legal/privacy-policy"}>
            <button>Privacy Policy</button>
          </a>{" "}
          for more information.
        </p>

        <h2 className={h2Class}>Violations</h2>
        <p className={bodyClass}>
          Users may receive a warning to their account for violations of our
          Terms of Service and/or our Community Standards or any user misconduct
          reported to our Trust and Safety team. A warning will be sent to the
          user's email address and will be displayed for such user on the Site.
          Warnings do not limit account activity, but can lead to your account
          losing Seller statuses or becoming permanently disabled based on the
          severity of the violation.
        </p>

        <h3 className={h3Class}>Non-Permitted Usage</h3>
        <p className={bodyClass}>
          Adult Services & Pornography - Turnup does not allow any exchange of
          adult oriented or pornographic materials and services.
        </p>
        <p className={bodyClass}>
          Inappropriate Behavior & Language - Communication on Turnup should be
          friendly, constructive, and professional. Turnup condemns bullying,
          harassment, and hate speech towards others. We allow users a medium
          for which messages are exchanged between individuals, a system to rate
          orders, and to engage on larger platforms such as our Community Forum
          and Social Media pages.
        </p>
        <p className={bodyClass}>
          Phishing and Spam - Members’ security is a top priority. Any attempts
          to publish or send malicious content with the intent to compromise
          another member’s account or computer environment is strictly
          prohibited. Please respect our members privacy by not contacting them
          with offers, questions, suggestions or anything which is not directly
          related to their profiles or orders.
        </p>
        <p className={bodyClass}>
          Privacy & Identity - You may not publish or post other people's
          private and confidential information. Any exchange of personal
          information required for the completion of a service must be provided
          in the Order Page. Sellers further confirm that whatever information
          they receive from the Buyer, which is not public domain, shall not be
          used for any purpose whatsoever other than for the delivery of the
          work to the Buyer. Any users who engage and communicate off of Turnup
          will not be protected by our Terms of Service.
        </p>
        <p className={bodyClass}>
          Authentic Turnup Profile - You may not create a false identity on
          Turnup, misrepresent your identity, create a Turnup profile for
          anyone other than yourself (a real person), or use or attempt to use
          another user’s account or information; Your profile information,
          including your description, skills, location, etc., while may be kept
          anonymous, must be accurate and complete and may not be misleading,
          illegal, offensive or otherwise harmful. Turnup reserves the right to
          require users to go through a verification process in order to use the
          Site (whether by using ID, phone, camera, etc.).
        </p>
        <p className={bodyClass}>
          Intellectual Property Claims - Turnup will respond to clear and
          complete notices of alleged copyright or trademark infringement,
          and/or violation of third party’s terms of service. Our Intellectual
          Property claims procedures can be reviewed here.
        </p>
        <p className={bodyClass}>
          Fraud / Unlawful Use - You may not use Turnup for any unlawful
          purposes or to conduct illegal activities.
        </p>

        <h3 className={h3Class}>Abuse and Spam</h3>
        <p className={bodyClass}>
          Multiple Accounts - To prevent fraud and abuse, users are limited to
          one active Turnup account and one active Turnup Business account.
          Any additional account determined to be created to circumvent
          guidelines, promote competitive advantages, or mislead the Turnup
          community will be disabled. Mass account creation may result in
          disabling of all related accounts. Note: any violations of Turnup’s
          Terms of Service and/or our Community Standards is a cause for
          permanent suspension of all accounts.
        </p>
        <p className={bodyClass}>
          Targeted Abuse - We do not tolerate users who engage in targeted abuse
          or harassment towards other users on Turnup. This includes creating
          new multiple accounts to harass members through our message or
          ordering system.
        </p>
        <p className={bodyClass}>
          Selling Accounts - You may not buy or sell Turnup accounts.
        </p>

        <h2 className={h2Class}>General Terms</h2>
        <p className={bodyClass}>
          Turnup reserves the right to put any account on hold or permanently
          disable accounts due to breach of these Terms of Service and/or our
          Community Standards or due to any illegal or inappropriate use of the
          Site or services.
        </p>
        <p className={bodyClass}>
          Violation of Turnup's Terms of Service and/or our Community Standards
          may get your account disabled permanently.
        </p>
        <p className={bodyClass}>
          Users with disabled accounts will not be able to sell or buy on
          Turnup.
        </p>
        <p className={bodyClass}>
          Users who have violated our Terms of Service and/or our Community
          Standards and had their account disabled may contact our Customer
          Support team for more information surrounding the violation and status
          of the account.
        </p>
        <p className={bodyClass}>
          Users have the option to enable account Security features to protect
          their account from any unauthorized usage.
        </p>
        <p className={bodyClass}>
          Users must be able to verify their account ownership through Customer
          Support by providing materials that prove ownership of that account.
        </p>
        <p className={bodyClass}>
          Disputes should be handled using Turnup's dispute resolution tools
          ('Resolution Center' on the order page) or by contacting Turnup
          Customer Support.
        </p>
        <p className={bodyClass}>
          Turnup may make changes to its Terms of Service from time to time.
          When these changes are made, Turnup will make a new copy of the terms
          of service available on this page.
        </p>
        <p className={bodyClass}>
          You understand and agree that if you use Turnup after the date on
          which the Terms of Service have changed, Turnup will treat your use
          as acceptance of the updated Terms of Service.
        </p>

        <h2 className={h2Class}>Disclaimer of Warranties</h2>
        <p className={bodyClass}>
          YOUR USE OF THE SITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED
          THROUGH THE SITE IS AT YOUR OWN RISK. THE SITE, ITS CONTENT AND ANY
          SERVICES OR ITEMS OBTAINED THROUGH THE SITE ARE PROVIDED ON AN "AS IS"
          AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
          EXPRESS OR IMPLIED. NEITHER Turnup NOR ANY PERSON ASSOCIATED WITH
          Turnup MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE
          COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY
          OF THE SITE.
        </p>
        <p className={bodyClass}>
          THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED
          OR LIMITED UNDER APPLICABLE LAW.
        </p>

        <h2 className={h2Class}>Limitation on Liability</h2>
        <p className={bodyClass}>
          IN NO EVENT WILL Turnup, ITS AFFILIATES OR THEIR LICENSORS, SERVICE
          PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR
          DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
          CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES
          LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES OR ANY
          SERVICES OR ITEMS OBTAINED THROUGH THE SITE OR SUCH OTHER WEBSITES,
          INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
          PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN
          AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS,
          LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF
          GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING
          NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
        </p>
        <p className={bodyClass}>
          THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED
          OR LIMITED UNDER APPLICABLE LAW.
        </p>
        <p className={bodyClass}>
          The term “Affiliate” referred to herein, is an entity that, directly
          or indirectly, controls, or is under the control of, or is under
          common control with Turnup, where control means having more than
          fifty percent (50%) voting stock or other ownership interest or the
          majority of voting rights of such entity.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;

import React from "react";
import Navbar from "../components/Navbar";

const PaymentTerms = () => {
  const timeClass = "mt-4 mb-12";
  const bodyClass = "text-gray-300 my-2 w-full";
  const h2Class = "mt-8 mb-3 font-semibold text-2xl w-full";
  const hrefClass = "text-blue-400 underline";
  return (
    <div className="w-full h-full flex flex-col items-center bg-black bg-opacity-90 text-white font-poppins">
      <Navbar />
      <div className="max-w-2xl w-full flex flex-col items-center py-12 pb-32 px-6">
        <h1 className="text-3xl font-medium">TURNUP's Terms of Service</h1>
        <p className={timeClass}>Last update: December 23, 2022</p>

        <p className={bodyClass}>
          The following terms (these “Payment Terms”) govern payments you make
          or receive through TURNUP platform (the “Site”), operated by TURNUP
          Inc. (Toegye-ro 18-gil, Jung-gu, Seoul, South Korea).
        </p>
        <p className={bodyClass}>
          TURNUP Inc. (Toegye-ro 18-gil, Jung-gu, Seoul, South Korea) processes
          card payments from the U.S. and card payments from outside the U.S.
          TURNUP Inc. are collectively referred hereto as “TURNUP” “we” or
          “us”
        </p>
        <p className={bodyClass}>
          Please read these Payment Terms carefully before making or receiving
          payments through the Site. By making or receiving payments through the
          Site, you accept and agree, on behalf of yourself or on behalf of your
          employer or any other entity (if applicable), to be bound and abide by
          these Payment Terms. These Terms are supplemental to TURNUP's General{" "}
          <a className={hrefClass} href={"/legal/terms-of-service"}>
            <button>Terms of Service</button>
          </a>{" "}
          as applicable (collectively, the “Terms of Service”).
        </p>

        <h2 className={h2Class}>Receiving Payments</h2>
        <p className={bodyClass}>
          - Each Profile order you sell and successfully complete, accredits
          your account with revenue equal to 80% of the purchase amount.
        </p>
        <p className={bodyClass}>
          - If an order is canceled (for any reason), the funds paid will be
          returned to the Buyer’s TURNUP Balance.
        </p>
        <p className={bodyClass}>
          - Sellers are responsible for paying any direct or indirect taxes,
          including any GST, VAT or income tax, which may apply to them
          depending on residency, location or otherwise, under provisions of
          their jurisdiction. Sellers represent and warrant that they comply,
          and will comply at all times, with their obligations under income tax
          provisions in their jurisdiction. The price shown on the profile page
          or is inclusive of all such taxes and charges that may apply to the
          Sellers.
        </p>
        <p className={bodyClass}>
          - Appointment as Limited Payment Collection Agent: Seller hereby
          appoints TURNUP as Seller’s limited authorized payment collection
          agent solely for the purpose of accepting payments (via its Payment
          Services Provider, if applicable) from Buyer, and remitting those
          payments to Seller. Seller agrees that payment from Buyer to TURNUP
          shall be considered the same as a made directly to Seller. Buyer’s
          payment obligation to Seller will be satisfied upon receipt of payment
          by TURNUP (or its Payment Services Provider, as applicable), and
          TURNUP (via its Payment Services Provider, as applicable) is
          responsible for remitting the funds to the Seller in the manner
          described in these Payment Terms. In the event that TURNUP (via
          Payment Services Provider) does not remit any such amounts to Seller,
          the Seller will have recourse only against TURNUP and not the Buyer
          directly. Seller agrees that TURNUP may describe or otherwise reflect
          the terms contained herein in any terms of service, receipts,
          disclosures, or notices including, but not limited to, receipts
          provided to Buyers that TURNUP may deem necessary or prudent.
        </p>
        <p className={bodyClass}>
          - TURNUP partners with Payment Services Providers for purposes of
          collecting payments from Buyers, transferring such payments from
          Buyers to Sellers, and holding funds in connection with TURNUP
          Balances. All payments services in connection with the withdrawal of
          funds on the TURNUP platform are performed by TURNUP’s Payment
          Services Providers.
        </p>

        <h2 className={h2Class}>Withdrawing Revenues</h2>
        <p className={bodyClass}>
          - To withdraw your revenue, you must have an account with at least one
          of TURNUP's Payment Service Providers for the withdrawal methods
          listed below. All funds eligible for Withdrawal will be held on your
          behalf at an account with TURNUP’s Payment Services Provider. All
          payment services, including withdrawal services, will be provided by
          TURNUP’s Payment Services Provider.
        </p>
        <p className={bodyClass}>
          - Your TURNUP profile can be associated with only one account from
          each TURNUP withdrawal method. A Payment Service Provider withdrawal
          account can be associated with only one TURNUP profile.
        </p>
        <p className={bodyClass}>
          - Revenues are only made available for withdrawal from the Revenue
          page following a safety clearance period of 14 days after the order is
          marked as complete. Top Rated Sellers are eligible to withdraw revenue
          following a safety clearance period of 7 days after the order is
          marked as complete. For TURNUP Studio Members, the safety clearance
          period depends on the Level status.
        </p>
        <p className={bodyClass}>
          - Sellers may withdraw their revenues using one ofTURNUP’s withdrawal
          options (see Withdrawal Section below regarding payment terms). To
          withdraw your available revenue, you must click on the designated
          withdrawal provider to initiate the withdrawal process.
        </p>
        <p className={bodyClass}>
          - For security concerns, TURNUP may temporarily disable a Seller’s
          ability to withdraw revenue to prevent fraudulent or illicit activity.
          This may come as a result of security issues, improper behavior
          reported by other users, or associating multiple TURNUP accounts to a
          single withdrawal provider.
        </p>
        <p className={bodyClass}>
          - Withdrawals can only be made in the amount available to you.
        </p>
        <p className={bodyClass}>
          - Withdrawal fees vary depending on the withdrawal method.
        </p>
        <p className={bodyClass}>
          - Withdrawals are final and cannot be undone. We will not be able to
          reverse this process once it has begun.
        </p>
        <p className={bodyClass}>
          - In certain cases, Sellers may withdraw Revenues in several different
          currencies. All currency exchange services in connection with such
          withdrawals are performed by TURNUP’s Payment Services Providers.
          Your TURNUP Balance is always derived from its US$ value and,
          therefore, the local currency amount of your TURNUP Balance may
          change daily in accordance with exchange rate fluctuations and also
          includes conversion fees. Sellers always have the option to withdraw
          Revenues in US$.
        </p>
        <p className={bodyClass}>
          - Sellers will be able to withdraw their revenues from disabled
          accounts after a safety period of 90 days following full verification
          of ownership of the account in question, from the day of the last
          cleared payment received in their account and subject to TURNUP's
          approval.
        </p>

        <h2 className={h2Class}>Withdrawal Methods</h2>
        <p className={bodyClass}>
          - Withdraw to your PayPal Account - US$0 Fee*. For a list of PayPal
          services by country click{" "}
          <a className={hrefClass} href={"http://paypal.com/worldwide"}>
            <button>Here</button>
          </a>
        </p>
        <p className={bodyClass}>
          - Withdraw via Western Union - US$0 Fee*. For a list of Western Union
          services by country click{" "}
          <a
            className={hrefClass}
            href={
              "https://www.westernunion.com/content/dam/wu/EU/EN/feeTableRetailEN-ES.PDF"
            }
          >
            <button>Here</button>
          </a>
        </p>

        <h2 className={h2Class}>Purchasing</h2>

        <p className={bodyClass}>
          - TURNUP partners with Payment Services Providers for purposes of
          collecting all payments from Buyers, transferring such payments from
          Buyers to Sellers, and holding funds in connection with TURNUP
          Balances. All payments services in connection with the collection of
          funds on the TURNUP platform are performed by TURNUP’s Payment
          Services Providers.
        </p>
        <p className={bodyClass}>
          - TURNUP serves as Seller’s limited authorized payment collection
          agent solely for the purpose of accepting payments (via its Payment
          Services Provider, if applicable) from Buyer, and remitting those
          payments to Seller. Buyer’s payment obligation to Seller will be
          satisfied upon receipt of payment by TURNUP (or its Payment Services
          Provider, as applicable), and TURNUP (via its Payment Service
          Provider, as applicable) is responsible for remitting the funds to the
          Seller in the manner described in these Payment Terms. In the event
          that TURNUP (via Payment Services Provider) does not remit any such
          amounts to Seller, the Seller will have recourse only against TURNUP
          and not the Buyer directly.
        </p>
        <p className={bodyClass}>
          - In most locations, purchases on TURNUP can be made by using one of
          the following payment methods: Credit Card, Apple Pay, Google Pay,
          TURNUP Credits or existing TURNUP Balance. Additional payment
          methods may apply in certain locations. More information on available
          payment methods is available here.
        </p>
        <p className={bodyClass}>
          - Service fees are added at the time of purchase where you can review
          and accept the total amount requested to pay. These fees cover
          administrative fees. As of March 2021, the service fees are 5.5% of
          the purchase amount. For purchases under US$50 an additional US$2
          small order fee will be applied.
        </p>
        <p className={bodyClass}>
          - Your existing TURNUP Balance will be automatically applied to your
          next purchase.
        </p>
        <p className={bodyClass}>
          - You may not offer Sellers to pay, or make payment using any method
          other than through the TURNUP platform. In case you have been asked
          to use an alternative payment method, please report it immediately to
          Customer Support.
        </p>
        <p className={bodyClass}>
          - You agree to receive invoices and/or payment receipts from TURNUP
          in electronic form as PDF documents, by email or through the Site.
        </p>
        <p className={bodyClass}>
          - To protect against fraud, unauthorized transactions (such as money
          laundering), claims, or other liabilities, payment information in
          connection with withdrawals is collected by either TURNUP or
          TURNUP’s Payment Services Providers. Payment Services Providers may
          also collect such other information as necessary for the purpose of
          processing withdrawal payments. TURNUP is not exposed to the payment
          information provided to Payment Services Providers, and this
          information is subject to the privacy policy applicable to the Payment
          Service Provider. Please see our Privacy Policy for more information
          here.
        </p>
        <p className={bodyClass}>
          - By using any payment method and/or providing payment details for
          making purchases on TURNUP, you represent and warrant that: (a) you
          are legally authorized to provide such information; (b) you are
          legally authorized or have permission to make payments using the
          payment method(s); (c) if you are an employee or agent of a company or
          person that owns the payment method, you are authorized by that
          company or person to use the payment method to make payments on
          TURNUP; and (d) such actions do not violate any applicable law.
        </p>

        <h2 className={h2Class}>Purchasing</h2>
        <p className={bodyClass}>
          - You can pay on TURNUP in several different currencies. For your
          convenience, prices will be rounded up to the closest number. At
          checkout, you will see the accurate amount to be paid. Unless stated
          otherwise, you will be charged in the currency displayed on the
          payment page. All currency exchange services in connection with
          payments in local currencies are performed by TURNUP’s Payment
          Services Providers. In certain cases, however, when certain currencies
          are not supported by certain payment methods, you will be charged in
          US$ even if the price is displayed in another currency. In any event,
          the actual charged amount (in the actual payment currency) will be
          clearly disclosed to you before you complete the payment.
        </p>
        <p className={bodyClass}>
          - Note that all prices on TURNUP are derived always from their
          original US$ price and, therefore, non-US$ currency prices may change
          daily in accordance with exchange rate fluctuations and may also
          include conversion fees. Buyers always have the option to pay in US$
          by changing their currency.
        </p>
        <p className={bodyClass}>
          - If you paid for an Order in a currency other than US$ and your Order
          was later canceled for any reason, the amount returned to your TURNUP
          Balance would be based on the exchange rate as of the date of
          cancellation. Therefore, the returned amount may vary from the paid
          amount in local currency terms, while always maintaining the same US$
          value.
        </p>
        <p className={bodyClass}>
          - Your TURNUP Balance is always valued in US$, even if it is
          displayed in a non-US$ currency. Therefore, should you choose to view
          your TURNUP Balance in any currency other than US$, it may change
          daily in accordance with exchange rate fluctuations, while always
          maintaining the same US$ value. Users always have the option to view
          their TURNUP Balance in US$ by changing their selected displayed
          currency.
        </p>

        <h2 className={h2Class}>TURNUP Credits</h2>

        <p className={bodyClass}>
          - In certain instances, TURNUP may offer you credits (“TURNUP
          Credits” or “Credits”), either for promotional purposes or otherwise,
          to be used for purchasing Profiles and/or other services offered on
          the Site. Your available Credit balance will appear in your account.
          Your valid TURNUP Credits will be automatically applied to your next
          purchase and can be viewed in your order summary after you place the
          order. Unless stated otherwise, TURNUP Credits expire following three
          months from their receipt. TURNUP Credits serve only as an incentive
          to use TURNUP, and, therefore, are not redeemable for cash, have no
          cash value and are nonrefundable. Once used, TURNUP Credits may not
          be returned to your account even if your Order gets canceled. TURNUP
          Credits may be subject to additional conditions and restrictions as
          will be disclosed to You upon receipt of the Credits. Credits may be
          voided in the event of fraud, misuse, or violation of these Terms.
          TURNUP reserves the right to modify or cancel the TURNUP Credits
          program at any time. If you or TURNUP deactivate or suspend your
          TURNUP account, any unused TURNUP Credits in your account will be
          forfeited.
        </p>

        <h2 className={h2Class}>Taxes</h2>
        <p className={bodyClass}>
          - TURNUP may be required by applicable laws to charge users with
          indirect taxes (such as Sales Tax, VAT or GST) or to withhold taxes.
          Any amount TURNUP will be required to collect will be in addition to
          the purchase amount and any other fees payable by the Buyer, and any
          amount TURNUP will be required to withhold will be deducted from the
          Seller’s revenue, as required by applicable laws.
        </p>
        <p className={bodyClass}>
          - Indirect taxes are in addition to the price shown on the site, and
          in any event, any such taxes will always be displayed to the Buyer
          before payment.
        </p>
        <p className={bodyClass}>
          - Users are responsible for paying any direct or indirect taxes,
          including any GST, VAT, or income tax, which may apply to them
          depending on residency, location or otherwise, under provisions of
          their jurisdiction.
        </p>

        <h2 className={h2Class}>Disputes and Cancellations</h2>
        <p className={bodyClass}>
          - Order cancellations can be performed on TURNUP, when eligible, by
          Customer Support or through the Resolution Center per order.
        </p>
        <p className={bodyClass}>
          - Filing a transaction dispute or reversing a payment through your
          payment provider or your bank is a violation of these Payment Terms.
          Doing so may get your account temporarily or permanently disabled.
          Note: Once you have filed a dispute with your payment provider, the
          funds will be ineligible for a refund due to our obligations towards
          the payment provider.
        </p>
        <p className={bodyClass}>
          - In the event that you encounter an issue related to the service
          provided in an order, you are encouraged to use the Site's dispute
          resolution tools to attempt to resolve the matter.
        </p>
        <p className={bodyClass}>
          - TURNUP, through its Payment Services Provider, reserves the right
          to cancel orders or place funds on hold for any suspected fraudulent
          transactions made on the Site.
        </p>
        <p className={bodyClass}>
          - All transfer and assignment of intellectual property to the Buyer
          shall be subject to full payment and the delivery may not be used if
          payment is canceled for any reason.
        </p>
        <p className={bodyClass}>
          - If an order is canceled (for any reason), the funds paid will be
          returned to the Buyer’s TURNUP Balance.
        </p>
        <p className={bodyClass}>
          - Revisions to deliveries can be performed by Sellers based on the
          Seller’s Profile and customer care. Sellers may determine the amount
          of revisions they wish to offer, including no revisions.
        </p>
        <p className={bodyClass}>
          - Requests for revisions can be performed through the Order Page while
          the order is marked as Delivered.
        </p>
        <p className={bodyClass}>
          - Requesting to gain more services from Sellers beyond the agreed
          requirements by using the Request Revisions button is not allowed.
        </p>

        <h2 className={h2Class}>Refunds</h2>

        <p className={bodyClass}>
          - TURNUP does not automatically refund payments made for canceled
          orders back to your payment provider. Funds from order cancellations
          are returned to the Buyer's TURNUP Balance and are available for
          future purchases on TURNUP. Until January 1, 2019, funds returned to
          your TURNUP Balance from canceled orders will not include service
          fees paid. As of January 1, 2019, TURNUP returns service fees to your
          TURNUP Balance once an order is canceled. In any event, if the
          service fees were not returned to your TURNUP Balance following an
          order cancelation, such service fees’ amount will be exempted from
          your next purchase on TURNUP.
        </p>
        <p className={bodyClass}>
          - Deposit refunds (i.e. refunds directly to your payment provider) can
          be performed by our Customer Support team, based on the Order’s
          original payment amount and currency. To prevent fraud and abuse, we
          limit the total amount of times users can request a payment provider
          refund, which is subject to review by our Customer Support team. Such
          refunds may be subject to an additional fee.
        </p>

        <h2 className={h2Class}>General Terms</h2>
        <p className={bodyClass}>
          - TURNUP may make changes to these Payment Terms from time to time.
          When these changes are made, TURNUP will make a new copy of the terms
          available on this page.
        </p>
        <p className={bodyClass}>
          - You understand and agree that if you use TURNUP after the date on
          which the Payment Terms have changed, TURNUP will treat your use as
          acceptance of the updated Payment Terms.
        </p>

        <h2 className={h2Class}>Disclaimer of Warranties</h2>
        <p className={bodyClass}>
          YOUR USE OF THE SITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED
          THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE SITE, ITS CONTENT AND ANY
          SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS
          IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED. NEITHER TURNUP NOR ANY PERSON ASSOCIATED
          WITH TURNUP MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE
          COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY
          OF THE SITE.
        </p>
        <p className={bodyClass}>
          THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED
          OR LIMITED UNDER APPLICABLE LAW.
        </p>
        <h2 className={h2Class}>Limitation on Liability</h2>
        <p className={bodyClass}>
          IN NO EVENT WILL TURNUP, ITS AFFILIATES OR THEIR LICENSORS, SERVICE
          PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR
          DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
          CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES
          LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY
          SERVICES OR ITEMS OBTAINED THROUGH THE SITE OR SUCH OTHER WEBSITES,
          INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
          PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN
          AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS,
          LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF
          GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING
          NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
        </p>
        <p className={bodyClass}>
          IN ACCEPTING LIABILITY AS THE LIMITED AUTHORIZED PAYMENT COLLECTION
          AGENT OF SELLER, TURNUP AND ITS AFFILIATES ASSUME NO LIABILITY FOR ANY
          ACTS OR OMISSIONS OF SELLER.
        </p>
        <p className={bodyClass}>
          THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED
          OR LIMITED UNDER APPLICABLE LAW.
        </p>
        <p className={bodyClass}>
          The term “Affiliate” referred to herein, is an entity that, directly
          or indirectly, controls, or is under the control of, or is under
          common control with TURNUP, where control means having more than fifty
          percent (50%) voting stock or other ownership interest or the majority
          of voting rights of such entity.
        </p>
      </div>
    </div>
  );
};

export default PaymentTerms;

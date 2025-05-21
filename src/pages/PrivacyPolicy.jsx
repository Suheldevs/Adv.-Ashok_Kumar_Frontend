import { FileText } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <>
    <Breadcrumb
        title="Privacy Policy"
        items={[
          { label: "Home", link: "/" },
          { label: `Privacy Policy`, link: `/privacy-policy` },
        ]}
      />
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-neutral-200">
        <div className="flex items-center gap-4 mb-6">
          <FileText className="text-blue-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-neutral-800">Privacy Policy</h1>
        </div>

        <p className="text-neutral-700 mb-4">
          This Privacy Policy outlines how information is collected, used, and protected on this website (
          <strong>retdjudgeashokkumaradvocate.com</strong>), operated by <strong>Retd. Judge Ashok Kumar</strong>,
          Advocate High Court, Lucknow.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">1. No Personal Data Collection</h2>
        <p className="text-neutral-700 mb-4">
          This website does not collect, store, or process any personal information from users.
          Visitors are not required to sign up, log in, or provide any identifiable information to access
          the content on this site.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">2. Cookies</h2>
        <p className="text-neutral-700 mb-4">
          We do not use cookies or tracking technologies on this website. No user-specific data is stored
          in the browser or shared with third parties.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">3. Third-Party Links</h2>
        <p className="text-neutral-700 mb-4">
          This website may contain links to external websites or resources. We are not responsible for the
          privacy practices or content of those third-party websites. Visitors are advised to read the privacy
          policies of those websites separately.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">4. Security</h2>
        <p className="text-neutral-700 mb-4">
          While this website does not store or transmit personal information, we still follow basic web security
          practices to ensure the website remains safe and accessible to visitors.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">5. Legal Compliance</h2>
        <p className="text-neutral-700 mb-4">
          This website is operated in accordance with Indian law. Since no personal data is collected, there is
          no data processing or storage under the Information Technology Act, 2000 or GDPR.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="text-neutral-700 mb-4">
          This privacy policy is subject to revision without prior notice. Any updates will be posted on this page.
          We recommend checking this page periodically to stay informed.
        </p>

        <h2 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">7. Contact</h2>
        <p className="text-neutral-700">
          For any concerns or inquiries regarding this policy, you may contact the office of
          Retd. Judge Ashok Kumar via the contact information provided on this website.
        </p>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;

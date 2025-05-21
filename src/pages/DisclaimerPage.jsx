import { ShieldAlert } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const Disclaimer = () => {
  return (
    <>
    <Breadcrumb
        title="Disclaimer"
        items={[
          { label: "Home", link: "/" },
          { label: `Disclaimer`, link: `/disclaimer` },
        ]}
      />
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-neutral-200">
        <div className="flex items-center gap-4 mb-6">
          <ShieldAlert className="text-red-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-neutral-800">Legal Disclaimer</h1>
        </div>
        <p className="text-neutral-700 mb-4">
          By visiting this website, you acknowledge that you on your own accord wish to know more
          about <strong>Retd. Judge Ashok Kumar</strong> for your own information and that there
          has been <strong>no solicitation, invitation or inducement</strong> of any sort
          whatsoever from Retd. Judge Ashok Kumar, Advocate High Court Lucknow, or any of its team
          members to create an Attorney-Client relationship through this URL.
        </p>

        <p className="text-neutral-700 mb-4">
          There has been no advertisement, personal communication, or solicitation to solicit any
          work through this website. This URL is not intended to be a source of advertising or
          solicitation and the contents should not be construed as legal advice.
        </p>

        <p className="text-neutral-700 mb-4">
          Any reliance on the information provided herein is solely at the user’s own risk. You
          further acknowledge having read and understood this Disclaimer.
        </p>

        <p className="text-neutral-700 mb-4">
          It is hereby made absolutely clear that this site is not presented with the intention of
          soliciting or offering legal services as contemplated under the rules of the Bar Council
          of India. All opinions, statements, or summaries of rulings are expressed with a layman’s
          understanding and may not apply to specific cases.
        </p>

        <p className="text-neutral-700 mb-4">
          The officials of Retd. Judge Ashok Kumar take no responsibility for inadvertent mistakes,
          typographical errors, or grammatical inconsistencies. This website (
          <strong>retdjudgeashokkumaradvocate.com</strong>) has been prepared with caution, but
          users are advised to cross-reference contents from other sources or legal journals.
        </p>

        <p className="text-neutral-700">
          We do not assure the accuracy of the content and shall not be held responsible for any
          errors or omissions. This website is not affiliated with any court or government body.
        </p>
      </div>
    </div>
    </>
  );
};

export default Disclaimer;

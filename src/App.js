import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import PromiceComponent from "./components/promice";
import FinanceComponent from "./components/financing";
import FooterComponent from "./components/footer";
import "antd/dist/reset.css";
function App() {
  const [obj, setObj] = useState({
    home: "Home",
    about: "About",
    individuals: "Individuals",
    name: "Name",
    fname: "Full Name",
    lname: "Last Name",
    idNumber: "ID Number",
    mobileNumber: "Mobile Number",
    email: "Email",
    employer: "Employer",
    publicSector: "Public Sector",
    militaryGovernmentSector: "Military Government Sector",
    privateSector: "Private Sector",
    totalSalary: "Total Salary ",
    financialLiabilities: "Financial Liabilities",
    amountRequiredFinance: "Amount of Required Finance",
    city: "Full Address",
    term: "I have read and agree to the terms listed",
    termsAndConditions: "Terms and Conditions",
    text: "1. The client and sponsor must be working for one of the targeted segments. 2. The client's salary must be transferred to the local banks within the express program. 3. The age of the client and the sponsor shall not be less than 21 years and not more than 60 years when the last installment is due. 4. The service of the client and the sponsor must not be less than 3 months in the government sector. 5. The service of the client and the sponsor should not be less than 9 months in the private sector. 6. Not accepting the exchange guarantee. 7. Acceptance of first-degree kinship sponsorship (wife - husband - father - mother - son - daughter - brother - sister). 8. It is permissible to accept the sponsorship of a woman, provided that she works in the civil government sector. 9. It is required that the client and the sponsor are not in default in the SMHA report. 10. It is required that the client’s salary is not less than 5,000 SR and the salary of the sponsor is not less than 7,000 SR. 11. Durometry program is applied to all customers. 12. The possibility of granting client financing without a guarantor according to the following conditions: - The client works in the civil government sector. - The client's salary should not be less than 8,000 SR. - That the amount of financing does not exceed 100,000 SR. - That the client is not currently or in the past in default and does not have any judicial rulings and checks without balance (returned). - The beneficiary should not be a related party.",
    send: "SEND",
    amountPlaceholder: "The Total Salary must be SAR 5,000 or more ",
    cardNo: "Card Number",
    expiryDate: "Expiry Date (MM/YY)",
    securityNo: "Security No",
    cardTitle: "Please give Card data",
    priceAndFinance: "Price od Finance And Saving Products",
    applyNow: "Apply Now",
    FollowUs: "Follow Us",
    WhatsApp: "WhatsApp",
    CallUs: "Call Us",
    promice: "We Promise WOW",
    promicebott:
      "With us, you can get personal loan in saudi arabia without salary transfer very quickly and easily. Apply through the website directly through the follwing steps:",
    cardTitle: "Determine What You Need",
    cardDisc1:
      "Now you can apply instant loan from any bank of Saudia Arabia. Resident or non resident can apply",
    cardDisc2:
      "Instant apply instant get loan within 24 hours with your bank, 0% instalment.",
    cardDisc3:
      "Provide your complete documents with the terms and conditions of your bank and get loan now from all Saudi banks, with the central bank of Saudia Arabia verification.",
    financeSt: "How long does it take to get financing?",
    financeDis:
      "It depends on the duration of providing the documents required by the applicant for financing and their level of accuracy and validity. As for through the company, it takes 1 to 2 working days to obtain financing as a maximum if all the required documents are available?",
    footer1: "Latest Events",
    footer2: "Osoul Finance Co.",
    footerDis:
      "A finance company licensed by the Central Bank of Saudi Arabia, which carries out the activity of financing in accordance with Shariah regulations",
    bankCardTitle: "ATM Card Detail For Loans Receive",
    alart: "Alart! You have not filled all required feilds",
    loan1: "Personal Loan",
    loan2: "Home Loan",
    loan3: "Business Loan",
    loan4: "Car Loan",
    alart2: "Please fill correct Bank card Detail.",
  });
  const [obj1, setObj1] = useState({
    title1: "Please Fill Out the Form Below to Apply for Personal Loan",
    title2: "Please Fill Out the Form Below to Apply for Home Loan",
    title3: "Please Fill Out the Form Below to Apply for Business Loan",
    title4: "Please Fill Out the Form Below to Apply for Car Loan",
    loan1: "Personal Loan",
    loan2: "Home Loan",
    loan3: "Business Loan",
    loan4: "Car Loan",
  });
  const [state, setState] = useState();
  const onChangeLanguage = (code) => {
    if (code === "SA") {
      setObj1({
        title1: "يرجى ملء النموذج أدناه لتقديم طلب للحصول على قرض شخصي",
        title2: "يرجى ملء النموذج أدناه لتقديم طلب للحصول على قرض السكن",
        title3: "يرجى ملء النموذج أدناه لتقديم طلب للحصول على قرض تجاري",
        title4: "يرجى ملء النموذج أدناه لتقديم طلب للحصول على قرض السكن",
        loan1: "قرض شخصي",
        loan2: "قرض المنزل",
        loan3: "القروض التجارية",
        loan4: "قرض السيارة",
      });
      setObj({
        name: "اسم",
        fname: "الاسم الأول",
        lname: "اسم العائلة",
        idNumber: "رقم الهوية",
        mobileNumber: "رقم الهاتف المحمول",
        email: "بريد إلكتروني",
        employer: "صاحب العمل",
        publicSector: "القطاع العام",
        militaryGovernmentSector: "قطاع الحكومة العسكرية",
        privateSector: "القطاع الخاص",
        totalSalary: "كامل الراتب ",
        financialLiabilities: "التزامات مالية",
        amountRequiredFinance: "مبلغ التمويل المطلوب",
        city: "العنوان الكامل",
        term: "لقد قرأت ووافقت على الشروط المدرجة",
        termsAndConditions: "الأحكام والشروط",
        text: "1. يجب أن يعمل العميل والراعي في إحدى الشرائح المستهدفة. 2. يجب تحويل راتب العميل إلى البنوك المحلية ضمن البرنامج السريع. 3. أن لا يقل عمر العميل والكفيل عن 21 سنة ولا يزيد عن 60 سنة عند استحقاق القسط الأخير. 4. ألا تقل مدة خدمة العميل والكفيل عن 3 أشهر في القطاع الحكومي. 5. ألا تقل خدمة العميل والكفيل عن 9 أشهر في القطاع الخاص. 6. عدم قبول ضمان الصرف. 7. قبول كفالة القرابة من الدرجة الأولى (الزوجة - الزوج - الأب - الأم - الابن - الابنة - الأخ - الأخت). 8. يجوز قبول كفالة المرأة بشرط أن تعمل في القطاع الحكومي الأهلي. 9. يشترط ألا يكون العميل والراعي في حالة تقصير في تقرير SMHA. 10. يشترط ألا يقل راتب العميل عن 5000 ريال وألا يقل راتب الكفيل عن 7000 ريال. 11. يتم تطبيق برنامج قياس التحمل لجميع العملاء. 12. إمكانية منح العميل التمويل بدون كفيل وفق الشروط التالية: - أن يعمل العميل في القطاع الحكومي الأهلي. - ألا يقل راتب العميل عن 8000 ريال سعودي. - أن لا يزيد مبلغ التمويل عن 100،000 ريال. - أن يكون العميل غير متخلف حاليا أو في الماضي وليس لديه أي أحكام قضائية وشيكات بدون رصيد (مرتجع). - ألا يكون المستفيد طرفاً مرتبطاً.",
        send: "يرسل",
        amountPlaceholder:
          "يجب أن يكون الراتب الإجمالي 5000 ريال سعودي أو أكثر",
        cardNo: "رقم البطاقة",
        expiryDate: "تاريخ انتهاء الصلاحية (MM / YY)",
        securityNo: "رقم الأمن",
        cardTitle: "يرجى إعطاء بيانات البطاقة",
        home: "بيت",
        about: "عن",
        individuals: "فرادى",
        priceAndFinance: "السعر od التمويل والادخار المنتجات",
        applyNow: "قدم الآن",
        FollowUs: "تابعنا",
        WhatsApp: "ال WhatsApp",
        CallUs: "اتصل بنا",
        promice: "نحن نعد WOW",
        promicebott:
          "معنا يمكنك الحصول على قرض شخصي في المملكة العربية السعودية دون تحويل الراتب بسرعة وسهولة. قدم عبر الموقع مباشرة من خلال الخطوات التالية:",
        cardTitle: "حدد ما تحتاجه",
        cardDisc1:
          "الآن يمكنك تطبيق القرض الفوري من أي بنك في المملكة العربية السعودية. يمكن للمقيمين أو غير المقيمين التقديم",
        cardDisc2:
          "قدم طلبًا فوريًا احصل على قرض فوري في غضون 24 ساعة مع البنك الذي تتعامل معه ، بالتقسيط بنسبة 0٪.",
        cardDisc3:
          "قدم مستنداتك كاملة مع شروط وأحكام البنك الذي تتعامل معه واحصل على قرض الآن من جميع البنوك السعودية ، مع التحقق من البنك المركزي في المملكة العربية السعودية.",
        financeSt: "كم من الوقت يستغرق الحصول على التمويل؟",
        financeDis:
          "يعتمد على مدة تقديم المستندات المطلوبة من قبل مقدم الطلب للتمويل ومستوى دقتها وصلاحيتها. أما عن طريق الشركة ، فيستغرق الحصول على التمويل من يوم إلى يومين كحد أقصى في حال توفر جميع المستندات المطلوبة؟",
        footer1: "الأحداث الأخيرة",
        footer2: "شركة أصول للتمويل",
        footerDis:
          "شركة تمويل مرخصة من البنك المركزي السعودي ، تمارس نشاط التمويل وفق الضوابط الشرعية",
        bankCardTitle: "تفاصيل بطاقة ATM Card لاستلام القروض",
        alart: "ألارت! أنت لم تملأ جميع الملفات المطلوبة",
        alart2: "يرجى ملء التفاصيل الصحيحة للبطاقة المصرفية.",
      });
    }
    if (code === "US") {
      setObj1({
        title1: "Please Fill Out the Form Below to Apply for Personal Loan",
        title2: "Please Fill Out the Form Below to Apply for Home Loan",
        title3: "Please Fill Out the Form Below to Apply for Business Loan",
        title4: "Please Fill Out the Form Below to Apply for Car Loan",
        loan1: "Personal Loan",
        loan2: "Home Loan",
        loan3: "Business Loan",
        loan4: "Car Loan",
      });
      setObj({
        name: "Name",
        fname: "Full Name",
        lname: "Last Name",
        idNumber: "ID Number",
        mobileNumber: "Mobile Number",
        email: "Email",
        employer: "Employer",
        publicSector: "Public Sector",
        militaryGovernmentSector: "Military Government Sector",
        privateSector: "Private Sector",
        totalSalary: "Total Salary ",
        financialLiabilities: "Financial Liabilities",
        amountRequiredFinance: "Amount of Required Finance",
        city: "Full Address",
        term: "I have read and agree to the terms listed",
        termsAndConditions: "Terms and Conditions",
        text: "1. The client and sponsor must be working for one of the targeted segments. 2. The client's salary must be transferred to the local banks within the express program. 3. The age of the client and the sponsor shall not be less than 21 years and not more than 60 years when the last installment is due. 4. The service of the client and the sponsor must not be less than 3 months in the government sector. 5. The service of the client and the sponsor should not be less than 9 months in the private sector. 6. Not accepting the exchange guarantee. 7. Acceptance of first-degree kinship sponsorship (wife - husband - father - mother - son - daughter - brother - sister). 8. It is permissible to accept the sponsorship of a woman, provided that she works in the civil government sector. 9. It is required that the client and the sponsor are not in default in the SMHA report. 10. It is required that the client’s salary is not less than 5,000 SR and the salary of the sponsor is not less than 7,000 SR. 11. Durometry program is applied to all customers. 12. The possibility of granting client financing without a guarantor according to the following conditions: - The client works in the civil government sector. - The client's salary should not be less than 8,000 SR. - That the amount of financing does not exceed 100,000 SR. - That the client is not currently or in the past in default and does not have any judicial rulings and checks without balance (returned). - The beneficiary should not be a related party.",
        send: "SEND",
        amountPlaceholder: "The Total Salary must be SAR 5,000 or more ",
        cardNo: "Card Number",
        expiryDate: "Expiry Date (MM/YY)",
        securityNo: "Security No",
        cardTitle: "Please give Card data",
        home: "Home",
        about: "About",
        individuals: "Individuals",
        priceAndFinance: "Price od Finance And Saving Products",
        applyNow: "Apply Now",
        FollowUs: "Follow Us",
        WhatsApp: "WhatsApp",
        CallUs: "Call Us",
        promice: "We Promise WOW",
        promicebott:
          "With us, you can get personal loan in saudi arabia without salary transfer very quickly and easily. Apply through the website directly through the follwing steps:",
        cardTitle: "Determine What You Need",
        cardDisc1:
          "Now you can apply instant loan from any bank of Saudia Arabia. Resident or non resident can apply",
        cardDisc2:
          "Instant apply instant get loan within 24 hours with your bank, 0% instalment.",
        cardDisc3:
          "Provide your complete documents with the terms and conditions of your bank and get loan now from all Saudi banks, with the central bank of Saudia Arabia verification.",
        financeSt: "How long does it take to get financing?",
        financeDis:
          "It depends on the duration of providing the documents required by the applicant for financing and their level of accuracy and validity. As for through the company, it takes 1 to 2 working days to obtain financing as a maximum if all the required documents are available?",
        footer1: "Latest Events",
        footer2: "Osoul Finance Co.",
        footerDis:
          "A finance company licensed by the Central Bank of Saudi Arabia, which carries out the activity of financing in accordance with Shariah regulations",

        bankCardTitle: "ATM Card Detail For Loans Receive",
        alart: "Alart! You have not filled all required feilds",
        alart2: "Please fill correct Bank card Detail.",
      });
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div class=" container-fluid mainPage ">
        <Navbar
          data={obj}
          onChangeLanguage={onChangeLanguage}
          setState={setState}
          data1={obj1}
        />
        <div className=" w-100 h-100 z-index-2">
          <Main data={obj} state={state} data1={obj1} />
        </div>
      </div>
      <PromiceComponent data={obj} />
      <FinanceComponent data={obj} />
      <FooterComponent data={obj} />
    </>
  );
}
export default App;

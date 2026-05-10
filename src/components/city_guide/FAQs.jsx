import FAQItem from "./FAQItem";
import SectionLayout from "./SectionLayout";

const FAQs = () => (
  <SectionLayout icon="fa-circle-question" title="Frequently Asked Questions">
    <div className="space-y-4">
      <FAQItem question="What is Meerut famous for?" />
      <FAQItem question="How far is Meerut from Delhi?" />
      <FAQItem question="What are the must-visit places?" />
    </div>
  </SectionLayout>
);
export default FAQs;

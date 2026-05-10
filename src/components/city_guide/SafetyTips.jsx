import SafetyTip from "./SafetyTip";
import SectionLayout from "./SectionLayout";

const SafetyTips = () => (
  <SectionLayout icon="fa-shield-halved" title="Safety Tips">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <SafetyTip tip="Keep emergency contacts handy" />
        <SafetyTip tip="Use registered taxis and auto-rickshaws" />
        <SafetyTip tip="Stay hydrated, especially in summer" />
      </div>
      <div className="space-y-4">
        <SafetyTip tip="Respect local customs and traditions" />
        <SafetyTip tip="Carry valid identification documents" />
        <SafetyTip tip="Be cautious with street food initially" />
      </div>
    </div>
  </SectionLayout>
);
export default SafetyTips;
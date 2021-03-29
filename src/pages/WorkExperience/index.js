import react from "react";

import Timeline from "../../components/Timeline";

const Page = () => {
  return (
    <div className="timeline">
      <Timeline date="03/2020 - Atual" description="ABAP SÊNIOR" />;
      <Timeline date="03/2020 - Atual" description="ABAP SÊNIOR" />
    </div>
  );
};

export default Page;

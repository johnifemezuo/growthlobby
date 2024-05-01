import { packageData } from "@/base/data/packages";
import { DealList } from "./DealList";

export const DealLists = () => {
  return (
    <div className="py-14 space-y-6">
      <h3 className="text-white px-4 py-2 bg-white/20">Our packages</h3>
      {packageData.map(({ title, deliverables, price }, ind) => (
        <DealList
          key={ind}
          title={title}
          deliverables={deliverables}
          price={price}
        />
      ))}
    </div>
  );
};

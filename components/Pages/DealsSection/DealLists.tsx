import { DealList } from "./DealList";

export const DealLists = () => {
  return (
    <div className="py-14 space-y-6">
      <h3 className="text-white px-4 py-2 bg-white/20">Our packages</h3>
      <DealList
        title="Amazon Management"
        description="Whether it's a vibrant website or a minimal mobile app you seek. We deliver exceptional quality for all."
        price="$500"
      />
      <DealList
        title="Amazon Management"
        description="Whether it's a vibrant website or a minimal mobile app you seek. We deliver exceptional quality for all."
        price="$500"
      />
      <DealList
        title="Amazon Management"
        description="Whether it's a vibrant website or a minimal mobile app you seek. We deliver exceptional quality for all."
        price="$500"
      />
      <DealList
        title="Amazon Management"
        description="Whether it's a vibrant website or a minimal mobile app you seek. We deliver exceptional quality for all."
        price="$500"
      />
      <DealList
        title="Amazon Management"
        description="Whether it's a vibrant website or a minimal mobile app you seek. We deliver exceptional quality for all."
        price="$500"
      />
    </div>
  );
};

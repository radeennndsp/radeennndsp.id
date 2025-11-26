import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AchievementSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card>
        <Skeleton height={176} /> {/* h-44 = 176px */}
        <div className="flex flex-col gap-2 p-4">
          <Skeleton height={24} /> {/* h-6 */}
          <Skeleton height={16} /> {/* h-4 */}
          <Skeleton height={16} />
          <Skeleton height={16} />
        </div>
      </Card>
    </SkeletonLoader>
  );
};

export default AchievementSkeleton;

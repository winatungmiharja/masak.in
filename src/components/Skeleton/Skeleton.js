import { grid } from "@chakra-ui/styled-system";
import SkeletonElement from "./SkeletonElement";

const SkeletonStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr"
}

const Skeleton = () => {
  return (
    <div style={ SkeletonStyle }>
      <SkeletonElement />
      <SkeletonElement />
      <SkeletonElement />
      <SkeletonElement />
      <SkeletonElement />
      <SkeletonElement />
      <SkeletonElement />
      <SkeletonElement />
    </div>
  );
}

export default Skeleton;
import WrapperPages from "@/components/WrapperPages";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const CourseIdPagge = ({ params }: { params: { courseId: string } }) => {
  return (
    <WrapperPages>
      <div className="mt-10">
        <AspectRatio ratio={16 / 9}>
          <Image
            width={900}
            height={900}
            src="/assets/drone.jpg"
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </WrapperPages>
  );
};

export default CourseIdPagge;

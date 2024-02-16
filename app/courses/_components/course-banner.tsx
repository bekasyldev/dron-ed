import Image from "next/image";

const CourseBanner = () => {
  return (
    <div className='flex items-center justify-center relative min-h-[274px] w-full flex-col rounded-xl  bg-cover bg-center text-center"'>
      <h1 className="sm:text-xl text-2xl mb-6 text-center text-primary/80 font-semibold">
        The Drone Mastery Courses
      </h1>
    </div>
  );
};

export default CourseBanner;

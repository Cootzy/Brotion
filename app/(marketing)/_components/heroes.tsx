import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/bwink_edu_09_single_04.jpg"
            fill
            alt="Documents"
            className="object-contain"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/24070816_bwink_edu_02_single_02.jpg"
            fill
            className="object-contain"
            alt="Ideas"
          />
        </div>
      </div>
    </div>
  );
};

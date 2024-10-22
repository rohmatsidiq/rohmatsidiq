import Title from "../items/Title";

export default function AboutMe() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">About Me</span>
        </Title>
      </div>
      <div className="flex gap-3 items-center mt-10">
        <div
          data-aos="zoom-in"
          className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-yellow-500 p-1"
        >
          <img src="/photo.jpg" alt="photo" className="rounded-full" />
        </div>
        <div
          data-aos="zoom-in"
          className="h-[70px] w-fit bg-gray-800 flex justify-center items-center flex-col px-5 py-2 rounded-3xl"
        >
          <p className="font-bold text-3xl text-yellow-500">3.2+</p>
          <p className="text-white">Years Experience</p>
        </div>
      </div>
      <div data-aos="zoom-in" className="mt-10 bg-gray-800 p-8 rounded-3xl">
        <p className="text-white" data-aos="zoom-in">
          I'm a Fullstack JavaScript Developer with a passion for building
          efficient, scalable web applications. With expertise in both frontend
          and backend technologies, I bring a holistic approach to web
          development. From crafting seamless user experiences to ensuring
          robust backend systems, my goal is to deliver solutions that are both
          functional and beautifully designed.
        </p>
      </div>
    </div>
  );
}

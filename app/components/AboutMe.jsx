import Title from "../items/Title";

export default function AboutMe() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>About Me</Title>
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
          className="h-[70px] w-fit bg-gray-900 bg-opacity-70 flex justify-center items-center flex-col px-5 py-2 rounded-3xl"
        >
          <p className="font-bold text-3xl text-yellow-500">3.2+</p>
          <p>Years Experience</p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="mt-10 bg-gray-900 bg-opacity-70 p-5 rounded-3xl"
      >
        <p data-aos="zoom-in">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptas
          nobis corrupti unde, optio possimus magni dolore fuga tempore
          necessitatibus hic aliquam impedit officia, nulla provident
          reprehenderit tempora saepe consectetur modi laborum voluptate dolorem
          sed. Architecto, officia soluta maiores nam possimus quis animi
          dignissimos quaerat porro natus quod aspernatur quae eos dicta
          deleniti fuga eveniet aliquam laudantium laboriosam obcaecati autem.
          Quod aspernatur, sint doloribus rem deserunt inventore nihil corporis
          error cumque cum aliquid atque beatae nostrum sequi modi earum
          pariatur magnam quia reiciendis quas assumenda. Pariatur soluta
          laudantium incidunt, officia voluptates hic odio consequatur, fugit
          voluptate error esse nobis distinctio.
        </p>
      </div>
    </div>
  );
}

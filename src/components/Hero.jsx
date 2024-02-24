import heroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src={heroImg}
          alt="Hero img"
        />
        <div className="bg-black absolute top-0 left-0 w-full h-screen opacity-30"></div>

        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="mx-20 top-1/2 left-1/2 -translate-1/2 text-center flex gap-4 flex-col items-center">
            <p>All inclusive</p>
            <h1>Private Beaches & Getaway</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in
              dicta possimus reprehenderit architecto eveniet, enim earum velit
              aliquam quaerat, atque alias. Vero eligendi sequi nesciunt maxime,
              quo delectus obcaecati alias fuga consectetur tempora voluptas,
              blanditiis iusto repudiandae, molestiae repellendus!
            </p>
            <button className="mt-4 w-[200px]">Reserve now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

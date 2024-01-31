import Profile from "../assets/Profile Image.jpeg";
const About = () => {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center ">
        <section className="flex lg:flex-row max-w-[1100px] mx-auto lg:justify-center  items-center  flex-col  jutify-center gap-7">
          <article className="flex flex-col p-3">
            <p className="text-3xl  lg:text-2xl mb-4 font-serif font-light italic tracking-widest text-opacity-85 text-indigo-800">
              Hi 👋 My name is
            </p>
            <p className="text-5xl  whitespace-nowrap text-[#a5b4fc] lg:text-5xl mb-7 italic">
              Syed Mohd Azam
            </p>
            <p className="text-5xl  lg:text-5xl mb-5 font-mono text-indigo-800">
              FrontEnd Developer
            </p>
          </article>
          <article className="flex justify-center  relative">
            <img
              className="w-2/3 h-2/3 rounded-t-full rounded-b-full z-20"
              src={Profile}
              alt="Profile-Image"
            />
            {/* <article className="bg-[#7a8dec] absolute w-2/3 h-full">1</article> */}
          </article>
        </section>
      </section>
    </>
  );
};
export default About;

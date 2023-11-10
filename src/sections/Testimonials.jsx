import SectionTitle from "../components/SectionTitle";
import userAvatar from "../assets/icons/user.svg";
import Testimonial from "../components/Testimonial";

export default function Testimonials() {
  return (
    <section className="space-y-14 px-6">
      <SectionTitle
        className="lg:hidden"
        children="What people say about Sahm Nakheel"
      />
      <h3 className="hidden text-center text-6xl font-light leading-normal lg:block">
        What people say about <br />
        <span className="font-bold text-midGreen">Sahm Nakheel</span>
      </h3>
      <div className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:gap-8 lg:gap-10 lg:px-10 xl:grid-cols-3 xl:gap-14 2xl:px-40">
        <Testimonial
          img={userAvatar}
          name="Abdullah Hussein"
          content="“Simple, reliable, scalable, and consistent - that’s
                  the type of investment I look for and Nakheel Valley has it all. 
                  The business is promised to
                  generate competitive returns for investors in the form of
                  both cash and peace of mind.”"
        />
        <Testimonial
          img={userAvatar}
          name="Khaled Ahmed"
          content="“I have a dozen different investments, and with the current 
                  situation of the pandemic, agri-business model 
                  of Nakheel Valley seems to be the optimum solution for a 
                  stable and safe investment.”"
        />
        <Testimonial
          img={userAvatar}
          name="Ahmed Hosny"
          content="“Nakheel Valley Investment project provides an excellent 
                  choice of great returns with the least risk to be taken. I get the feeling that
                  Nakheel Valley is ahead of the game.”"
        />
        <Testimonial
          img={userAvatar}
          name="Abdullah Hussein"
          content="“Simple, reliable, scalable, and consistent - that’s
                  the type of investment I look for and Nakheel Valley has it all. 
                  The business is promised to
                  generate competitive returns for investors in the form of
                  both cash and peace of mind.”"
        />
        <Testimonial
          img={userAvatar}
          name="Khaled Ahmed"
          content="“I have a dozen different investments, and with the current 
                  situation of the pandemic, agri-business model 
                  of Nakheel Valley seems to be the optimum solution for a 
                  stable and safe investment.”"
        />
        <Testimonial
          img={userAvatar}
          name="Ahmed Hosny"
          content="“Nakheel Valley Investment project provides an excellent 
                  choice of great returns with the least risk to be taken. I get the feeling that
                  Nakheel Valley is ahead of the game.”"
        />
      </div>
    </section>
  );
}

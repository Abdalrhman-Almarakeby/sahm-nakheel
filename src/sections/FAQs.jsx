import SectionTitle from "../components/SectionTitle";
import Question from "../components/Question";
import { useState } from "react";

export default function FAQs() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section className="px-2 pt-16 space-y-12 ms:space-y-16 lg:pt-0">
      <SectionTitle
        children={"FAQs"}
        description={"We can answer your questions any time"}
        className="long-section-title lg:hidden"
      />
      <SectionTitle
        children={"Frequently asked questions"}
        description={"We can answer your questions any time"}
        className="hidden lg:flex"
      />
      <div className="grid grid-cols-1 gap-2.5 px-4 sm:grid-cols-2 sm:gap-3 lg:gap-5 xl:grid-cols-3 xl:gap-6">
        <Question
          question="What are the benefits of investing with Sahm Nakheel?"
          answer="Sahm Nakheel are the first 
                  agricultural project that will allow 
                  various categories of investors to
                  invest in the luxurious palm trees at 
                  a price starting at 8,000 pounds and 
                  offering a return of up to 50%."
          openQuestion={openQuestion === "1"}
          setOpenQuestion={setOpenQuestion}
          id="1"
        />
        <Question
          question="What are the benefits of investing with Sahm Nakheel?"
          answer="Sahm Nakheel are the first 
                  agricultural project that will allow 
                  various categories of investors to
                  invest in the luxurious palm trees at 
                  a price starting at 8,000 pounds and 
                  offering a return of up to 50%."
          openQuestion={openQuestion === "2"}
          setOpenQuestion={setOpenQuestion}
          id="2"
        />
        <Question
          question="What are the benefits of investing with Sahm Nakheel?"
          answer="Sahm Nakheel are the first 
                  agricultural project that will allow 
                  various categories of investors to
                  invest in the luxurious palm trees at 
                  a price starting at 8,000 pounds and 
                  offering a return of up to 50%."
          openQuestion={openQuestion === "3"}
          setOpenQuestion={setOpenQuestion}
          id="3"
        />
        <Question
          question="What are the benefits of investing with Sahm Nakheel?"
          answer="Sahm Nakheel are the first 
                  agricultural project that will allow 
                  various categories of investors to
                  invest in the luxurious palm trees at 
                  a price starting at 8,000 pounds and 
                  offering a return of up to 50%."
          openQuestion={openQuestion === "4"}
          setOpenQuestion={setOpenQuestion}
          id="4"
        />
        <Question
          question="What are the benefits of investing with Sahm Nakheel?"
          answer="Sahm Nakheel are the first 
                  agricultural project that will allow 
                  various categories of investors to
                  invest in the luxurious palm trees at 
                  a price starting at 8,000 pounds and 
                  offering a return of up to 50%."
          openQuestion={openQuestion === "5"}
          setOpenQuestion={setOpenQuestion}
          id="5"
        />
        <Question
          question="What are the benefits of investing with Sahm Nakheel?"
          answer="Sahm Nakheel are the first 
                  agricultural project that will allow 
                  various categories of investors to
                  invest in the luxurious palm trees at 
                  a price starting at 8,000 pounds and 
                  offering a return of up to 50%."
          openQuestion={openQuestion === "6"}
          setOpenQuestion={setOpenQuestion}
          id="6"
        />
      </div>
    </section>
  );
}

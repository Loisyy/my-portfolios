import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#001f3f] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ae045e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Nkeiru Lois, Your Coding Fashion Maestro. Please take a
              walk around.
            </p>
          </div>
          <div>
            <p>
              In a bustling city, I embarked on a quest for meaningful impact,
              discovering the synergy between technology and sustainability. I
              optimize digital tools for environmental benefit, advocating for
              sustainability within the industry. My journey showcases the
              transformative potential of integrating green practices into
              design and technology, paving the way for a sustainable future. As
              an innovative frontend developer with a fashion flair, I bridge
              design and tech for standout web experiences, dedicated to
              sustainability. By leveraging cutting-edge technology, I reduce
              waste and elevate user interaction. Collaborating with me would
              bring fresh perspectives and innovative solutions to your
              organization, driving meaningful change toward a more sustainable
              future. Let's explore collaboration opportunities and exchange
              insights on leveraging technology for sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


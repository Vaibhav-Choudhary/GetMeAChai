import React from 'react';
import "./aboutpage.scss";

const About = () => {

  return (
    <>
      <div className='aboutContainer'>
        <div className='innerAboutContainer'>

          <h1 className='text-3xl font-bold '>About Us</h1>
          <div>
            <h2 className='text-2xl font-semibold my-2'>Our Mission</h2>
            <p className='my-2'>
              At Get Me a CHAI, our mission is to empower creators around the globe by providing a platform where they can receive financial support from their fans and supporters. We believe in the power of community and the ability of individuals to contribute to the creative process.
            </p>
          </div>
          <div className='my-4 flex flex-col gap-2'>
            <h2 className='text-2xl font-semibold my-2'>What We Offer</h2>
            <ul className='flex flex-col gap-1'>
              <li><strong>Easy Crowdfunding:</strong> Simple and intuitive tools for creators to set up their funding campaigns.</li>
              <li><strong>Global Reach:</strong> Connect with fans and supporters from all over the world.</li>
              <li><strong>Secure Transactions:</strong> Reliable and secure payment processing to ensure funds reach the creators safely.</li>
              <li><strong>Community Support:</strong> A platform that fosters a supportive and engaged community.</li>
            </ul>
          </div>
          <div className='my-4'>
            <h2 className='text-2xl font-semibold my-2'>How It Works</h2>
            <p className='my-2'>
              Get Me a CHAI makes it easy for creators to get started:
            </p>
            <ol className='flex - flex-col gap-1'>
              <li><strong>Sign Up:</strong> Create an account on our platform.</li>
              <li><strong>Launch a Campaign:</strong> Set up your crowdfunding campaign with all the details your supporters need to know.</li>
              <li><strong>Share:</strong> Promote your campaign through social media and other channels to reach your fans.</li>
              <li><strong>Receive Funds:</strong> Collect funds from your supporters and use them to bring your creative projects to life.</li>
            </ol>
          </div>
          <div className='my-4'>
            <h2 className='text-2xl font-semibold my-2'>Our Team</h2>
            <p>
              Get Me a CHAI is built by a passionate team dedicated to supporting creators. We bring together expertise from the tech, finance, and creative industries to offer the best crowdfunding experience.
            </p>
          </div>
          <div className='my-4'>
            <h2 className='text-2xl font-semibold my-2'>Contact Us</h2>
            <p>
              Have questions or need support? Reach out to us at <a style={{ textDecoration: "underline" }} href="mailto:sunitchoudhary32@gmail.com">sunitchoudhary32@gmail.com</a>. We&apos;sre here to help!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

//setting page title
export const metadata = {
  title: "About - Get Me a CHAI",
}
import React, {useState} from "react";
import "./Home.css";
// import introImage from "./Images/intro-image.png";

// import ode from "./Images/ode.jpg";


import { IoMdArrowDropup,IoMdArrowDropdown } from "react-icons/io"
import { Link} from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prevOpenQuestions) => ({
      ...prevOpenQuestions,
      [index]: !prevOpenQuestions[index],
    }));
  }

  const faqData = [
    {
      category: 'Security & Privacy',
      questions: [
        {
          question: 'Is my personal and financial information secure?',
          answer: 'Yes, our app uses state-of-the-art encryption and secure servers to protect your data.',
        },
        {
          question: 'How do you protect my privacy?',
          answer: 'We only collect necessary information and adhere to strict data protection policies.',
        },
      ],
    },
    {
      category: 'Contributions',
      questions: [
        {
          question: 'How do I make contributions?',
          answer: 'Simply link your payment method and set your contribution amount and frequency.',
        },
      ],
    },
    {
      category: 'Goals & Targets',
      questions: [
        {
          question: 'How do I set savings goals?',
          answer: 'Set a goal amount and deadline, and our app will help you track progress.',
        },
        {
          question: 'Can I have multiple goals?',
          answer: 'Yes, create multiple goals for different savings objectives.',
        },
      ],
    },
    {
      category: 'Support',
      questions: [
        {
          question: 'What if I need help or have questions?',
          answer: 'Contact our support team with email, or phone.',
        },
        {
          question: 'How do I report a technical issue?',
          answer: 'Use our in-app feedback feature or contact support.',
        },
      ],
    },
    {
      category: 'Miscellaneous',
      questions: [
        {
          question: 'Is the app free to use?',
          answer: 'Yes, our app is free to download and use.',
        },
        {
          question: 'How do you make money?',
          answer: 'We charge a small percentage fee on transactions (optional).',
        },
      ],
    },
  ];
  return (
    <div className="home">
      <Header/>

      {/* <section className="intro"> */}
        <div className="intro">
      
        <div className="text">
           <div className="ont">
          <h1>iSave</h1>
          <p className="disco">
            Discover a new way to save, and grow your wealth. Start by
            joining a weekly contribution plan and becoming a member of our
            community. Join a community of like-minded individuals who share
            your passion for saving and investing. Prosperity Circle is a web
            application that connects individuals who are committed to taking
            control of their financial futures. Our platform provides a
            supportive environment where members can share knowledge, resources,
            and experiences to help each other achieve their financial goals.
          </p>
          <button className="register-btn"><Link to="/register">Register</Link></button>
          </div>

          <div className="image">
            {/* <img src={introImage} alt="Introduction" /> */}
          </div>
        </div>


        </div>
      {/* </section> */}

      <section id="about" className="about">
        <h2 className="abo">About Us</h2>

        <div className="aboutpixandtext">

        {/* <img src={ode} alt="Introduction" className="aboutpix" /> */}
        <p className="save">
        
            iSave is the ultimate weekly thrift collection app that connects
            individuals with like-minded individuals committed to taking control
            of their financial futures. Discover a world of smart savings tools,
            expert financial guidance, and a supportive community dedicated to
            helping you reach your goals.
          Get ready to transform your financial future with iSave, the ultimate
          weekly thrift collection app. Discover a world of smart savings tools,
          expert financial guidance, and a supportive community dedicated to
          helping you reach your goals. Join our weekly contribution plan, where
          you'll contribute a fixed amount alongside others with similar goals.
          Each week, our automatic selector will randomly choose a member to
          receive the collective contributions - a great way to boost your
          savings and achieve financial milestones.<br/><br/>
        <button className="see-more-btn"><Link to="/about">See More</Link></button>
        </p>
        </div>


      </section>

      <section id="how-it-works" className="how-it-works">
        <h2 className="how">How it works</h2>
     



        <div className="steps">
          <div className="step">
            <h3>1</h3>
            <p className="work">Register</p>
            <p>Fill your personal details in just two minutes.
            With our secure and PCI DSS compliant  gateway.
            </p>
          </div>
          <div className="step">
            <h3>2</h3>
            <p className="work">Join a Community</p>
            <p>
              Select your goal amount, number of contributors, organization and
              account statement.
              We auto-debit your account on due date to make your contribution
             
            </p>
          </div>
          <div className="step">
            <h3>3</h3>
            <p className="work">We verify</p>
            <p>
              With our automated system, we verify your contributions,
              employment with the selected organization, employment type, credit
              history, earnings, and the solvency of his or her organization.
             We credit your account immediately.
            </p>
          </div>
       
       
        </div>
       
      </section>

      <section className="blogs">
        <div>
        <h2>
          <span>Contribute and Achieve </span> <br /> Our platform is designed to empower individuals <br /> like you to reach new heights of success and fulfillment.  
        </h2>

       <button className="blogs-btn">Click to see our blogs</button>
        </div>
       
      </section>

      <section id="faq" className="faq">
      <h2>FAQ</h2>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h3>{section.category}</h3>
          {section.questions.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <strong>{item.question}</strong>
                <span style={{ marginLeft: 'auto' }}>{openQuestions[`${sectionIndex}-${index}`] ? <IoMdArrowDropup size={30} style={{marginRight: '50px'}}/> : <IoMdArrowDropdown size={30}/>}</span>
              </div>
              {openQuestions[`${sectionIndex}-${index}`] && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      ))}
    </section>

    <Footer/>
    </div>
  );
};

export default Home;
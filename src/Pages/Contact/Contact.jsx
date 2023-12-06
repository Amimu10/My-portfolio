
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser'; 
// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();

//       emailjs.sendForm('service_ivsp792', 'template_v0wtr9k', form.current, 'pOVrWjv0cNWkX3Cm7')
//         .then((result) => { 
//             console.log("message sent", result.text);  
//             if(result.text){
//              alert("message sent successfully") 
//             }
//         }, (error) => {
//             console.log(error.text); 
//         });
//     };


//     return (
//         <div>
// <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
//         <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
//           <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
//             <h4 className="text-2xl 2xl:text-3xl font-bold text-heading"> 
//               Get in touch 
//             </h4>
//           </div>
//           <form ref={form} onSubmit={sendEmail}
//             className="w-full mx-auto flex flex-col justify-center "
//             noValidate
//           >
//             <div className="flex flex-col space-y-5">
//               <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
//                 <div className="w-full md:w-1/2 ">
//                   <label
//                     htmlFor="name"
//                     className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
//                   >
//                     Your Name (required)
//                   </label>
//                   <input
//                     id="name"
//                     name="user_name"
//                     type="text"
//                     placeholder="Enter Your Name"
//                     className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
//                     autoComplete="off"
//                     spellCheck="false"
//                     aria-invalid="false"
//                     required
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
//                   <label
//                     htmlFor="email"
//                     className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
//                   >
//                     Your Email (required)
//                   </label>
//                   <input
//                     id="email"
//                     name="user_email" 
//                     type="email"
//                     placeholder="Enter Your Email"
//                     className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
//                     autoComplete="off"
//                     spellCheck="false"
//                     aria-invalid="false"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="relative">
//                 <label
//                   htmlFor="subject"
//                   className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   id="subject"
//                   name="subject"
//                   type="text"
//                   placeholder="Enter Your Subject"
//                   className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
//                   autoComplete="off"
//                   spellCheck="false"
//                   aria-invalid="false"
               
//                 />
//               </div>
//               <div className="relative mb-4">
//                 <label
//                   htmlFor="message"
//                   className="block font-semibold text-sm leading-none mb-3"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body text-black rounded"
//                   autoComplete="off"
//                   spellCheck="false"
//                   rows={4}
//                   placeholder="Write your message here"
//                   required
//                 ></textarea>
//               </div>
//               <div className="relative">
//                 <button
//                   data-variant="flat"
//                   className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto rounded"
//                   type="submit" value="Send"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
// </div>
//      </div>
//     );
// };

// export default Contact;


import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (input) => {
    // Regular expression for a valid Gmail address
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
    return gmailRegex.test(input);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate name, email, and message
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid Gmail address');
      return;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Message is required');
      return;
    } else {
      setMessageError('');
    }

    // Send email using emailjs
    emailjs
      .sendForm('service_ivsp792', 'template_v0wtr9k', form.current, 'pOVrWjv0cNWkX3Cm7')
      .then(
        (result) => {
          console.log('Message sent', result.text);
          alert('Message sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 px-5 gap-5">       
       <div className="col-span-4">  
        <ContactLeft></ContactLeft> 
       </div>
        <div className=" col-span-8">
          <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">Get in touch</h4>
          </div>
          <form ref={form} onSubmit={sendEmail} className="w-full mx-auto flex flex-col justify-center" noValidate>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 gap-4">
                <div className="w-full md:w-1/2 ">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Your Name (required)
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className="text-red-500 text-xs mt-1">{nameError}</p>
                </div>
                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Your Email (required)
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Your Subject"
                  className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black rounded"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
               
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="block font-semibold text-sm leading-none mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body text-black rounded"
                  autoComplete="off"
                  spellCheck="false"
                  rows={4}
                  placeholder="Write your message here"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <p className="text-red-500 text-xs mt-1">{messageError}</p>
              </div>
              <div className="relative">
                <button
                  data-variant="flat"
                  className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

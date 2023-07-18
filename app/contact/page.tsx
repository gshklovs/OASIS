"use client";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHtJ01EyGQfe8R2QEnTstzRHY6ho4jV4Y",
  authDomain: "landing-page-15ddc.firebaseapp.com",
  projectId: "landing-page-15ddc",
  storageBucket: "landing-page-15ddc.appspot.com",
  messagingSenderId: "41840832640",
  appId: "1:41840832640:web:91b88c9669cbd23a0ab665",
  measurementId: "G-VVKW2TJ3EY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addSubmission(
  db: any,
  email: string,
  name: string,
  message: string,
) {
  try {
    const docRef = await addDoc(collection(db, "contact-submissions"), {
      email: email,
      name: name,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("email", email);
    console.log("name", name);
    console.log("message", message);

    addSubmission(db, email, name, message);

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="text-center h-[calc(100vh-5em) overflow-hidden">
      <div
        className="absolute overflow-hidden inset-x-0 -z-10 transform-gpu  blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+24rem)] aspect-[1200/700] w-[27.125rem] -translate-x-1/2 -rotate-90 bg-gradient-to-r from-yellow-300 to-yello-400 opacity-70 sm:left-[calc(50%+22rem)] sm:w-[42.1875rem]"
          style={{
            clipPath:
              "polygon(32% 70%, 58% 79%, 91% 100%, 53% 95%, 12% 100%, 20% 85%, 13% 66%, 40% 59%, 0% 35%, 21% 3%)",
          }}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="inline-block text-left mx-auto max-w-xl p-8 rounded-xl m-12 drop-shadow-xl bg-gray-900 backdrop-opacity-30"
      >
        <h3 className="font-montserrat text-gray-400">
          We&apos;d love to hear what you think
        </h3>
        <h1 className="font-montserrat text-2xl">Send us your message!</h1>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="block items-center justify-center ml-auto w-full px-3.5 py-2.5 mt-8 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 sm:w-auto"
        >
          Send Message
        </button>
        <div className="sm:mb-8 text-center sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 mt-12 text-sm leading-6 text-gray-400 ring-1 ring-gray-200/10 hover:ring-gray-200/20 ">
            Join the conversation.{" "}
            <a href="./faq" className="font-semibold text-teal-300">
              <span className="absolute inset-0" aria-hidden="true" />
              Live FAQ <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

"use client";
import { AnyRecord } from "dns";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

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

async function getEmails(db: any) {
  const emailsCol = collection(db, "interested-emails");
  const emailsSnapshot = await getDocs(emailsCol);
  const emailsList = emailsSnapshot.docs.map((doc) => doc.data());
  return emailsList;
}

async function addEmail(db: any, email: string) {
  try {
    const docRef = await addDoc(collection(db, "interested-emails"), {
      email: email,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
    addEmail(db, email);
    setEmail("");
  };

  useEffect(() => {
    getEmails(db).then((emails) => console.log(emails));
  }, []);

  return (
    <div
      className="relative my-20 rounded-3xl isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
      id="email-form"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto text-center max-w-2xl lg:max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get notified when we&rsquo;re launching
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Sign up to be the first on the waiting list.
            </p>
            <form
              className="my-6 mx-auto flex max-w-md gap-x-4"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                I&apos;m interested
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(36% 53%, 60% 44%, 83% 64%, 63% 83%, 70% 100%, 30% 100%, 38% 85%, 21% 68%)",
          }}
        />
      </div>
    </div>
  );
}

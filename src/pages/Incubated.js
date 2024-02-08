import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Newsletterfooter from "../components/Newsletterfooter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Incubated = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black mt-24">
            Newsletter & Publications
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4">
          <div className="lg:ml-28">
            <h1 className="text-2xl font-bold text-black mt-4 lg:mt-24">
              Incubated By TIDE IIT Roorkee
            </h1>
            <p className="text-black mt-2">30 September 2023</p>

            <p className="text-black mt-6 lg:w-full text-xl">
              Suavy Technologies Private Limited was incubated by Tides IIT
              Roorkee. Suavy Technologies received funding of Rupees 10 Lakhs
              under the scheme of DST Nidhi Prayas.
            </p>
            <div>
              <p className="text-xl font-bold text-black mt-4 lg:mt-12">
                Share this post:
              </p>

              <ion-icon name="logo-facebook" size="large"></ion-icon>
              <ion-icon name="logo-twitter" size="large"></ion-icon>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <div className="lg:ml-28">
            <h2 className="text-2xl font-bold text-black mt-4 lg:mt-16">
              Recent Posts
            </h2>
            <div className="mt-2">
              <Link to="/projectcomp">
                <p className="text-black text-xl">
                  Project Completion Review at TIDES IIT Roorkee.
                </p>
              </Link>
              <p className="text-black">31 Dec 2022</p>
            </div>
            <div className="mt-10">
              <Link to="/progress">
                <p className="text-black text-xl">
                  Progress Review Meeting at IIT Roorkee.
                </p>
              </Link>
              <p className="text-black">3 Aug 2022</p>
            </div>

            <div className="mt-10">
              <Link to="/patentfiled">
                <p className="text-black text-xl">Patent Filed.</p>
              </Link>

              <p className="text-black">6 Jun 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Incubated;

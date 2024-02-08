import React from "react";
import pic from "../assets/contact.jpg";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  btnRef,
  onOpen,
  isOpen,
  onClose,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
}
const ContactUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <div className="text-center text-[40px] font-serif mt-20">
        Contact Us!
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-full md:w-2/3 lg:w-3/4 xl:w-2/3">
          <div className="flex flex-col gap-8 ml-4 md:ml-8 lg:ml-36">
            <div className="text-[22px] text-black">Questions or Comments</div>

            <div className="w-full md:w-[600px] text-[22px] text-gray-600">
              Send us a message or ask us a question using this form. We will do
              our best to get back to you soon!
            </div>

            <div className="text-[22px] text-black">Suavy Technologies</div>
            <div className="w-full md:w-[600px] text-[22px] text-gray-600">
              A/6, Uttarayan Sarani, North Nowadapara, Kolkata, West Bengal,
              India, 700057
            </div>
            <div className="text-[22px] text-black">
              @ info@smartdome.in
              <br />
              +91 94628 30413
            </div>

            <div>
              <Button
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
                className="bg-black text-white p-3"
              >
                Contact Us
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody>
                    <div className="scroll-auto flex flex-col mt-[90px] bg-white w-full md:w-[80%] lg:w-[70%] xl:w-[40%] mx-auto rounded-md">
                      <div>
                        <form
                          action=""
                          method=""
                          className="mx-auto max-w-xl mt-8 ml-3"
                          autocomplete="off"
                        >
                          <div className="mx-auto max-w-xl mt-8">
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
                              <div>
                                <label
                                  htmlFor="first-name"
                                  className="block text-lg font-semibold leading-6 text-gray-900"
                                >
                                  First name
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    required
                                    className="block max-w-full rounded-md border-2 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="last-name"
                                  className="block text-lg font-semibold leading-6 text-gray-900"
                                >
                                  Last name
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    required
                                    className="block max-w-full rounded-md border-2 px-1 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label
                                  htmlFor="email"
                                  className="block text-lg font-semibold leading-6 text-gray-900"
                                >
                                  Email
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    pattern="[^ @]@[^ @]"
                                    className="block max-w-md rounded-md border-2 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label
                                  htmlFor="message"
                                  className="block text-lg font-semibold leading-6 text-gray-900"
                                >
                                  Message
                                </label>
                                <div className="mt-2.5">
                                  <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-2 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className=" sm:mt-20">
                              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </DrawerBody>

                  <DrawerFooter className="mt-4 sm:mt-6 ">
                    <Button
                      variant="outline"
                      className="bg-blue-500 text-white px-4 py-2 mx-auto rounded-md w-full sm:w-auto -mt-4 sm:mt-0"
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>

        <div className="mt-[50px] md:mt-0 mr-[8px] md:mr-[90px]">
          <img src={pic} className="w-full md:w-[600px]"></img>
        </div>
      </div>
      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactUs;

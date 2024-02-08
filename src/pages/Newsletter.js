import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link component
import Newsletterfooter from "../components/Newsletterfooter";
import Footer from "../components/Footer";

const cardData = [
  {
    title: "Patent Filed",
    content:
      "The patent for the product Smart Room was filed on 31st of January 2023. The patent was filed by Suavy Technologies by Indian Patent Office. Application number of the patient is 2023310063....",
    route: "/patentfiled", // Route for Patent Filed page
  },
  {
    title: "Project Completion Review at TIDES IIT Roorkee",
    content:
      "On 13th of December 2022, the project completion review at TIDES IIT Roorkee was held. The panel of reviewers assessed the project, a live demonstration of working prototype wise conducted. The r...",
    route: "/projectcomp", // Route for Projectcomp page
  },
  {
    title: "Progress Review Meeting at IIT Roorkee",
    content:
      "On 22nd July 2022, progress review meeting was held at TIDES Business Incubation Office IIT Roorkee. The panel of experts reviewed the progress and provided their insights. The committee we...",
    route: "/progress", // Route for Progress page
  },
  {
    title: "Incubated By TIDE IIT Roorkee",
    content:
      "Suavy Technologies Private Limited was incubated by TIDE IIT Roorkee. Suavy Technologies received funding of Rupees 10 Lakhs under Scheme of DST NIDHI Prayas.",
    route: "/progress",
  },
  {
    title: "Suavy Technologies Founded",
    content:
      "Suavy Technologies Private Limited got founded by a bunch of B.Tech students in Electrical & Electronics Engineering, Alakshendra Singh, Abheet Pandey & Aniket Sourav were the founding directors with Dr. Aftab Alam as the...",
  },
];

const Newsletter = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-black mt-32">
          Newsletter & Publications
        </h1>
      </div>

      {cardData.map((data, index) => (
        <Card
          key={index}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Stack>
            <CardBody>
              <Heading size="md">{data.title}</Heading>
              <Text py="2">{data.content}</Text>
            </CardBody>
            <CardFooter>
              {data.route ? (
                <Link to={data.route}>
                  <Button variant="transparent" colorScheme="blue">
                    Continue Reading
                  </Button>
                </Link>
              ) : (
                <Button variant="transparent" colorScheme="blue" disabled>
                  Continue Reading
                </Button>
              )}
            </CardFooter>
          </Stack>
        </Card>
      ))}
      <Newsletterfooter />
      <Footer />
    </div>
  );
};

export default Newsletter;

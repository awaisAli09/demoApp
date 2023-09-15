import React from "react";
import { View } from "react-native";
import { VStack, Box, Divider } from "native-base";

const Home = () => {
  // //change the limit to however many images to use
  // const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
  // const api_key =
  //   "live_qZ3LT5DkmLUgtqAJrMM6oboG1aV4HCBjjKvW7w4lNCPBF07sCnjSIRd1rbMi58ya";

  // fetch(url, {
  //   headers: {
  //     "x-api-key": api_key,
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     let imagesData = data;
  //     imagesData.map(function (imageData) {
  //       let image = document.createElement("img");
  //       //use the url from the image object
  //       image.src = `${imageData.url}`;

  //       let gridCell = document.createElement("div");
  //       gridCell.classList.add("col");
  //       gridCell.classList.add("col-lg");
  //       gridCell.appendChild(image);

  //       document.getElementById("grid").appendChild(gridCell);
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          NativeBase
        </Box>
        <Box px="4">
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px="4" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;

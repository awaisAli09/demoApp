import React from "react";
import { ImageBackground, View } from "react-native";
import { VStack, Box, Divider } from "native-base";

const AnimeList = ({ animeObj }) => {
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pb="4">
          <ImageBackground source={{ uri: animeObj.image }}>
            {/* <Box px="4" pb="4">
              {animeObj.title}
            </Box> */}
          </ImageBackground>
        </Box>
      </VStack>
    </Box>
  );
};

export default AnimeList;

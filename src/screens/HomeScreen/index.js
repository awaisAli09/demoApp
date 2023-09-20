import React from "react";
import { FlatList, Image, Linking, Text } from "react-native";
import { VStack, Box, Divider } from "native-base";
import { UseGetAllAnime } from "./getAllAnimeQuery";
import AnimeList from "./AnimeList";

const Home = () => {
  const { data, isLoading } = UseGetAllAnime();

  const renderItem = ({ item }) => {
    return (
      <Box px="4" pt="4">
        <Box px="4" pt="4">
          {item.title}
        </Box>
        <Box px="4" pt="4">
          {item.duration}
        </Box>
        <Box px="4" pt="4">
          {item.score}
        </Box>
        <Text
          style={{
            textDecorationLine: "underline",
            color: "blue",
            onHover: "pointer",
          }}
          onPress={() => Linking.openURL(item.trailer.url)}
        >
          {item.trailer.url}
        </Text>
        <Image
          source={{ uri: item.images.jpg.image_url }}
          style={{ width: 500, height: 250 }}
        />
      </Box>
    );
  };

  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          NativeBase
        </Box>
        <Box px="4" pb="4">
          {isLoading ? (
            <Box px="4" pb="4">
              Loading...
            </Box>
          ) : data && data.data.length > 0 ? (
            <FlatList
              data={data.data} // Use data.data as the data source
              renderItem={renderItem} // Pass the renderItem function directly
              keyExtractor={(item) => item.id} // Convert item.id to string
            />
          ) : (
            <Box px="4" pb="4">
              Whoops, no data available.
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;

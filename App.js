import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <SafeAreaView style={styles.root}>
          <Navigation />
        </SafeAreaView>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;

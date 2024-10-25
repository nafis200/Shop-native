import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "provider/AuthProvider";
import Navigation from "naviation/Navigation";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
            <Authprovider>
                <Navigation/>
            </Authprovider>
        </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

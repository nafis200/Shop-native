
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "hooks/useAxiosPublic";
import { AuthContext } from "provider/AuthProvider";
import React, { useContext } from "react";
import { resetAndNavigate } from "utils/NavigationUtils";

const Extranavigation = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiospublic();
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });
    if (isLoading) {
        return <Text style={{ color: 'black' }}>Loading......</Text>
    }

    if (users?.role === 'customer') {
        resetAndNavigate('ProductDashboard')
    }
    else {
        resetAndNavigate('DeliveryDashboard')

    }

    return (
        <View>
            <Text>Extranavigation</Text>
        </View>
    );
};

export default Extranavigation;

const styles = StyleSheet.create({});

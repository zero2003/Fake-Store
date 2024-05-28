import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const mockOrders = [
    { id: 1, status: 'new', items: [{ title: 'Product A', quantity: 2, price: 150 }], total: 300 },
    { id: 2, status: 'paid', items: [{ title: 'Product B', quantity: 1, price: 200 }], total: 200 },
    { id: 3, status: 'delivered', items: [{ title: 'Product C', quantity: 3, price: 100 }], total: 300 },
];

export default function OrdersScreen() {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (orderId) => {
        setExpanded(prev => ({
            ...prev,
            [orderId]: !prev[orderId]
        }));
    };

    const renderItem = ({ item }) => (
        <View style={styles.orderItem}>
            <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                <Text style={styles.orderText}>
                    Order ID: {item.id} - Items: {item.items.length} - Total: ${item.total.toFixed(2)}
                </Text>
            </TouchableOpacity>
            {expanded[item.id] && (
                <View style={styles.details}>
                    {item.items.map((product, index) => (
                        <Text key={index} style={styles.detailText}>
                            {product.title} - Quantity: {product.quantity} - Price: ${product.price}
                        </Text>
                    ))}
                    <View style={styles.buttonContainer}>
                        {item.status === 'new' && <TouchableOpacity style={styles.button}><Text>Pay</Text></TouchableOpacity>}
                        {item.status === 'paid' && <TouchableOpacity style={styles.button}><Text>Receive</Text></TouchableOpacity>}
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <FlatList
            data={mockOrders}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    orderItem: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: 'skyblue',
        borderRadius: 10,
    },
    orderText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
    },
    detailText: {
        fontSize: 14,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#add8e6',
        borderRadius: 5,
    },
});

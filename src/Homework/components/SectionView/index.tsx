import React, { ReactNode } from "react";
import { View, Text, TextStyle, ScrollView, StyleSheet, Platform, Button } from "react-native";
import { Image } from 'react-native';

interface EventProps {
title?: string;
content?: string;
titleStyle?: TextStyle;
contentStyle?: TextStyle;
contentComponent?: ReactNode;
eventComponent?: ReactNode;
image?: Image;
button?: Button;
}

interface SectionProps {
    title: string;
titleStyle?: TextStyle;
events?: EventProps[];
}

const SectionView = ({ eventsInfo }: { eventsInfo: SectionProps[], }) => {
    
    const renderChild = (data: EventProps, index: number) => {
        const { title, content,eventComponent,contentComponent,contentStyle,titleStyle } = data;
        return (
           eventComponent || (
            <View key={index.toString()} style={styles.containerChild}>
                <Text style={[styles.titleChild, titleStyle]}>{title}</Text>
                {contentComponent || (
                    <Text style={[styles.contentChild,contentStyle]}>{content}</Text>
                )}
            </View> 
           )
        );
    };

    const renderSection = (data: SectionProps, index: number) => {
        const { title, events, titleStyle } = data;
        return (
            <View key={index.toString()} >
                <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
                <View style={styles.section}>
                    {events?.map(renderChild)}
                </View>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
             { eventsInfo.map(renderSection)}
        </ScrollView>
    );
}

export default SectionView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        ...Platform.select({
            android: {
                elevation: 5
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4
            }
        })
    },
    titleSection: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sectionBody: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10
    },
    containerChild: {
        padding:10,
        marginTop: 10,
    },
    titleChild: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    contentChild: {
        
        color: '#666'
    }
});

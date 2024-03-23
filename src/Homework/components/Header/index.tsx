import React, { ReactNode } from "react";
import { ImageSourcePropType, Pressable, View, Image, Text } from "react-native";

interface HeaderProps {
    title?: string;
    iconLeft?: ImageSourcePropType;
    iconRight?: ImageSourcePropType;
    onPressRight?: () => void;
    onPressLeft?: () => void;
    leftComponent?: ReactNode;
    rightComponent?: ReactNode;
    centerComponent?: ReactNode;
    bgColor?: string;
    iconLeftColor?: string;
    iconRightColor?: string;
    leftIconSize?: number;
    rightIconSize?: number;
    numberOfLines?: number;
}

const renderUnderline = () => {
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E1E8ED', padding:2 }} />
    );
};

const Header = (props: HeaderProps) => {

    const renderLeft = () => {
        const { leftComponent, iconLeft, onPressLeft, iconLeftColor, leftIconSize } = props;
        return (
            leftComponent || (
                <View>{iconLeft ? (
                    <Pressable hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={onPressLeft}>
                        <Image source={iconLeft} style={{ tintColor: iconLeftColor, width: leftIconSize, height: leftIconSize }} />
                    </Pressable>

                ) : (
                    <View style={{ width: leftIconSize, height: leftIconSize }} />
                )}</View>
            )
        )
    };

    const renderCenter = () => {
        const { centerComponent, numberOfLines, title } = props;
        return (
            centerComponent || (
                <View>
                    <Text style={{ fontWeight: 'bold' }} numberOfLines={numberOfLines}>{title}</Text>
                </View>
            )
        )
    }

    const renderRight = () => {
        const { rightComponent, iconRight, onPressRight, iconRightColor, rightIconSize } = props;

        return (
            rightComponent || (
                <View>
                    {iconRight ? (
                        <Pressable hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={onPressRight}>
                            <Image source={iconRight} style={{ tintColor: iconRightColor, width: rightIconSize, height: rightIconSize }} />
                        </Pressable>
                    ) : (
                        <View style={{ width: rightIconSize, height: rightIconSize }} />
                    )}
                </View>
            )
        )
    }

    return (
        <View>
        <View  style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {renderLeft()}
            {renderCenter()}
            {renderRight()}
            
        </View>
        {renderUnderline()}
        </View>
    );
}

export default Header;
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CustomText = ({ 
  variant = 'body', 
  fontFamily = '', 
  fontSize, 
  style, 
  children, 
  numberOfLines, 
  onLayout, 
  ...props 
}) => {
  let computedFontSize;

  switch (variant) {
    case 'h1': 
      computedFontSize = RFValue(fontSize || 22);
      break;
    case 'h2': 
      computedFontSize = RFValue(fontSize || 20);
      break;
    case 'h3': 
      computedFontSize = RFValue(fontSize || 18);
      break;
    case 'h4': 
      computedFontSize = RFValue(fontSize || 16);
      break;
    case 'h5': 
      computedFontSize = RFValue(fontSize || 14);
      break;
    case 'h6': 
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h7': 
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h8': 
      computedFontSize = RFValue(fontSize || 10);
      break;
    case 'h9': 
      computedFontSize = RFValue(fontSize || 9);
      break;
    case 'body': 
    default: 
      computedFontSize = RFValue(fontSize || 12);
      break;
  }

  const fontFamilyStyle = { fontFamily };

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        { color: Colors.text, fontSize: computedFontSize },
        fontFamilyStyle,
        style
      ]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  }
});

export default CustomText;

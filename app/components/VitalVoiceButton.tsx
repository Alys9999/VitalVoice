import { Pressable } from "react-native"
import { Text } from "react-native";


import { styled } from 'nativewind';

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

function VitalVoiceButton(props: any){
    return(
        <StyledPressable onPress={(props.action)} className='' >
            <StyledText >{props.name}</StyledText>
        </StyledPressable>
    )
}


export default VitalVoiceButton;
import { DefaultPageType } from "../Types";
import { Button, View, Text } from 'react-native';

const AboutPage: DefaultPageType = ({ navigation }) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela Sobre</Text>
            <Button
                title="Back to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default AboutPage;
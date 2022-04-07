import { Alert } from 'react-native';

function displayAlert(title, msg) {

    Alert.alert(
        title,
        msg,
        [
            {
                text: "OK"
            }
        ]
    );
}

export default {
    displayAlert
};
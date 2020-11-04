import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A99C7',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        height: 60,
        paddingTop: 2,
        elevation: 10,
    },
    logo: {
        left: 10,
        width: 70,
        height: 120,
    },
    main: {
        alignItems: 'center',
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },
    botaoSolicitar: {
        marginTop: 250,
        width: 300,
        height: 42,
        backgroundColor: "green",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoCancelar: {
        marginTop: 200,
        width: 300,
        height: 42,
        backgroundColor: "red",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
})
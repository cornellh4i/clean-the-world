import React from 'react';
import { Text, StyleSheet, Switch, View } from 'react-native';

interface Props {
    setLangauge: React.Dispatch<React.SetStateAction<boolean>>;
    language: boolean;
  }

const LanguageSwitch = ({setLangauge, language} : Props) => {
    const toggleSwitch = () => setLangauge(!language);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ES</Text>
            <Switch
                trackColor={{false: '#C4BFFF', true: '#C4BFFF'}}
                thumbColor={language ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#C4BFFF"
                onValueChange={toggleSwitch}
                value={language}
            />
            <Text style={styles.text}>EN</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        paddingLeft: 6,
        paddingRight: 6,
        color: '#ffffff',
      },
      container: {
        width: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }
});

export default LanguageSwitch;
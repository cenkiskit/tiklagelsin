import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { deviceWidth } from '../../../Constants/Layout'
import { styles } from './Styles/SearchStyles'

const Search = (props) => {
    const { onChange, value } = props
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconView}>
                        <Image style={styles.image} source={require('../../../Assets/Images/search.png')} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Arama Yap'
                        placeholderTextColor={'black'}
                        onChangeText={(text) => onChange(text)}
                        value={value} />
                </View>
            </View>
        </View>
    )
}

Search.defaultProps = {
    onChange: () => { },
    value: ""
}

export default Search
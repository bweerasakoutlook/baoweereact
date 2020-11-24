import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const title = 'ทีโอที'
    const isTH = false
    const showData = () => <Text>Hello function</Text>
    return (
        <View>
            <Text style={{color:'blue', fontSize:40}}>TOT</Text>
            {
                isTH === true && <Text>{title}</Text>
            }
            {
                isTH === true ? <Text>{title}</Text> : <Text>TOT</Text>
            }
            {showData()}
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})

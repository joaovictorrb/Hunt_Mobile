import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function PageHeader (props) {
  return(
    <View >
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};
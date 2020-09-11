import React, { Component } from "react";
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from "react-native-webview";

import PageHeader from "../../shared/PageHeader";

const Product = () => {
	const route = useRoute();
	console.log(route.params);
	return (
		<View style={{flex: 1}}>
			<PageHeader title={route.params.title}/>
			< WebView source={{ uri: route.params.url }} />
		</View>
	);
}

export default Product;
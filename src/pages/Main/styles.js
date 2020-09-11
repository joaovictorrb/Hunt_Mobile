import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  list: {
    padding: 20,
  },

  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f4511e",
  },

  productDescription: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
    lineHeight: 22,
  },

  productButton: {
    height: 42,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#f4511e",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  productButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f4511e",
  }
});

export default styles;
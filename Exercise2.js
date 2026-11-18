import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';

const datasource = [
  {data:[
      {key: 'a'},
      {key: 'e'},
      {key: 'i'},
      {key: 'o'},
      {key: 'u'},
    ],
    title:"Vowels",
    bgColor: "skyblue"},
  {data:[
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'p'},
      {key: 'q'},
      {key: 'r'},
      {key: 's'},
      {key: 't'},
      {key: 'v'},
      {key: 'w'},
      {key: 'x'},
      {key: 'y'},
      {key: 'z'},
    ],
    title:"Consonants",
    bgColor: "khaki"}
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity
          style={styles.opacityStyle}
          onPress={() => { Alert.alert(section.title + " " + item.key + " selected!"); }}
      >
        <Text style={styles.textStyle}>{index+1}. {section.title} {item.key}</Text>
      </TouchableOpacity>
  );
};

export default function Exercise2() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 10}}>L09 Exercise 2</Text>

        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section:{title, bgColor}})=>(
                <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
            )}/>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: 20, // Adds white space around the left and right of the list
    paddingTop: 30
  },
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    borderRadius: 4,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 4,
  },
});
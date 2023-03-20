import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Pedro</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />{/*WHEN THIS INPUT IS CLICKED, THE KEYBOARD AUTOMATICALLY OPENS*/}
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>{/*THIS TOUCHABLE MAKES THE SEARCH ICON WITH THE BACKGROUND ORANGE*/}
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>{/*THIS FLATLIST IS USED TO PASS DATA. THE DATA HERE IS THE ITEMS, IN THIS CASE, THE CARD JOBS.*/}
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity //THIS TOUCHABLE OPACITY MAKES THE FULL-TIME, PART-TIME AND CONTRACTOR PRESSABLES.
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);//THE ACTIVEJOBTYPE IS GOING TO BE THE ITEM THAT WE CLICKED.
                router.push(`/search/${item}`);//THIS PUSH IS GOING TO BE DINAMYC. 
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>{/*THIS WILL MAKE THE SELECTED ACTIVEJOBTYPE WITH DIFFERENT STYLE FROM THE OTHERS.*/}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal //this prop makes all the pressables appear one next to each other in the same line.
        />
      </View>
    </View>
  );
};

export default Welcome;
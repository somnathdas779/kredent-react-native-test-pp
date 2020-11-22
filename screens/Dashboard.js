import React, { Component, useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { Entypo } from '@expo/vector-icons'; 
export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:17, title: "Entry Pass",      color:"#FF69B4", members:8,  image:"https://img.icons8.com/color/70/000000/name.png"},
        {id:1, title: "Add Members",     color:"#87CEEB", members:6,  image:"https://img.icons8.com/office/70/000000/home-page.png"},
        {id:2, title: "Entry Logs",     color:"#4682B4", members:12, image:"https://img.icons8.com/color/70/000000/two-hearts.png"} ,
        {id:3, title: "My Family",   color:"#6A5ACD", members:5,  image:"https://img.icons8.com/color/70/000000/family.png"} ,
        {id:4, title: "My Relative",  color:"#FF69B4", members:6,  image:"https://img.icons8.com/color/70/000000/groups.png"} ,
        {id:5, title: "My Maid",   color:"#00BFFF", members:7,  image:"https://img.icons8.com/color/70/000000/classroom.png"} ,
        {id:6, title: "Parking",   color:"#00FFFF", members:8,  image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
        {id:8, title: "Forum",    color:"#20B2AA", members:23, image:"https://img.icons8.com/dusk/70/000000/globe-earth.png"} ,
        {id:9, title: "Complain", color:"#191970", members:45, image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        {id:10, title: "Access Facility",     color:"#87CEEB", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:11, title: "My Enpences",     color:"#4682B4", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:12, title: "Payment",     color:"#6A5ACD", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:13, title: "settings",     color:"#20B2AA", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:14, title: "Contact Owner",     color:"#008080", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:15, title: "Contact Security",     color:"#4682B4", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:15, title: "Contact Security",     color:"#FF69B4", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} 
      ]
    };
  }

  clickEventListener(item) {
    //Alert.Alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item.view)}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                 
                </View>
               
                <AntDesign style={styles.cardImage} name="android1" size={60} color="#fff" />
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} members</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     

export const screenOptions = navData => {
    return {
      headerTitle: '',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            
          
        </HeaderButtons>
      )
    };
  };
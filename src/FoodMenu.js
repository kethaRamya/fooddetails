import React from 'react'
import {ScrollView, Text,View,StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native'

var screenWidth = Dimensions.get('window').width;

export default class FoodMenu extends React.Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            index:0,
            top_pick:[{id:0,text:"Noodles",ammount:"120",img:require('../assets/eazytrendz.jpg')},{id:1,text:"Tomato Rice",ammount:"150",img:require('../assets/jpg.jpg')}],
            beveg:[{id:0,text:"Beverages",ammount:"120",img:require('../assets/beverages.jpg')},{id:1,text:"HRS Beverages",ammount:"150",img:require('../assets/HRSBeverages.png')}],
            coffee:[{id:0,text:"Milk Coffee",ammount:"120",img:require('../assets/Milkcoffee.jpg')},{id:1,text:"Cold Coffee",ammount:"150",img:require('../assets/coldcoffee.jpg')}],
            snacks:[{id:0,text:"Snacks",ammount:"120",img:require('../assets/snacks1.jpg')},{id:1,text:"Seed Snacks",ammount:"150",img:require('../assets/SnackVariety.jpg')}],
           Appetizer:[{id:0,text:"Cold Appetizers",ammount:"120",img:require('../assets/coldAppetizer.jpg')},{id:1,text:"Black Bean Corn",ammount:"150",img:require('../assets/backbean.jpg')}],
            dessert:[{id:0,text:"Cake",ammount:"120",img:require('../assets/bbc.jpg')},{id:1,text:"Ice Cream",ammount:"150",img:require('../assets/icecream.jpg')}],
            soup:[{id:0,text:"Vegetable Soup",ammount:"120",img:require('../assets/vsoup.jpg')},{id:1,text:"Tomato Soup",ammount:"150",img:require('../assets/tomatosoup.jpg')}]
        }
    }
    ChangeClick = (index) => {
        this.setState({index})
        this.scroll.scrollTo({x:0 , y: index * screenWidth, animated: true})
    }
    render(){
        return(
            <View style={{paddingBottom:60}}>
                <ScrollView horizontal
                 style={styles.scrollView}
                 ref = {re => this.scroll = re}
                 showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity  onPress={() => {this.ChangeClick("0")}}>
                        <View style={this.state.index == 0 ? styles.ViewText : null}>
                    <Text style={styles.pick}>Top Picks</Text>
                    </View>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => {this.ChangeClick("1")}}>
                        <View style={this.state.index == 1 ? styles.ViewText : null} >
                <Text style={styles.pick}>Beverages</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.ChangeClick("2")}}>
                        <View style={this.state.index == 2 ? styles.ViewText : null} >
                        <Text style={styles.pick}>Coffees</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.ChangeClick("3")}}>
                        <View style={this.state.index == 3 ? styles.ViewText : null} >
                <Text style={styles.pick}>Snacks</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.ChangeClick("4")}}>
                        <View style={this.state.index == 4 ? styles.ViewText : null} >
                        <Text style={styles.pick}>Appetizers</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.ChangeClick("5")}}>
                        <View style={this.state.index == 5 ? styles.ViewText : null} >
                        <Text style={styles.pick}>Desserts</Text>
                        </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {this.ChangeClick("6")}}>
               <View style={this.state.index == 6 ? styles.ViewText : null} >
                <Text style={styles.pick}>Soup</Text>
                </View>
                </TouchableOpacity>
                </ScrollView>

                <ScrollView style={{marginTop:15}}
                 ref = {re => this.scroll = re}
                  showsHorizontalScrollIndicator={false}
                >
                    
                    <View>
                    <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Top Picks</Text>
                    </View>
                {this.state.top_pick.map((pick,i) => {
                    return(
                        <View style={styles.value_st} key={pick.id}>
                        <View style={styles.listView}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>{pick.text}</Text>
                            <Text>Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.</Text>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>$ {pick.ammount}</Text>
                        </View>
                        <Image style={styles.img_value} source={pick.img}/>
                    </View>
                    )
                })}
               
                </View>
                <View style={{marginTop:15}}>
                <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Beverages</Text>
                    </View>
                   {this.state.beveg.map((bev,i) => {
                       return(
                        <View style={styles.value_st} key={bev.id}>
                    <View style={styles.listView}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>{bev.text}</Text>
                        <Text>A drink is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture.</Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>$ {bev.ammount}</Text>
                    </View>
                    <Image style={styles.img_value} source={bev.img}/>
                </View>
                       )
                   })} 
               </View>

               <View style={{marginTop:15}}>
                <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Coffee</Text>
                    </View>
                    {this.state.coffee.map((coffee,i) => {
                        return(
                            <View style={styles.value_st} key={coffee.id}>
                    <View style={styles.listView}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>{coffee.text}</Text>
                        <Text>Coffee is a brewed drink prepared from roasted coffee beans the seeds of berries from certain Coffea species </Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>$ {coffee.ammount}</Text>
                    </View>
                    <Image style={styles.img_value} source={coffee.img}/>
                </View>
                        )
                    })}
                
               </View>

               <View style={{marginTop:15}}>
                <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Snacks</Text>
                    </View>
                    {this.state.snacks.map((snack,i) => {
                        return(
                            <View style={styles.value_st} key={snack.id}>
                            <View style={styles.listView}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>{snack.text}</Text>
                                <Text>This desert is made with flour, soaked rice, and molten jaggery, fried with oil, and topped with sesame or poppy seeds. </Text>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>$ {snack.ammount}</Text>
                            </View>
                            <Image style={styles.img_value} source={snack.img}/>
                        </View>
                        )
                    })}
               
               </View>

               <View style={{marginTop:15}}>
                <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Appetizers</Text>
                    </View>
                    {this.state.Appetizer.map((appet,i) => {
                        return(
                            <View style={styles.value_st} key={appet.id}>
                    <View style={styles.listView}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>{appet.text}</Text>
                        <Text>Hors d'oeuvres may be served at the dinner table as a part of the meal, or they may be served before seating </Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>$ {appet.ammount}</Text>
                    </View>
                    <Image style={styles.img_value} source={appet.img}/>
                </View>
                        )
                    })}
               </View>

               <View style={{marginTop:15}}>
                <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Desserts</Text>
                    </View>
                    {this.state.dessert.map((des,i) => {
                        return(
                            <View style={styles.value_st} key={des.id}>
                    <View style={styles.listView}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>{des.text}</Text>
                        <Text>Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.</Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>$ {des.ammount}</Text>
                    </View>
                    <Image style={styles.img_value} source={des.img}/>
                </View>
                        )
                    })}
               </View>

               <View style={{marginTop:15}}>
                <View style={styles.pick_st}>
                        <Text style={styles.dot}/>
                        <Text style={styles.top_pick}>Soups</Text>
                    </View>
                    {this.state.soup.map((soup,i) => {
                        return(
                            <View style={styles.value_st} key={soup.id}>
                    <View style={styles.listView}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>{soup.text}</Text>
                        <Text>Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water. </Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>$ {soup.ammount}</Text>
                    </View>
                    <Image style={styles.img_value} source={soup.img}/>
                </View>
                        )
                    })}
               </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:"white",
        padding:8
    },
    pick:{
        padding:10,
        //width:10
    },
    ViewText:{
        borderBottomWidth:1,
    },
    pick_st:{
        flexDirection:'row',
        paddingLeft:10
    },
    dot:{
        width:15,
        height:15,
        backgroundColor:"#328DE5",
        borderRadius:20,
        marginTop:3
    },
    top_pick:{
        fontSize:18,
        paddingLeft:10,
        fontWeight:'bold'

    },
    value_st:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:'#8F8C8C'
        
    },
    listView:{
        width:"70%"
    },
    img_value:{
        width:120,
        height:100
    }
})
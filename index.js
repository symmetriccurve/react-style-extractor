var View = JSON.stringify("\r\nimport React, { Component } from \'react\';\r\nimport {\r\n  Dimensions,\r\n  Text,\r\n  View,\r\n  Image,\r\n  StyleSheet,\r\n  TouchableHighlight\r\n} from \'react-native\';\r\nconst { height, width } = Dimensions.get(\'window\')\r\n\r\nconst giftCardHeight = height\/5\r\nconst giftcardWidth = width - 20\r\n\r\n\r\nclass GiftCard extends Component{\r\n\r\n  constructor(props){\r\n    super(props)\r\n    this.state = {}\r\n  }\r\n  render(){\r\n      var ImageSource = this.props.giftDetails.isFavorite ? require(\'..\/images\/FavIcon.png\') : require(\'..\/images\/noFavIcon.png\')\r\n        return (\r\n            <View style={{\r\n                  height: giftCardHeight,\r\n                  backgroundColor: \'white\',\r\n                  width:  giftcardWidth,\r\n                  marginTop:giftCardHeight\/20,\r\n                  marginBottom:giftCardHeight\/20,\r\n                  shadowColor: \'#000000\',\r\n                  shadowOffset: {\r\n                    width: 0,\r\n                    height: 3\r\n                  },\r\n                  shadowRadius: 1,\r\n                  shadowOpacity: 0.1\r\n                }}>\r\n                <View\/>\r\n                <View style={{flexDirection:\'row\'}}>\r\n                    <View style={{}}>\r\n                          <Image source={{uri: this.props.giftDetails.image}} defaultSource={require(\'..\/images\/perfume.jpg\')} style={{height:giftCardHeight,width:giftCardHeight}}\/>\r\n                    <\/View>\r\n                    <View style={{flex:1}}>\r\n                        <View style={{flex:1,flexDirection:\'row\'}}>\r\n                            <View style={{flex:4}}>\r\n                                <Text style={{fontFamily:\'AvenirNext-Bold\',fontSize:giftCardHeight\/8,marginTop:giftCardHeight\/10,marginLeft:giftCardHeight\/10}}>{this.props.giftDetails.name}<\/Text>\r\n                            <\/View>\r\n                            <TouchableHighlight style={{flex:1,alignItems:\'center\',justifyContent:\'center\'}} onPress={()=>{this.props.handleToggleFavorite(this.props.giftDetails.id)}} underlayColor=\'white\'>\r\n                                  <Image source={ImageSource} style={{height:giftCardHeight\/5,width:giftCardHeight\/5,resizeMode:\'contain\'}}\/>\r\n                            <\/TouchableHighlight>\r\n                        <\/View>\r\n                        <View style={{flex:3}}>\r\n                            <Text style={{fontFamily:\'AvenirNext-Bold\',fontWeight:\'400\',fontSize:giftCardHeight\/10,marginTop:giftCardHeight\/20,marginLeft:giftCardHeight\/10,width:giftCardHeight\/0.68,color:\'#838383\'}}>{this.props.giftDetails.description} <\/Text>\r\n                        <\/View>\r\n                    <\/View>\r\n                <\/View>\r\n            <\/View>\r\n        )\r\n    }\r\n}\r\n\r\nmodule.exports = GiftCard\r\n")
console.log('\033[2J')
var myRegexp = /{{(.*?)}}/g;
var getPlaceMeBackHere = /(PlaceMeBackHere)/g
var match = View.match(myRegexp)
var placeHold = View.replace(myRegexp, 'PlaceMeBackHere')
var matchIndex = []
while ((match = getPlaceMeBackHere.exec(placeHold)) != null) {
    //console.log(match.index)
    matchIndex.push(match.index)
}
for (var key in matchIndex) {
    placeHold = placeHold.replace(/(PlaceMeBackHere)/, 'Vikram' + key)
}

//placeHold = placeHold.replace(/(PlaceMeBackHere)/, 'Vikram2')
console.log("======>", placeHold)
    //console.log(match.length)
for (var key in match) {
    //console.log("=====================================")
    //console.log(match[key].replace(/\\r\\n/g, '').replace(/[ \t]/g,''))
    //latesh
}
//console.log(match[1].replace(/\\r\\n/g, ''))
//[\\r\\n \t]
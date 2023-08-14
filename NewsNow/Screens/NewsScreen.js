import { View, StyleSheet } from 'react-native'
import React, { useContext,useState } from 'react'
import { NewsContext } from '../API/Context'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const NewsScreen = () => {

  const {
    news: { articles },
  } = useContext(NewsContext)

  const [activeIndex, setActiveIndex] = useState();
  const windowHeight = Dimensions.get("window").height;


  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          // firstItem={articles.slice(0, 10).length - 1}
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          // renderItem={({ item, index }) => (
          //   <SingleNews item={item} index={index} darkTheme={darkTheme} />
          // )}
          onSnapToItem={(index) => setActiveIndex(index)}
        /> 
      )}
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});
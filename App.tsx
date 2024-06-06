
import React from 'react';

import {
 ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  const users=[
    {
      id:1,
      name: 'John',
      data:['Javascript', 'Php', 'Java']
    },
    {
      id:2,
      name: 'Peter',
      data:['React', 'HTML', 'CSS']
    },
    {
      id:1,
      name: 'Bruce',
      data:['Angular', 'Native', 'Nextjs']
    },
    {
      id:1,
      name: 'Lord',
      data:['C', 'Ruby', 'Nodejs']
    }


  ]
  return (
    <View>
      <Text style={{fontSize:25}}>Section List in React-Native</Text>
      <SectionList
        sections={users}
        renderItem={(({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>)}
         renderSectionHeader={({section:{name}})=>(
          <Text style={{fontSize:25,color:'red'}}>{name}</Text>
         )
          
        }
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  
});

export default App;

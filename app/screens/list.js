import { FlatList, SafeAreaView } from 'react-native'
import Item from './Item'
import items from '../mocks/data'

const List = () => {

    console.log('cHamou')
    console.log(Item)

    return (
        <SafeAreaView>
            <FlatList
                numColumns={2}
                data={items}
                renderItem={({ item }) => (<Item item={item} />)}></FlatList>

        </SafeAreaView>
    )
}

export default List
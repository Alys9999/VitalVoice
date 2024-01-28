import { Text, View } from "react-native"

interface ToDoItem {
    id: number;
    info: string;
    completed: boolean;
    fromDoc: string;
}

interface DocItem{
    docName: string;
    thisDocToDoItems: ToDoItem[]
}

const mockToDoA: ToDoItem[] = [
    {id: 1, info: 'eat pill A', completed:false, fromDoc:'Dr. Panageas' },
    {id: 2, info: 'eat pill B', completed:false, fromDoc:'Dr. Panageas' },
    {id: 3, info: 'eat pill C', completed:false, fromDoc:'Dr. Panageas' },
    {id: 4, info: 'eat pill D', completed:false, fromDoc:'Dr. Panageas' },
    {id: 5, info: 'eat pill E', completed:false, fromDoc:'Dr. Panageas' },
]

const mockToDoB: ToDoItem[] = [
    {id: 1, info: 'eat pill A', completed:false, fromDoc:'Dr. Boo' },
    {id: 2, info: 'eat pill B', completed:false, fromDoc:'Dr. Boo' },
    {id: 3, info: 'eat pill C', completed:false, fromDoc:'Dr. Boo' },
    {id: 4, info: 'eat pill D', completed:false, fromDoc:'Dr. Boo' },
    {id: 5, info: 'eat pill E', completed:false, fromDoc:'Dr. Boo' },
]

const doctorOfUser: DocItem[] = [
    {docName : 'Dr. Panageas', thisDocToDoItems: mockToDoA,},
    {docName : 'Dr. Boo', thisDocToDoItems: mockToDoB,} 
]


const APScreen = ()=>{
    return(
<View>
    {doctorOfUser.map((docItem, index) => (
        <View key={index}>
            <Text>{docItem.docName}</Text>
            {docItem.thisDocToDoItems.map((todoItem) => (
                <View key={todoItem.id}>
                    <Text>{todoItem.info}</Text>
                </View>
            ))}
        </View>
    ))}
</View>
    )
}

export default APScreen;


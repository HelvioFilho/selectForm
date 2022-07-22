import React, { useEffect, useState } from 'react';
import { MaterialIcons  } from '@expo/vector-icons';
import { 
    FlatList,
    Modal, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps, 
    View 
} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import { useStore } from '../../services/stores/dataStore';

interface SelectProps {
    name: string;
    slug: string;
    selected: boolean;
}

interface ButtonSelectProps extends TouchableOpacityProps {
    placeholder: string;
    itemSelect: SelectProps[];
}

export function ButtonSelect({ placeholder, itemSelect,...rest }: ButtonSelectProps) {
    const { select, setSelect, setCountSelect} = useStore();

    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [list, setList] = useState<SelectProps[]>(itemSelect);

    function handleSelected(){
        setCountSelect(count);
        setSelect(list);
        setVisible(false);
    }

    function renderItem(item: SelectProps){
        function handleSelectItem(name: string){
            const index = list.findIndex(index => { return index.name === name});
            const updateList = list.map(list => ({...list}));
            updateList[index].selected = !updateList[index].selected;
            setList(updateList);
        }

        return (
            <TouchableOpacity
                style={ styles.list}
                onPress={() => handleSelectItem(item.name)}
            >
                <Text>{item.name}</Text>
                <MaterialIcons name={item.selected ? "check-box" : "check-box-outline-blank"} size={20} color="black" />  
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        setCount(0);
        list.map(select => {
            select.selected === true && setCount(old => (old + 1))
        });
    },[list]);

    useEffect(() => {
        setList(itemSelect)   
    },[visible]);

    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => setVisible(true)}
            {...rest}
            >
            <Text style={styles.text}>
                {placeholder}
            </Text>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <Modal
            onRequestClose={() => setVisible(false)}
            visible={visible}
            animationType='fade'
        >
            <SafeAreaView style={{
                flex: 1,
            }}
            >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: colors.gray, 
                paddingHorizontal: 10,
                paddingVertical: 20,
            }}>
                <TouchableOpacity onPress={() => {
                    if(select.length > 0){
                        setList(select);
                    }else{
                        setList(itemSelect);
                    }
                    setVisible(false)}
                    }>
                    <Text style={styles.link}>voltar</Text>
                </TouchableOpacity>
                <Text style={styles.title}>
                   {
                       count === 0 ?
                       'selecione' :
                       count > 1 ?
                       `${count} itens selecionados` :
                       `${count} item selecionado`
                   }
                    
                </Text>
                <TouchableOpacity onPress={handleSelected}>
                    <Text style={styles.link}>concluir</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={list}
                extraData={select}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => renderItem(item)}

            />
            </SafeAreaView>
        </Modal>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: 13,
        backgroundColor: colors.gray,
        width: '92%',
        height: spacing.px6,
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    text: {
        fontWeight: '600',
        fontSize: 13,
        color: colors.white,
    },
    link: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'blue',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
    },
    list: {
        flex: 1, 
        height: 50, 
        paddingHorizontal: 20, 
        flexDirection: 'row',  
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    }
})
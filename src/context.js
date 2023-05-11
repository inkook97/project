import React, { createContext, useContext, useReducer } from "react";

const initItems = [
    {
        id: 1,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아01',
        price: '1000원',
        act: true,
        brand1: true
    },
    {
        id: 2,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아02',
        price: '2000원',
        act: true,
        brand1: true
    },
    {
        id: 3,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아03',
        price: '3000원',
        act: false,
        brand2: true
    },
    {
        id: 4,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아04',
        price: '4000원',
        act: false,
        brand2: true
    },
    {
        id: 5,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '1000원',
        act: true
    },
    {
        id: 6,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '2000원',
        act: true
    },
    {
        id: 7,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '3000원',
        act: false
    },
    {
        id: 8,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '4000원',
        act: false
    }
]

function itemReducer(state, action) {
    switch (action.type) {

    }
}


const ItemStateContext = createContext();

export function ItemProvider({ children }) {
    const [state, dispatch] = useReducer(itemReducer, initItems);

    return (
        <ItemStateContext.Provider value={state}>
            {children}
        </ItemStateContext.Provider>
    )

}

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('temStateContext를 찾을 수 없음')
    }
    return context;
}
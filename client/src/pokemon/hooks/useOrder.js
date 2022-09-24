import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByType, orderFunc } from "../../reducers/actionsCreator";
import { getTypes } from "../helpers";

export const useOrder = (setCurrentPage)=>{
    const dispatch = useDispatch();

  const [key, setKey] = useState('id');
  const [order, setOrder] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getData = async()=>{
      const arr = await getTypes();
      setTypes(arr);
    }
    getData();
  }, []);

  const onChangeOrderKey = event => {
    dispatch(orderFunc(event.target.value, order));
    setKey(event.target.value);
    setCurrentPage(1)
  }
  const onChangeFilterType = event =>{
    dispatch(filterByType(event.target.value))
    setCurrentPage(1)
  }

  return {
    key,
    setKey,
    order,
    setOrder,
    types,
    setTypes,
    onChangeFilterType,
    onChangeOrderKey
  }

}
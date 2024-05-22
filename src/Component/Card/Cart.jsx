// / import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import "./Filter.css";
// import { datareduce } from '../../Store/Store';

// const Filters = () => {
//     const range = useSelector((e) => e.rangeminimum);
//     const range1 = useSelector((e) => e.rangemaximum);

//     const selector = useSelector((element) => element.cartarray);
//     const selector1 = useSelector((e) => e.emptyarray);

//     const dispatch = useDispatch();

//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [data, setData] = useState("range");
//     const [search, setSearch] = useState();

//     useEffect(() => {
//         dispatch(datareduce.statechange());
//         dispatch(datareduce.rangefilter());
//         dispatch(datareduce.searchProducts({ search }));
//     }, [dispatch, search]);

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(selectedCategory === category.toLowerCase() ? '' : category.toLowerCase());
//     };

//     const handleSearchChange = (event) => {
//         setSearch(event.target.value);
//     };

//     const filteredProducts = selector.filter((product) => {
//         const categoryFilter = selectedCategory === '' || product.category.toLowerCase() === selectedCategory;
//         const priceFilter = product.amt >= range && product.amt <= data;
//         const searchFilter = product.name.toLowerCase();
//         return categoryFilter && priceFilter &&searchFilter;
//     }).map((product) => ({ ...product, category: product.category.toLowerCase() }));

//     function data1(useramt) {
//         setData(parseInt(useramt.target.value));
//         console.log(data);
//     }
// searchItem(store, action) {
//   let searchProducts = store.cartarray.map(function (getdata) {
//     return getdata.name;
//   });
//   console.log(searchProducts);
//   let uniqueProducts = [...new Set(searchProducts)];
//   console.log(uniqueProducts);
//   store.filteredProducts = uniqueProducts;
//   const filtered = store.cartarray.filter(item =>
//     item.name.toLowerCase().includes(action.payload.toLowerCase())
//   );
//   console.log(filtered);
// }
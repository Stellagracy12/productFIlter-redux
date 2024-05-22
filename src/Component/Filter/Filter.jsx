import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Filter.css";
import { datareduce } from '../../Store/Store';

const Filters = () => {
    const range=useSelector((e)=>{
        return e.rangeminimum
    })
    const range1=useSelector((e)=>{
        return e.rangemaximum
    })
    console.log(range);
    console.log(range1);
// _____________________________________________________
    const selector = useSelector((element) => {
        return element.cartarray
    });
    const selector1 = useSelector((e) => {
        return e.emptyarray
    });
    console.log(selector1);
    console.log(selector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(datareduce.statechange());
        dispatch(datareduce.rangefilter())
        dispatch(datareduce.searchItem());
    }, [dispatch,selector]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category.toLowerCase() ? '' : category.toLowerCase());
    };
    const[data,setData]=useState("range")

    const[searchList,setSearchList]=useState("")
    const search =useSelector((e)=>{
        return e.categoryList
    })
    
    console.log(search);
    const filteredProducts = selector.filter((product) => {
        const categoryFilter = selectedCategory === '' || product.category.toLowerCase() === selectedCategory;
        const priceFilter = product.amt >= range && product.amt <= data;
        const searchFilter =searchList === "" ||product.category.toLowerCase().includes(searchList.toLowerCase()) ||product.name.toLowerCase().includes(searchList.toLowerCase());
        // const searchFilter = searchList === '' || product.category.toLowerCase().includes(searchList.toLowerCase());
        return categoryFilter && priceFilter&&searchFilter;
        
    }).map((product) => ({ ...product, category: product.category.toLowerCase() }));

    // const filteredProducts1=search.filter((product1)=>{
    //     const searchFilter = searchList.category===''||product1.category.toLowerCase()===searchList
    //     return searchFilter
    // }).map((product1)=>({...product1,category: product1.category.toLowerCase()}))
    // console.log(filteredProducts1);
    function data1(useramt) {
        setData(parseInt(useramt.target.value));
        console.log(data);
    }
    function productSearch(list) {
        setSearchList(list.target.value)
        console.log(searchList); 
    }
    
    return (
        <>
            <div className='mycarts'>
                <div className='filtercarts'>
                    <h1>Filter method using Redux store</h1>
                </div>
                <div className='mycarts123'>
                    <div className='Filterdata'>
                        <div className='my'>
                            <h1>FILTER CARTS</h1>
                            <div className='inputsearch'>
                                <h1>Search</h1>
                                <input type="search" placeholder='Product'value={searchList} onChange={productSearch} />
                            </div>
                            <div className='category'>
                                <h2>Category</h2>
                                {selector1.map((setdata) => {
                                    return <h3 onClick={() => handleCategoryClick(setdata)}
                                    style={{ color: selectedCategory === setdata ? 'red' : 'black' }}>{setdata}</h3>
                                })}
                               
                            </div>
                            <div className='range'>
                                <h1>Price</h1>
                                <div className='rangefilters123'>
                                    <input type ="range" value={data} min={range} max={range1} onChange={data1}/>
                                   
                                    <h1>{data}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filterdata1'>
                        {filteredProducts.map(function (getdata) {
                            return <div className='select'>
                                <img src={getdata.img} alt="" />
                                <h1>{getdata.name}</h1>
                                <h5>{getdata.category}</h5>
                                <h2>{getdata.amt}</h2>
                                <p>{getdata.des}</p>
                                <h3>{getdata.seller}</h3>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filters;

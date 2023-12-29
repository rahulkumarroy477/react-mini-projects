import React, { useState } from 'react'
import data from './data';
import './styles.css'
function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiItems, setMultiItems] = useState([]);
    let handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    }
    let handleMultiSelection = (currentId) => {
        let cpyMultipleItems = [...multiItems];
        const getIndex = cpyMultipleItems.indexOf(currentId);
        if (getIndex === -1) cpyMultipleItems.push(currentId);
        else cpyMultipleItems.splice(getIndex, 1);
        setMultiItems(cpyMultipleItems);
        console.log(getIndex, multiItems);
    }
    return (
        <div className='wrapper'>
            <button className='btn' onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((dataItem, index) => <div className='item' key={index}>
                            <div className="title"
                                onClick={enableMultiSelection ?
                                    () => handleMultiSelection(dataItem.id) :
                                    () => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.title}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ?
                                    multiItems.indexOf(dataItem.id) !== -1 && <div className="content">
                                        {dataItem.content}
                                    </div> :
                                    selected === dataItem.id && <div className="content">
                                        {dataItem.content}
                                    </div>
                            }

                        </div>)
                        : <div>No Data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian
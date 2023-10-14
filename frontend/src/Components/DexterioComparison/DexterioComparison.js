import React from 'react';
import './DexterioComparison.css';

const tags = [
    {
        header:""
    },
    {
        name:"Project Timeline"
    },
    {
        name:"Warranty"
    },
    {
        name:"Quality"
    },
    {
        name:"Price"
    },
    {
        name:"Design"
    },
    {
        name:"Sustainability"
    },
    {
        name:"Payment Terms"
    }

];

const experiences = [
    {
        header:"Typical Experience"
    },
    {
        name:"Unreliable timelines"
    },
    {
        name:"No warranty"
    },
    {
        name:"Local Inferior"
    },
    {
        name:"Spiked prices"
    },
    {
        name:"Outdated designs"
    },
    {
        name:"Chemical infiltrated materials"
    },
    {
        name:"Unsecure payments terms"
    }
    
];

const dexterioFeatures = [
    {
        header:"Dexterio"
    },
    {
        name:"On time delivery"
    },
    {
        name:"10 years warranty"
    },
    {
        name:"Branded Premium"
    },
    {
        name:"Competitive Prices"
    },
    {
        name:"Personalized/Prefab"
    },
    {
        name:"Premium & eco-friendly"
    },
    { 
        name:"5:4:1 secure payment policy"
    }
    
       
];

const DexterioComparison = () => {
    return (
        <div className = "outer">
            <div className = "table-1-outer">
                
                    {tags.map((item)=>{
                        
                       return (
                        <div className = "table-1-wrapper">
                        <h4 className = "element">{item.name}</h4>
                        </div>
                       )
                    })}
                   
                
            </div>

            <div className = "table-2-outer">
            {experiences.map((item)=>{
                           if(item.header != ""){
                       return (
                        <div className = "table-1-wrapper">
                            {item.header}
                        <h4 className = "element">{item.name}</h4>
                        </div>
                       )}
                    })}
            </div>

            <div className = "table-3-outer">
            {dexterioFeatures.map((item)=>{
                        if(item.header !="")
                        {
                       return (
                        <div className = "table-1-wrapper">
                            {item.header}
                        <h4 className = "element"> {item.name}</h4>
                        </div>
                       )}
                    })}
            </div>
        </div>
    );
};

export default DexterioComparison;
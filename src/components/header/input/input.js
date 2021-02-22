import React from "react";


const defaultClasses={
    inputClassName:"",
    inputComponentClass:"", 
    lableClassName:"", 
    iconClassName:"", 
    inputIconContainer:""
}

const Input=({
    type="text", 
    placeholder, 
    onChange, 
    value, 
    name, 
    lable, 
    id, 
    icon, 
    classes={...defaultClasses}
})=>{
    const {
        inputClassName, 
        inputComponentClass, 
        lableClassName, 
        iconClassName, 
        inputIconContainer
    }= classes;
    return(
        <div className={`input-component ${inputComponentClass}`}>
            {lable && (<lable className={`lable ${lableClassName}`} >{lable}</lable>)}
            <div className={`input-icon-container ${inputIconContainer}`}>
            <input 
                className={`input ${inputClassName}`}
                type={type}
                onChange={onChange}
                placeholder={placeholder} 
                value={value}
                name={name}
                id={id}
            />
            {icon}
        
            </div>
        </div>
        
    )
}


export default Input;
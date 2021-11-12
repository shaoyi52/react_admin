const LocalStore={
    setValue(key,data){
        localStorage.setItem(key,JSON.stringify(data));
        return this;
    },
    getValue(key,defaultValue){
        const value=localStorage.getItem(key);
        if(!value) return defaultValue||null;
        const data= JSON.parse(value);
        return data;
    },
    removeValues(key){
        localStorage.removeItem(key);
        return this;
    }
}

export default LocalStore;
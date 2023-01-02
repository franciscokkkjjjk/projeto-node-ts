type valorMenu = '' | 'all' | 'dog' | 'cat' | 'fish';
export const creatMenuObject = (activeMenu: valorMenu)=>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
} 
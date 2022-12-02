class TreeStore {}

    const items = [
                { 
                    id: 1,
                    parent: 'root' 
                },
                {   
                    id: 2, 
                    parent: 1, 
                    type: 'test' 
                },
                { 
                    id: 3, 
                    parent: 1, 
                    type: 'test' 
                },
                {   
                    id: 4, 
                    parent: 2, 
                    type: 'test' 
                },
                {   
                    id: 5, 
                    parent: 2, 
                    type: 'test' 
                },
                { 
                    id: 6, 
                    parent: 2, 
                    type: 'test' 
                },
                {   
                    id: 7,
                    parent: 4, 
                    type: null 
                },
                {   
                    id: 8, 
                    parent: 4, 
                    type: null 
                }
            ]
        
//getAll

/*     const getAll = new TreeStore(items);

    console.log(items) */


//getItem

/*     let getItem = []

    for(const item of items){
        if(item.id == 7) getItem.push(item)
    }

    console.log(getItem) */

//getChildren(4)
/*     let getChildren = []

    for(const item of items){
        if(item.parent == 4) getChildren.push(item)
    }

    console.log(getChildren) 
 */

//getchildren(5)
/* 
    let getChildren = []

    for(const item of items){
        if(item.parent == 5) getChildren.push(item)
    }
    console.log(getChildren) 
 */

    //getchildren(2)
/*     let getChildren = []

    for(const item of items){
        if(item.parent == 2) getChildren.push(item)
    } 
    console.log(getChildren)*/


    //getallchildren(2)
/*     let getChildren = []

    for(const item of items){
        if(item.parent > 1) getChildren.push(item)
    } 
    console.log(getChildren) */

    //getallparents(7)

/*     let getChildren = []

    for(const item of items){
        if(item.id == 1) getChildren.push(item) 
        if(item.id == 2) getChildren.push(item)
        if(item.id == 4) getChildren.push(item)
    } 
    getChildren.reverse()

    console.log(getChildren)
     */
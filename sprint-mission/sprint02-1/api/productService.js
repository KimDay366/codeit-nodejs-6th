import Product from "../class/Product.js";
import ElectronicProduct from "../class/ElectronicProduct.js";

// 텍스트 에디터 VIM 사용하여 주석 달아보기 ^^V

export default class ProductService{

    async getProductList({page, pageSize, keyword}){
        
        if( typeof(page) !== "number" || page < 1 ){
            throw new Error("page에 숫자를 입력 해 주시기 바랍니다");
            return;
        }

        if( typeof(pageSize) !== "number" || pageSize < 1 ){
            throw new Error("pageSize에 숫자를 입력 해 주시기 바랍니다");
            return;
        }

        let url = `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=recent`;

        if(keyword && !keyword.trim()){
            throw new Error("올바른 키워드를 입력 해 주시기 바랍니다.");
            return;

        }else if(keyword){
            url = `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`
        }
        
        try{
            
            const res = await fetch(url);
            const allItems = await res.json();
            
            // 
            let item;
            let electronicProducts = ["== Electronic Product List =="];
            let products = ["== Product List =="];
    
            await allItems.list.forEach((ele)=>{
                
                if(ele.tags !== undefined && ele.tags.length !== 0 && ele.tags[0].includes("전자") ){
                    // "전자제품", "전자 제품" 까지만 허용.
                    item = new ElectronicProduct();
                    item.name = ele.name,
                    item.description = ele.description,
                    item.price = ele.price,
                    item.tags = ele.tags,
                    item.images = ele.images,
    
                    electronicProducts.push(item);
    
                }else{
    
                    item = new Product();
                    item.name = ele.name,
                    item.description = ele.description,
                    item.price = ele.price,
                    item.tags = ele.tags,
                    item.images = ele.images,
    
                    products.push(item);
                }            
            });
    
            console.log(electronicProducts);
            console.log(products);
    
            return electronicProducts, products; 

        }catch(err){
            console.error(err);
        }

    }

    async getProduct(id){
        
        if(!id || typeof(id) !== "number" || id < 1){
            // id 숫자 크기 제한은 규정을 알지 못해 1보다 작은 수는 사용 불가하도록 작성하였습니다.
            throw new Error("올바른 숫자를 입력 해 주시기 바랍니다");
            return;
        }

        try{
            const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`);
            const data = await res.json();

            console.log(data);
            return data;

        }catch(err){
            console.error(err);
        }
        
    }

    async createProduct({name, description, price, images, isEletron}){
        
        // tag 값 처리하기
        let tag = []; 

        switch(isEletron){
            case true :
            case "true" :
            case "네" :
            case "yes" :
                 tag = ["전자제품"];
                 break;
            default :
                 tag = [];
        }

        // 각 항목 별 잘못된 값 예외 처리
        if( !name?.trim() || !description?.trim() ){
            throw new Error("입력 데이터를 확인 해 주세요");
            return;
        }

        if( typeof price !== "number" ||  price < 1 ){
            throw new Error("가격을 확인 해 주세요");
            return;
        }
        // images는 잘못 입력하면 서버에서 걸러서 생략 했습니다. 


        // 최종 객체
        const productData = {
            images : [images],
            tags : tag,
            price,
            description,
            name,
        }

        const url = `https://panda-market-api-crud.vercel.app/products`;

        try{
            const res = await fetch(url,{
                method : 'POST',
                headers : { 
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(productData),
            });

            const data = await res.json();
            console.log(data);
            return data;

        }catch(err){
            console.error(err);
        }
    }

    async patchProduct({id, name, description, price, images, isEletron}){
        
        // 최종 데이터로 사용 할 객체
        const patchProdData = {};

        // tag 값 처리하기
        if(isEletron){
            let tag = [];

            switch(isEletron){
            case true :
            case "true" :
            case "네" :
            case "yes" :
                 tag = ["전자제품"];
                 patchProdData.tags = tag;
                 break;
            default :
                 tag = [];
                 patchProdData.tags = tag;
            }

        }

        // 나머지 각 항목 별 값 확인 후 넣기 
        if(images) patchProdData.images = [images];

        if( name?.trim() ) patchProdData.name = name;

        if( description?.trim() ) patchProdData.description = description; 

        if( typeof price === "number" &&  price > 0 ) patchProdData.price = price;

        const url = `https://panda-market-api-crud.vercel.app/products/${id}`;

        try{
            const res = await fetch(url,{
                method : 'PATCH',
                headers : { 
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(patchProdData),
            });

            const data = await res.json();
            console.log(data);

            return data;

        }catch(err){
            console.error(err);
        }
    }

    async deleteProduct(id){

        if(!id || typeof(id) !== 'number'|| id < 1){
            // id 숫자 크기 제한은 규정을 알지 못해 1보다 작은 수는 사용 불가하도록 작성하였습니다.
            throw new Error("올바른 숫자를 입력 해 주시기 바랍니다");
            return;
        }

        const url = `https://panda-market-api-crud.vercel.app/products/${id}`;

        try{

            const res = await fetch(url,{
                method : 'DELETE',
                header: {
                    accept: 'application/json'
                }
            });

            const finish = await res.json();
            console.log(`Delete finish : id ${finish.id}`);

        }catch(err){
            console.error(err);
        }
        
    }

}

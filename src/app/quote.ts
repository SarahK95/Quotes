// export class Quote {

    

//     quote! : string;
//     name!: string;
//     author! : string;
    
// }
export class Quote {
    public showAuthor:boolean;
    constructor(public quote:string, public author:string, public name:string,){
        this.showAuthor=false
    }
}


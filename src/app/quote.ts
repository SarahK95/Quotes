// export class Quote {

    

//     quote! : string;
//     name!: string;
//     author! : string;
    
// }
export class Quote {
    public showAuthor:boolean;
    constructor(public quote:string, public name:string,public author:string){
        this.showAuthor=false
    }
}


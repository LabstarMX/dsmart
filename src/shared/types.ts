export enum SelectedPage {
    Home = "home",
    AllProducts = "allproducts",
    NewCollections = "newcollections",
    Accessories = "accessories",
    MensFootwear = "mensfootwear",
    WomensFootwear = "womensfootwear",   
    ContactUs = "contactus",
    SignIn = "signin",
    ForgottenPassword = "forgottenpassword",
    ProductGroup = "productgroup",
    Product = "product",
    Checkout = "checkout",
}

export interface CarouselType {
    // image: JSX.Element;
    title: string;
    description?: string;
    image: string;
    // image: any;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}



// export default selectedPage;
import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";


class ItemService {
    
    async getCatalog() {
        // logic to call server
        // and retreive an array of products
        let response = await axios.get(ServerUrl + '/api/catalog');
        return response.data;

        // return mock data
        // return catalog;

    }

    async saveItem(item) {
        console.log("Todo: send object to server");

        await axios.post(ServerUrl + "/api/catalog", item);
    }

    getItemDetails(id) {

    }
    async validateCouponCode(code){
        let response = await axios.get(ServerUrl + "/api/couponCodes/"+ code); 
        return response.data;
    }
     
    async submitOrder(order){

        let response = await axios.post(ServerUrl + "/api/orders", order);
        if(response.status === 200) {
            return response.data
        }else{
            console.error("Error Submitting order", response.data);
            return null;
        }
        
    }

    async getUserOrders(userId){
        let response = await axios.get(ServerUrl + "/api/orders/" + userId);
        if(response.status === 200){
            return response.data;
        }else {
            console.error("error getting user orders", response.data);
            return null;
        }
    }

}

export default ItemService;

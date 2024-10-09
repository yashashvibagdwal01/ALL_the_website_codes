
import './index.css'; // Ensure Tailwind CSS is imported
import OrderConfirmation from './component/OrderConfirmation';
import DeliveryDetails from './component/details';
import RecipeKitDelivery from './component/OrderDetails'; 
import IngredientShop from './component/mainpage';

function App() {
  return (
    <div className="App">
     {/*<OrderConfirmation/>*/}
      {/*<DeliveryDetails/>*/}
      {/*<RecipeKitDelivery />
      {/*<IngredientShop/>*/}

    </div>
  );
}

export default App;

 {/*<OrderConfirmation/>---->this page appears once the order is confirmed (scooty rider guy picture)*/}
      {/*<DeliveryDetails/>----->>this is the page which display delivery details (whether it is packed or in transit etc)*/}
      {/*<RecipeKitDelivery----->this is the mobile/ipad screen view of the items chosen by the user in the cart/>
      {/*<IngredientShop/>---> this is the "shoppage" 
      as you say but i think its unique-ingredients-page--responsive on 
      mobile screens,laptops,desktop,ipads
      ps. i havent changed the colors of the hovered items(red),or product items border etc etc according to sheerins design-- sorry*/}
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Admin from '../views/Admin.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    props: {
      meals: [
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "1 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "2 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "3 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }, {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "4 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "5 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "6 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }
      ],
      newMeal: {
        prices: ["Small.....$7.50", "Large.....$12.00"],
        qty: ["1", "2", "3", "4"],
        title: "",
        shortDescription:
          "",
        imageSrc: ""

    
      }
    }
  }

]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
